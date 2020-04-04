---
layout: "sfz/opcode"
opcode_name: "oscillator_multi"
---
- If the value is 1, the region operates normally or in ring modulation.
- If the value is 2, the region operates in frequency or phase modulation
  (see also [oscillator_mode]).
- If between 3 and 9, this defines a unison,
  with the value being the number of oscillators.
  In this case, [oscillator_detune] must also be set
  to indicate the spread between the oscillators.

## Cakewalk unison

Let `m` be the number of oscillators defined by `oscillator_multi`,
and `d` the detune value defined by [oscillator_detune].

The array of m oscillators is tuned by multiplying `d`
for each oscillator by its coefficient.

| Oscillator | Coefficient |
|   :---:    |    :---:    |
|     1      |      0      |
|     2      |     -1      |
|     3      |      1      |
|     4      |    -1/4     |
|     5      |     1/4     |
|     6      |    -1/2     |
|     7      |     1/2     |
|     8      |    -3/4     |
|     9      |     3/4     |
{: .table .table-sm .table-bordered .table-striped }

The oscillators sum into left and right channels with declining linear gain,
opposite for each channel.
With `i` the number of the oscillator (starting at 1),
the left gain is `(i-1)/(m-1)`, and the right gain is `1-((i-1)/(m-1))`.

## Example
```
/*
# Left:
  [4]   25 cents,        0 dB
  [3]  -25 cents, -2.49878 dB
  [2]  100 cents,  -6.0206 dB
  [1] -100 cents, -12.0412 dB
  [0]    0 cents,     -inf dB

# Right:
  [0]    0 cents,        0 dB
  [1] -100 cents, -2.49878 dB
  [2]  100 cents,  -6.0206 dB
  [3]  -25 cents, -12.0412 dB
  [4]   25 cents,     -inf dB
*/
<region>
oscillator_detune=100
oscillator_multi=5
```

[oscillator_mode]:   oscillator_mode
[oscillator_detune]: oscillator_detune
