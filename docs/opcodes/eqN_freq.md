---
layout: "sfz/opcode"
opcode_name: "eqN_freq"
---
The SFZ specification has three EQ bands, with this opcode setting
the center frequency of band N. There are three parametric bands:
eq1, eq2 and eq3.

If more than three bands are needed, ARIA allows [fil_type]
to be set to lsh, hsh or peq to use one or both filters as additional
EQ bands, including low shelf and high shelf.

## Examples

```
eq1_freq=80
eq2_freq=1000
eq3_freq=4500

eq2_freq_oncc30=2500
```


[fil_type]: fil_type
