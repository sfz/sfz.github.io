# lopolyaft / hipolyaft

Defines the range of last Polyphonic Aftertouch message required for the region
to play. The incoming note information in the Polyphonic Aftertouch message is
not relevant.

##### Example

The region will play only if last Polyphonic Aftertouch message received was
in the 30-100 range.

```
lopolyaft=30 hipolyaft=100
```

| Type    | Default       | Range    |
| ---     | ---           | ---      |
| integer | lopolyaft=0   | 0 to 127 |
|         | hipolyaft=127 |          |
