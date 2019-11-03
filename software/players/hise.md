---
title: "HISE"
lang: "en"
---
[HISE] is an open source framework for building sample based virtual instruments.

## Key Features

- A highly performant Disk-Streaming Engine that allows you to stream hundreds
	of samples in parallel. Powerful .xml sample-mapping
	and HLAC-compression-algorithm included.

- A flexible DSP-Audio Module system that lets you combine Sound Generators,
	Modulators and Effects in a tree-like architecture for maximum efficiency.

- A handy Interface Designer that makes it easy to hook up an interface with
	customizable UI Components and convenient Floating Tiles.

- Connect & control the interactions with your virtual instrument via
	the powerful HISE Scripting Language (based upon javascript)
	in an IDE-like environment.

- Build upon the HISE architecture, include external libraries and get the most
	out of the Engine with C++.

- Export and Compile your HISE instruments and plugins as VSTi, AU and Standalone
	for all major OS platforms and DAWs.

Source: [HISE Documentation]

SFZ opcode support for import can be seen from [source code].

[HISE]: http://hise.audio
[HISE Documentation]: https://docs.hise.audio/introduction/index.html
[source code]: https://github.com/christophhart/HISE/blob/master/hi_sampler/sampler/SfzImporter.h#L47

