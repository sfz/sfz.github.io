---
layout: "sfz/opcode"
opcode_name: "sync_offset"
---
When [sync_beats](sync_beats) is specified and after input controls instruct
the region to play, the playback will be postponed until the next multiple of
the specified value plus the `sync_offset` value is crossed.

## Example

```
sync_beats=4
sync_offset=1
```

In this example, if note is pressed in beat 2 of current track,
note won't be played until beat 5 reaches.

This opcode will only work in hosts featuring song position information
(vstTimeInfo ppqPos).
