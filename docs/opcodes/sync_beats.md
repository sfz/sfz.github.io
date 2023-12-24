---
template: "sfz/opcode.j2"
opcode_name: "sync_beats"
---
When `sync_beats` is specified and after input controls instruct the region to play,
the playback will be postponed until the next multiple of the specified value
is crossed.

## Example

```sfz
sync_beats=4
```

In this example, if note is pressed in beat 2 of current track, note won't be
played until beat 4 reaches.

This opcode will only work in hosts featuring song position information
(vstTimeInfo ppqPos).
