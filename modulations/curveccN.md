---
title: curveccN
---
The `curvecc` modifier, when it's present, designates a [curve] which shapes
the controller input. If absent, the default curve is used, a straight line
which runs from 0 to 1.

The value of `curvecc` is a positive integer. It is the index of a curve,
either built in or user-defined, which corresponds to the `‹curve›` opcode
[curve_index].

[curve]:       /headers/curve
[curve_index]: /opcodes/curve_index
