# sync_beats

Region playing synchronization to host position.

When sync_beats is specified and after input controls instruct the region to play,
the playback will be postponed until the next multiple of the specified value
is crossed.

##### Example

```
sync_beats=4
```

In this example, if note is pressed in beat 2 of current track, note won't be
played until beat 4 reaches.

This opcode will only work in hosts featuring song position information
(vstTimeInfo ppqPos).

| Type  | Default | Range         | 
| ---   | ---     | ---           |
| float | 0.0     | 0 to 32 beats |
