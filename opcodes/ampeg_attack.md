---
layout: "sfz/opcode"
opcode_name: "ampeg_attack"
math: true
---
The attack time for the amplifier envelope generator to go from zero to maximum volume.  This is "A" in the standard ADSR volume envelope.

## Examples

```
ampeg_attack=1.2
fileg_attack=0.1
```

SFZ uses a 5 stage "AHDSR" envelope, which has these controls, applied in this order:

A - attack time, from note start at volume zero to max level for the note
H - hold time, when the volume is held at max level
D - decay time, when the volume decreases exponentially to the sustain level
S - sustain **level**, the level at which the note remains while the key is down or the sustain pedal is down.
R - release time, when the volume decays exponentially to zero.  This begins when the the key is released and the sustain pedal is up.  Note that this can happen before any of the above times have elapsed.

Here is a screenshot of a file output using Sforzando, showing the
ampeg_envelope shape and its stages.

{%include img-fluid.html
  img="/assets/img/ampeg_env.jpg"
  alt="DAHDSR envelope shape image"%}

`fileg_attack` is key to 303-style basses.

In ARIA, the SFZ1 envelopes have linear attack (for `pitcheg` and `fileg`,
probably linear in cents, which won't translate into linear in Hertz).
Decay and release stages have a curve which is faster than linear, and it 
seems to match "well enough"  with a multiplicatively decreasing curve.
The step size should be close to
$$ \mu = \exp \left( - \frac{8.0}{t \times s} \right) $$
where $$t$$ is the decay duration in seconds, and $$s$$ is the sample rate in Hertz.
The envelope $$x_{n+1}$$ at index $$n+1$$ is thus computed as
$$ x_{n+1} = \mu \times x_{n}. $$


