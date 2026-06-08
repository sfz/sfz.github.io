---
template: "sfz/opcode.j2"
title: "on_loccN / on_hiccN"
---
Sample trigger on MIDI continuous control N.
This does not involve playing any MIDI notes.

## Examples

```sfz
on_locc64=127 on_hicc64=127
key=-1
```

Region will play when a MIDI CC64 (sustain pedal) message with 127 value is
received. So, basically, when the sustain pedal is pressed down, this region will play.
This is useful with piano pedals - in the above example, `on_loccN` and `on_hiccN`
could be used to trigger a mechanical noise sample, whether any keys are being played
or not (which is what the [key]=-1 part is for). It would not typically be used with
hi-hat pedals, as most electronic drum kits will send a MIDI note when the pedal hits bottom.

```sfz
on_locc64=127 on_hicc64=127
key=-1
end=-1
sample=*silence
```

This is similar to the first example, but triggers a silent region which is terminated
immediately. This would be used where there is no mechanical noise to trigger, but a region
still needs to be triggered in order to mute other regions.

## Practical Considerations

on_locc/on_hicc effectively replaces the default [trigger]=attack.
The behavior of a region which has on_locc/on_hicc and trigger=attack both explicitly
specified is not defined by the SFZ specification, and that combination should be used.

In ARIA if on_locc/on_hicc and trigger=release or trigger=release_key is used, the
on_locc/on_hicc opcode will be effectively disregarded, and the region will behave
like a normal release or release_key region.


[trigger]: trigger.md
[key]: key.md
