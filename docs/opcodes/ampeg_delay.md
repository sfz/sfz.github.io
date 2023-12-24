---
layout: "sfz/opcode"
opcode_name: "ampeg_delay"
---
This is the time elapsed from note on to the start of
the Attack stage.

If both envelope delay and the general [delay] or [delay_random] are used in
the same region, the envelope delays start after [delay] and [delay_random]
have both completed their duration.

## Examples

```
fileg_delay=0.004
ampeg_delay=0.05
```


[delay]:        delay
[delay_random]: delay_random
