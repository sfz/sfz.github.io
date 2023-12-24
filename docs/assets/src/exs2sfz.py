""" EXS24 to SFZ sample library metadata converter.

    Might work. Might awaken some forgotten trickster goddess and lure her to your computer. Enjoy.

    Copyright (c) 2013, vonred

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is
    hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
    INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE
    FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
    ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. """


import sys
import os.path
import struct


class EXSChunk(object):

	__size = None

	@classmethod
	def parse(cls, instrument, offset):
		""" read the chunk signature, and add a wrapper for the type-specific data """
		
		sig = struct.unpack_from('<I', instrument.data, offset)[0]

		for subclass in cls.__subclasses__():
			if subclass.sig == sig:
				return subclass(instrument, offset)
		
		raise RuntimeError("Encountered an unknown chunk signature! signature is 0x{1:08X}".format(sig))  

	@property
	def size(self):
		""" size is specified in bytes, at byte 4-8, and does not include common chunk elements;
			that is, does not include the first 84 bytes """

		if self.__size is None:
			self.__size = 84 + struct.unpack_from('<I', self.instrument.data, self.offset + 4)[0]

		return self.__size

	@property
	def id(self):
		""" return the chunk's id number; n.b. that this does not seem to actually be used --
			the sequence of chunks of each type in the file is used instead """

		return struct.unpack_from('<I', self.instrument.data, self.offset + 8)[0]

	@property
	def name(self):
		""" the name of a chunk starts at byte 20, and has a max. length of 64 bytes;
			this is treated as a zero-terminated utf-8 string """

		return self.instrument.data[self.offset + 20:self.offset + 84].decode('utf-8').split('\x00')[0]

	def display(self):
		"""" display the raw chunk data in hexdump format """

		for line in range(0, self.size, 16):
			print("0x{0:04X}: ".format(line), end='')
			for i in range(0, 16, 4):
				for j in range(0, 4):
					index = line + i + j
					if index >= self.size:
						print("  ", end='')
					else:
						print("{0:02X}".format(self.instrument.data[self.offset + index]), end='')
				print(" ", end='')
			print(" ", end='')
			end = line + 16
			if end > self.size:
				end = self.size
			for c in self.instrument.data[self.offset + line:self.offset + end]:
				if c > 13 and c < 128:
					print(chr(c), end='')
				else:
					print(" ", end='') 
			print("")


class EXSHeader(EXSChunk):

	sig = 0x00000101
	offset = None

	def __init__(self, instrument, offset):
		self.instrument = instrument
		self.offset = offset

		if not offset == 0:
			raise RuntimeError("Found header at location  other than beginning of file! offset is ".format(offset))  


class EXSZone(EXSChunk):

	sig = 0x01000101
	offset = None

	def __init__(self, instrument, offset):
		self.instrument = instrument
		self.offset = offset

	@property
	def rootnote(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 85)[0]

	@property
	def finetune(self):
		return struct.unpack_from('b', self.instrument.data, self.offset + 86)[0]

	@property
	def pan(self):
		return struct.unpack_from('b', self.instrument.data, self.offset + 87)[0]

	@property
	def volumeadjust(self):
		return struct.unpack_from('b', self.instrument.data, self.offset + 88)[0]

	@property
	def startnote(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 90)[0]
	@property
	def endnote(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 91)[0]

	@property
	def minvel(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 93)[0]
	@property
	def maxvel(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 94)[0]

	@property
	def samplestart(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 96)[0]
	@property
	def sampleend(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 100)[0]

	@property
	def loopstart(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 104)[0]
	@property
	def loopend(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 108)[0]

	@property
	def loop(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 117)[0]

	@property
	def pitchtrack(self):
		return not (struct.unpack_from('B', self.instrument.data, self.offset + 84)[0] & 1)
	@property
	def oneshot(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 84)[0] & 2

	@property
	def group(self):
		group = struct.unpack_from('<i', self.instrument.data, self.offset + 172)[0]
		if group >= 0:
			return group

		# FIXME: the group can be -1 -- just returning the last group for now
		return len(self.instrument.groups) - 1

	@property
	def sampleindex(self):
		return struct.unpack_from('<I', self.instrument.data, self.offset + 176)[0]


class EXSGroup(EXSChunk):

	sig = 0x02000101
	offset = None

	def __init__(self, instrument, offset):
		self.instrument = instrument
		self.offset = offset

	@property
	def polyphony(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 86)[0]

	@property
	def trigger(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 157)[0]

	@property
	def output(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 158)[0]
	@property
	def sequence(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 164)[0]


class EXSSample(EXSChunk):

	sig = 0x03000101
	offset = None

	def __init__(self, instrument, offset):
		self.instrument = instrument
		self.offset = offset

	@property
	def length(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 88)[0]

	@property
	def rate(self):
		return struct.unpack_from('<i', self.instrument.data, self.offset + 92)[0]

	@property
	def bitdepth(self):
		return struct.unpack_from('B', self.instrument.data, self.offset + 96)[0]


class EXSParam(EXSChunk):

	sig = 0x04000101
	offset = None

	def __init__(self, instrument, offset):
		self.instrument = instrument
		self.offset = offset


class EXSSamplePool(object):

	locations = None

	def __init__(self):
		self.locations = []

	def locate(self, filename, search_depth=1):
		""" try to locate the directory containing a sample; if found, 
			it will be added to the list of known locations which are searched first """

		# note that, as NTFS and HFS are not (usually) case-sensitive, neither are filename comparisons here

		def search_location(search):
			if search in self.locations:
				return
			
			path = os.path.normpath(os.path.abspath(os.path.join(self.base, search))) 
			if path == last:
				return

			for name in os.listdir(path):
				location = os.path.join(path, name)
				if os.path.isfile(location):
					if name.lower() == filename:
						self.locations.append(search)
						return search
				elif os.path.isdir(location):
					location = search_location(os.path.join(search, name))
					if not location is None:
						return location;
		
		filename = filename.lower()

		# first try if the file is located in a known location
		for location in self.locations:
			for name in os.listdir(os.path.join(self.base, location)):
				if name.lower() == filename:
					if os.path.isfile(os.path.join(self.base, location, filename)):
						return location
	
		# try to locate the file
		last = ""
		search = ""
		for _i in range(0, search_depth):
			location = search_location(search)
			if not location is None:
				return location;
			last = os.path.normpath(os.path.abspath(os.path.join(self.base, search)))
			search = os.path.join(search, "..")
		
		raise RuntimeError("Couldn't locate sample {0}!".format(filename))


class EXSSamplePoolDummy(EXSSamplePool):

	name = None

	def __init__(self, name=None):
		self.name = name
	
	def path(self, filename):
		return os.path.join(self.name, filename)


class EXSSamplePoolFixed(EXSSamplePool):

	base = None

	def __init__(self, path):
		if os.path.exists(path):
			self.base = os.path.dirname(path)
		else:
			raise RuntimeError("{0}is not a valid path!".format(path))
			
		super().__init__()
	
	def path(self, filename):
		return os.path.join(self.base, self.locate(filename), filename) 


class EXSSamplePoolLocator(EXSSamplePool):

	base = None

	def __init__(self, exsfile_name):
		self.base = os.path.dirname(exsfile_name)
		super().__init__()
	
	def path(self, filename):
		return os.path.join(self.locate(filename, 4), filename) 


class EXSInstrument(object):
	
	data = None
	pool = None

	exsfile_name = None

	def __init__(self, exsfile_name, sample_location=None):
		
		self.__zones = None
		self.__groups = None
		self.__samples = None
		self.__objects = None
		
		self.exsfile_name = exsfile_name
		
		if os.stat(exsfile_name).st_size > 1024 * 1024:
			raise RuntimeError("EXS file is too large; will not parse! (size > 1 MebiByte)")

		with open(exsfile_name, 'rb') as exsfile:
			
			# read the header
			self.data = exsfile.read(84)

			# ensure this is a valid file we can parse
			if struct.unpack_from('>I', self.data, 0)[0] == EXSHeader.sig and self.data[16:20] == b'SOBT':
				raise RuntimeError("File is a big endian EXS file; cannot parse!")
			if not struct.unpack_from('<I', self.data, 0)[0] == EXSHeader.sig and self.data[16:20] == b'TBOS':
				raise RuntimeError("File is not an EXS file; will not parse!")

			# now read the rest of the file
			self.data += exsfile.read(1024 * 1024 - 84)

		if isinstance(sample_location, EXSSamplePool):
			self.pool = sample_location 
		elif sample_location is None:
			self.pool = EXSSamplePoolLocator(exsfile_name)
		else:
			self.pool = EXSSamplePoolFixed(sample_location)

	@property
	def objects(self):
		if not self.__objects:
			self.__objects = []
			offset = 0
			end = len(self.data)
			while offset < end:
				new_object = EXSChunk.parse(self, offset)
				self.__objects.append(new_object)
				offset += new_object.size
				
				if isinstance(new_object, EXSZone):
					self.zones.append(new_object)
				elif isinstance(new_object, EXSGroup):
					self.groups.append(new_object)
				elif isinstance(new_object, EXSSample):
					self.samples.append(new_object)

		return self.__objects

	@property
	def zones(self):
		if not self.__zones:
			self.__zones = []
			len(self.objects)
		return self.__zones

	@property
	def samples(self):
		if not self.__samples:
			self.__samples = []
			len(self.objects)
		return self.__samples

	@property
	def groups(self):
		if not self.__groups:
			self.__groups = []
			len(self.objects)
		return self.__groups

	def build_sequences(self):
		""" exs handles round robin samples by using groups that point to the next group, and so on
			until the sequence is reset by pointing to group -1;
			here we trace each of those chains for simple processing later """ 

		sequences = []

		for group in self.groups:
			if not group.sequence:
				continue

			for sequence in sequences:
				if group in sequence:
					break
			else:

				# trace back to the first group in the chain by looking for a group that points to this chain,
				# and repeating the process until we end up at a group that's not pointed to

				gid = self.groups.index(group)
				sequence = []

				cont = True
				while cont:
					cont = False
					for g in self.groups:
						if g.sequence == gid and not self.groups.index(g) == g.sequence and not gid in sequence:
							sequence.append(gid)
							gid = self.groups.index(g)
							cont = True
							break

				# now that we're at the start of the chain, simply follow it to the end	

				sequence = []
				while not gid == -1 and not gid in sequence:
					sequence.append(gid)
					gid = self.groups[gid].sequence
	
				if len(sequence) > 1:				
					sequences.append(sequence)

		return sequences

	def convert(self, sfzfilename, overwrite=False):

		def get_sequence_position(zone):
			for sequence in sequences:
				if zone.group in sequence:
					return sequence.index(zone.group)
			return 0
		
		def get_rootnote(zpne):
			if not zone.pitchtrack:
				if zone.rootnote < zone.startnote or zone.rootnote > zone.endnote:
					return zone.startnote
			return zone.rootnote

		sequences = self.build_sequences()

		ranges = {}
		for zone in self.zones:
			key = (zone.startnote, zone.endnote, get_rootnote(zone), zone.pan, get_sequence_position(zone))
			if not key in ranges:
				ranges[key] = []
			ranges[key].append(zone)

		key_sequence = {}
		for key in sorted(ranges):

			# to make round robin samples and choke groups work together,
			# take the first exs group in a sequence and use that for all members of the sequence
			
			keyrange = ranges[key]
			group = keyrange[0].group

			for sequence in sequences:
				if group in sequence:
					group = sequence[0]
					break
			else:
				continue
					
			key_sequence[key] = group

		if not overwrite and os.path.exists(sfzfilename):
			raise RuntimeError("file {0} already exists; will not overwrite!".format(sfzfilename))

		with open(sfzfilename, 'wt') as sfzfile:
			
			print("// this file was generated from {exsfile} using vonred's {name}. Trickster goddess incoming.".
					format(exsfile=os.path.basename(self.exsfile_name), name=os.path.basename(__file__)),
					file=sfzfile)
			print("", file=sfzfile)

			for key in sorted(ranges):
				keyrange = ranges[key]

				print("<group>", end='', file=sfzfile)

				if (key[0] == key[1] == key[2]):
					# one key triggers a sample, use minimal parameters
					print(" key={key:#}".format(key=key[0]), end='', file=sfzfile)
				else:
					# multiple keys triggering a sample, add extra parameters
					# studio one's presence gets confused when it encounters key=nn pitch_keytrack=1; be explicit
					print("lokey={startnote:#} hikey={endnote:#} pitch_keycenter={rootnote}".
							format(startnote=keyrange[0].startnote, endnote=keyrange[0].endnote,
								   rootnote=keyrange[0].rootnote),
							end='', file=sfzfile)

				if key in key_sequence:
					choke_group = key_sequence[key]
				else:
					choke_group = keyrange[0].group

				choke_voices = {}
				for zone in keyrange:
					if (zone.minvel, zone.maxvel) in choke_voices:
						choke_voices[(zone.minvel, zone.maxvel)] += 1;
					else:
						choke_voices[(zone.minvel, zone.maxvel)] = 1

				if self.groups[keyrange[0].group].polyphony == choke_voices[(keyrange[0].minvel, keyrange[0].maxvel)]:
					# add a choke group for e.g. hihats in drum libraries

					if choke_group == 0:
						# group 0 can't be used as a choke group in sfz, so change it where needed 
						choke_group = len(self.groups)

					print(" group={group:#} off_by={group:#} polyphony={polyphony} off_mode=fast".
							format(group=choke_group, polyphony=self.groups[keyrange[0].group].polyphony),
							end='', file=sfzfile)

				if self.groups[keyrange[0].group].output > 0:
					print(" output={output:#}".format(output=self.groups[keyrange[0].group].output),
							end='', file=sfzfile)

				if keyrange[0].pan:
					print(" pan={pan:#}".format(pan=keyrange[0].pan), end='', file=sfzfile)

				if keyrange[0].oneshot:
					print(" loop_mode=one_shot", end='', file=sfzfile)

				for sequence in sequences:
					if keyrange[0].group in sequence:
						print(" seq_length={seq_length:#} seq_position={seq_position:#}".
								format(seq_length=len(sequence), seq_position=sequence.index(keyrange[0].group) + 1),
								end='', file=sfzfile)
						break

				print(" pitch_keytrack={pitchtrack:#}".format(pitchtrack=keyrange[0].pitchtrack), file=sfzfile)

				for zone in keyrange:
					print("\t<region> lovel={lovel:#03} hivel={hivel:#03} amp_velcurve_{hivel:#03}=1".
							format(lovel=zone.minvel, hivel=zone.maxvel),
							end='', file=sfzfile)

					if zone.finetune:
						print(" tune={finetune:#}".
								format(finetune=zone.finetune), end='', file=sfzfile)
	
					if zone.volumeadjust:
						print(" volume={volumeadjust:#}".
								format(volumeadjust=zone.volumeadjust), end='', file=sfzfile)

					if zone.samplestart:
						print(" offset={samplestart:#}".
								format(samplestart=zone.samplestart), end='', file=sfzfile)

					if zone.sampleend and zone.sampleend < self.samples[zone.sampleindex].length:
						print(" end={sampleend:#}".
								format(sampleend=zone.sampleend), end='', file=sfzfile)

					if zone.loop:
						print(" loop_mode=loop_sustain loop_start={loopstart:#} loop_end={loopend:#}".
								format(loopstart=zone.loopstart, loopend=zone.loopend - 1), end='', file=sfzfile)

					if self.groups[zone.group].trigger == 1:
						print(" trigger=release", end='', file=sfzfile)
	
					print(" sample={sample}".
							format(sample=self.pool.path(self.samples[zone.sampleindex].name)),
							end='', file=sfzfile)

					print("", file=sfzfile)


if __name__ == '__main__':

	if len(sys.argv) < 3 or len(sys.argv) > 4:
		print("Usage: {0} EXSfile.exs SFZfile.sfz [samplefolder]".format(__file__))
		print()
		print("    the samplefolder argument is optional; if not specified, the program will")
		print("    attempt to locate the samples by searching folders surrounding the exs file")
		print()
		
		sys.exit(64)

	samplefolder = sys.argv[3] if len(sys.argv) == 4 else None
	exs = EXSInstrument(sys.argv[1], samplefolder)
	exs.convert(sys.argv[2])
