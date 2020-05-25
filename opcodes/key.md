---
layout: "sfz/opcode"
lang: "en"
opcode_name: "key"
---
Because of this, it is a very useful and convenient opcode for instruments which
do not need to spread a sample across multiple notes.
That means most chromatically sampled instruments or drum kits.
`key` values can be specified in MIDI note numbers (0-127) or note names
(IPN Standard). Numbers generally are better to use for getting the SFZ to
behave the same in all DAWs.

## Example

These two conventions will yield the same key mapping:

```
key=72
or
key=c5
```

Both are also equivalent to:

```
lokey=72 hikey=72 pitch_keycenter=72
```

Key can also be combined with the others, which will override the value set by key
although key must be specified first. Not all SFZ players might support this
behavior but rgcaudio sfz and ARIA both do.

```
key=72 lokey=70
```

Will be equivalent to

```
lokey=70 hikey=72 pitch_keycenter=72
```

However, this would just be the same as setting key=72, as key comes later and
the lokey value it would set will override the previous lokey.

```
lokey=70 key=72
```
