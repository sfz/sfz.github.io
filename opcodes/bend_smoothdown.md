---
---
# bend_smoothdown

Pitch bend smoothness for downward bends - adds "inertia" to pitch bends, so
fast movements of the pitch bend wheel will have a delayed effect on the pitch
change. Default is 0. If this and [bend_smoothup](bend_smoothup) are set to the
same value, the result is the same as using [bend_smooth](bend_smooth).

##### Examples

```
bend_smoothdown=50
bend_smoothdown=10
```
