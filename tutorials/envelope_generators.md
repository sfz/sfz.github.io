---
title: Envelope Generators
---
Envelope generators (EGs) are used to control the profile of the volume, filter,
or pitch, based on the timing of the key press and release
(including sustain pedal release.)
See [SF1 Modulations]

SFZ has two types of EGs: Sf1 and SF1.

## SF1: AHDSR

SF1 envelopes are called AHDSR after the 5 controls of the envelope,
applied in this order:

| --- | ---               | --- |
| A   | attack time       | from note start at volume zero to max level for the note
| H   | hold time         | when the volume is held at max level
| D   | decay time        | when the volume decreases exponentially to the sustain level
| S   | sustain **level** | the level at which the note remains while the key is down or the sustain pedal is down
| R   | release time      | when the volume decays exponentially to zero. This begins when the the key is released and the sustain pedal is up, even if the times above have not been reached. Note that this can happen before any of the above times have elapsed.

Here is a screenshot of a file output using Sforzando, showing the
ampeg_envelope shape and its stages.

{%include img-fluid.html
  img="/assets/img/ampeg_env.jpg"
  alt="DAHDSR envelope shape image"%}

## SF2

The SF2 standard has a more flexible generator that can be used in addition to
the above.

(TODO: Add description.)
