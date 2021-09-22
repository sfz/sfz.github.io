#!/usr/bin/env python3

import os, errno
import re
import yaml

opcodes = set() # "primary" opcodes only, not the full list
aliases = []
mods_cc = []
mods_vl = []
current_opcode = None

def process_opcode(obj, isPrimary=False):
	global current_opcode, opcodes, aliases, mods_cc, mods_vl
	if isPrimary:
		current_opcode = re.sub(r"\W+", '', obj['name'])
		opcodes.add(current_opcode)
	for a in obj.get('alias', []):
		process_opcode(a)
		aliases += [(a['name'], current_opcode)]
	for m in obj.get('modulation', {}).get('midi_cc', []):
		process_opcode(m)
		mods_cc += [(m['name'], current_opcode)]
	for v in obj.get('modulation', {}).get('velocity', []):
		process_opcode(v)
		mods_vl += [(v['name'], current_opcode)]

def process(data):
	if isinstance(data, dict):
		for k, v in data.items():
			if k == 'opcodes':
				for o in v:
					process_opcode(o, True)
			else:
				process(v)
	elif isinstance(data, list):
		for v in data:
			process(v)

def process_data():
	with open('_data/sfz/syntax.yml') as f:
		data = yaml.load(f, Loader=yaml.FullLoader)
		process(data)

# Remove files without raising file not found error
def silentremove(filename):
	try:
		os.remove(filename)
	except OSError as e:
		if e.errno != errno.ENOENT: # no such file or directory
			raise

# Recrate all ccs / aliases opcode symlinks to primary opcodes from db
def recreate_symlinks():
	hilo_list = ["delay_damp--", "--bend", "--bpm", "--ccN", "--chanaft", "--chan",
		"--hdccN", "--key", "--polyaft", "--prog", "--rand", "--timer", "--vel",
		"on_--ccN", "on_--hdccN", "reverse_--ccN", "stop_--ccN", "stop_--hdccN",
		"sw_--key", "sw_--last", "xfin_--ccN", "xfin_--key", "xfin_--vel",
		"xfout_--ccN", "xfout_--key", "xfout_--vel"
		]
	main_pages = set()
	main_list = list(opcodes)
	main_list.append("index")
	[main_pages.add(o + ".md") for o in main_list]
	os.chdir("opcodes")

	for f in os.listdir('.'):
		if f not in main_pages or os.path.islink(f):
			silentremove(f)

	for o in hilo_list:
		src = o.replace("--", "lo")
		dst = o.replace("--", "hi")
		os.symlink(src + ".md", dst + ".md")

	[os.symlink('%s.md' % (dst), '%s.md' % (src)) for src, dst in aliases]
	[os.symlink('%s.md' % (dst), '%s.md' % (src)) for src, dst in mods_cc]
	[os.symlink('%s.md' % (dst), '%s.md' % (src)) for src, dst in mods_vl]
	os.symlink('../headers/curve.md', 'curve_index.md')
	os.symlink('../headers/curve.md', 'vN.md')
	os.symlink('sw_down.md', 'sw_up.md')
	os.symlink('sw_default.md', 'sw_label.md')

# TODO: currently unused but useful for syntax highlighting tools
def get_all_opcodes():
	all_opcodes = list(opcodes)
	[all_opcodes.append(alias) for alias, main in aliases]
	[all_opcodes.append(cc)    for cc,    main in mods_cc]
	[all_opcodes.append(vel)   for vel,   main in mods_vl]
	#print('\n'.join([x for x in all_opcodes]))
	return all_opcodes

def main():
	process_data()
	recreate_symlinks()

if __name__ == '__main__':
	main()
