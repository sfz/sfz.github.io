---
lang: en
title: rt_decay
---
Applies only to regions that triggered through [trigger](trigger)=release.
The volume decrease (in db) per seconds after the note has been attacked.

##### Example

```
<region> sample=pianoA4.wav trigger=attack

<region> sample=keyup_noise.wav trigger=release rt_decay=3

//The sample keyup_noise.wav will play 3db quieter for every second the key has been on.
```

Range is 0 to 200.
In general, higher values mean quicker decrease, which makes sense for cases
where the note sustains longer. For example, higher piano notes decay much
faster than lower ones, so the higher notes will need higher rt_decay values.
Release samples for sounds which do not naturally decay, such as organs or
guitar feedback, do not need their volume to decrease based on note duration,
and can use the default value of 0.

| Type  | Default | Range       |
| ---   | ---     | ---         |
| float | 0 dB    | 0 to 200 dB |
