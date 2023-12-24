---
template: "sfz/opcode.j2"
opcode_name: "egN_loop_count"
---
Specifies how many times the loop for envelope N is to repeat.

## Example

```sfz
eg01_loop=2
eg01_loop_shape=1
eg01_loop_count=8
```
## Practical Considerations

This is either not implemented in ARIA or sfizz, or our testing was not able to discover how it works. The relevant opcodes are `egN_loop`, `egN_loop_count` and possibly `egN_loop_shape`. In the existing test examples, `egN_loop_shape` is always set to 1.
