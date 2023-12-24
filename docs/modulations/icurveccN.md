---
title: icurveccN
---
(target)_icurvecc is a deprecated ARIA extension. It acted as a companion to
[(target)_curvecc](curveccN.md) and determined whether the curve for the specified
target and CC should be calculated allowing fractional values,
or whether the calculations should be rounded off to allow whole numbers only.
With interpolation, it would be possible, for example, for CC2 to be effectively
equal to 63.5, but with interpolation off it would jump from 63 directly to 64.
In later versions of ARIA, fractional values are always used.
