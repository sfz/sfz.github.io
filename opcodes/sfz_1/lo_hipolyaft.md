# lopolyaft / hipolyaft

Defines the range of last Polyphonic Aftertouch message required for the region
to play. The incoming note information in the Polyphonic Aftertouch message is
not relevant.

Examples:

```
lopolyaft=30 hipolyaft=100
```

The region will play only if last Polyphonic Aftertouch message received was in the 30-100 range.

Range: 0 to 127

Defaults: lopolyaft=0 hipolyaft=127
