---
template: "sfz/opcode.j2"
opcode_name: "pitch_random"
---
## Examples
Computed when the note is triggered,
remains the same for that region for as long as the region plays.

```sfz
pitch_random=10

pitch_random=400
```

Useful for humanizing the pitch of instruments with naturally imprecise
intonation, especially when playing multiple regions in unison.

## Practical Considerations

In ARIA this is unipolar, and equivalent to `pitch_oncc135`.
So, if `pitch_random` is set to 20, the region will play at pitches tuned by an
amount in the range from 0 cents to +20 cents. In order to get pitch to fluctuate
between -20 and +20 cents, there would be two ways to get there, either by
applying a fixed shift of -20 cents and a random shift of up to 40 cents:

```sfz
pitch=-20
pitch_random=40
```

Or use CC136, which is bipolar random from -1 to 1:

```sfz
pitch_oncc136=20
```
In rcg sfz and Cakewalk, this is bipolar.
