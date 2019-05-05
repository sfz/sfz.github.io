---
title: pan
---
The panoramic position for the region.

If a mono sample is used, pan value defines the position in the stereo image
where the sample will be placed. When a stereo sample is used, the pan value the
relative amplitude of one channel respect the other.

A value of zero means centered, negative values move the panoramic to the left,
positive to the right.

##### Examples

```
pan=-30.5
pan=0
pan=43
```

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0.0     | -100 to 100 % |
