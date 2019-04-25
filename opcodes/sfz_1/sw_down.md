# sw_down

Enables the region to play if the key equal to sw_down value is depressed.
Key has to be in the range specified by sw_lokey and sw_hikey.

sw_down can be entered in either MIDI note numbers (0 to 127) or in MIDI note
names (C-1 to G9)

Examples:

```
sw_down=Cb3
```

The difference between this and [sw_last](/opcodes/sfz_1/sw_last) is that sw_last
is a "sticky" keyswitch - after releasing the keyswitch note, it continues to
affect notes until another keyswitch is pressed. sw_down, on the other hand, is
"non-sticky" and only affects notes played while the switch is held down. This
makes sw_down a good choice for keyswitching articulations which are often used
for only one note before going back to a "normal" articulation. For example,
hammer-ons on a guitar could be a good use case for sw_down.
