---
---
# lochanaft / hichanaft

Defines the range of last Channel Aftertouch message required for the region to play.

##### Examples

The region will play only if last Channel Aftertouch message received was
in the 30-100 range.

```
lochanaft=30 hichanaft=100
```

| Type    | Default       | Range    |
| ---     | ---           | ---      |
| integer | lochanaft=0   | 0 to 127 |
|         | hichanaft=127 |          |
