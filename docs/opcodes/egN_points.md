---
layout: "sfz/opcode"
opcode_name: "egN_points"
---
Sets the number of points in envelope number N. The level of the envelope
at those points can then be set with [egN_levelX]. When a region
begins playing, the envelope starts at point number 0, and therefore an
envelope with 4 points will have points numbered 0 through 3, _not_ 1 through 4.

## Examples

```
eg01_points=3 	eg01_sustain=2
eg01_level0=0 	eg01_time0=0
eg01_level1=1 	eg01_time1=1
eg01_level2=1 	eg01_time2=1

eg01_points=7    eg01_sustain=5
eg01_level0=0 	 eg01_time0=0
eg01_level1=1 	 eg01_time1=0.5
eg01_level2=0.7  eg01_time2=0.5
eg01_level3=1  	 eg01_time3=0.5
eg01_level4=0.7  eg01_time4=0.5
eg01_level5=0.1  eg01_time5=0.5
eg01_level6=0    eg01_time6=1
```

## Practical Considerations

At least in ARIA, it's not necessary to define egN_points as the parser will
calculate how many points the envelope has from the number of points defined using
egN_level and egN_time for the specific number N. If egN_points is set to a lower
value than the number of points defined for the envelope, the entire envelope will
be used, and it will not be truncated at the number set usign egN_points - so in
effect, in ARIA this opcode appears to do nothing.

It may be necessary to specify this in Cakewalk players, however.


[egN_levelX]: egN_levelX
