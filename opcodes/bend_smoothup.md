---
---
# bend_smoothup

Pitch bend smoothness for upwards bends - adds "inertia" to pitch bends, so fast
movements of the pitch bend wheel will have a delayed effect on the pitch change.
Default is 0. If this and [bend_smoothdown](bend_smoothdown) are set to the same
value, the result is the same as using [bend_smooth](bend_smooth).

##### Examples

```
bend_smoothup=50
bend_smoothup=10
```
