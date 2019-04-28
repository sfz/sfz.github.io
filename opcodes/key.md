---
---
# key

`key` is equivalent to using `lokey`, `hikey` and `pitch_keycenter` and setting
them all to the same note value. Because of this, it is a very useful and
convenient opcode for instruments which do not need to spread a sample across
multiple notes. That means most chromatically sampled instruments or drum kits.
`key` values can be specified in MIDI note numbers (0-127) or note names
(IPN Standard). Numbers generally are better to use for getting the SFZ to
behave the same in all DAWs.

##### Example

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

| Type    | Default   | Range     | 
| ---     | ---       | ---       |
| integer | lokey=0   | 0 to 127  |
|         | hikey=127 | C-1 to G9 |

| Modulation Sources |       |
| :---               | :---: |
| Envelope           |   X   |
| LFO                |   X   |
| MIDI CC            |   X   |
