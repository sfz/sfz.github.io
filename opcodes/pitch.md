---
layout: sfz/opcode
lang: en
title: pitch
---
Range of tune in the SFZ1 spec is ±1 semitone, from -100 to 100, though at least
in ARIA, it seems a broader range is supported, at least -2400 to 2400 cents.
Only negative values must be prefixed with sign.

##### Examples

```
pitch=33
pitch=-30
pitch=94
```

Modulating pitch with MIDI CC to create a tune control is possible in SFZ2. If the
control needs to go both up and down, there are two ways to do this. One is to move
the pitch down by the tuning range, then have modulation move it up by twice the
tuning range, so that when the control is at the midpoint, the region will play at
its orignal, unmodulated pitch. For a range of 100 cents this would look like this:

```
pitch=-100
pitch_oncc27=200
```

Another way is to use default [curve](/headers/curve) 1 which ranges from -1 to 1,
and set the pitch control to the tuning range.

```
pitch_oncc27=100
pitch_curvecc27=1
```
