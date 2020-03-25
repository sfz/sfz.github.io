---
layout: "sfz/opcode"
lang: "en"
opcode_name: "ampeg_attack"
---
## Examples

```
ampeg_attack=1.2
fileg_attack=0.1
```

These are very frequently used, especially with amplifier envelopes.
`ampeg_attack` is the standard "A" in the basic ADSR volume envelope.
`fileg_attack` is key to 303-style basses.

In ARIA, the SFZ1 envelopes have linear attack (for pitcheg and fileg,
probably linear in cents, which won't translate into linear in Hertz).
Decay and release stages have a curve which is faster than linear.
Additional information based on testing by paulfd:

```
...it matches "well enough" with a multiplicatively to be a close match with a multiplicatively decreasing curve from 1.0 towards 0.0005 (which is around -33 dB). The step is x_{n+1} = (0.0005/num) * x_{n} where num is the number of samples of the ramp. The full formula for the curve would be x_{n+1} = (target/start/num) * x_{n}.

The decay stage is also multiplicative but the ramp does not seem to follow the same law with target = sustain, but rather something strange like x_{n+1} = (0.0005/(1-sustain)/num) *x_{n} where the actual envelope would be sustain + x_{n}.
```

Here is a screenshot of a file output using Sforzando, showing the
ampeg_envelope shape and its stages.

{%include img-fluid.html
  img="/assets/img/ampeg_env.jpg"
  alt="DAHDSR envelope shape image"%}
