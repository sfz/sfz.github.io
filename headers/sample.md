---
title:  "‹sample›"
layout: "sfz/header"
---
## Example
```
<region> sample=mysample.wav
<sample> name=mysample.wav data=[encoded-content-of-mysample.wav]
```

The content encoding is an alphabet mapping of 256 entries that map to each byte.
(in the encoding, a WAV file is immediately recognizable by having its four byte
"RIFF" header encoded to "|spp")

## Decoding

The decoding algorithm is as follows:

- Loop while there is an input byte `b1`
  - if `b1` is the end marker $24, stop reading
  - if `b1` is '\r' ($0D) or '\n' ($0A), discard it
  - if `b1` is the escape character '=' ($3D),
    - extract the next byte `b2`, and compute the next output byte as `(b2+$C0)%256`
  - otherwise, compute the next output byte as `(b2+$D6)%256`

## Encoding

- Loop while there is an input byte `b1`
  - if `(b1+$2A)%256` is one of the "forbidden characters" ($3D, $00, $09, $0A, $0D, $24)
    - output the escape character $3D, and then output the byte `(b1+$40)%256`
  - otherwise, output `(b1+$2A)%256`
- Output the end marker $24

## Alphabet

The alphabet used for the coding is as following:
```
A[$00] = {$2A}
A[$01] = {$2B}
A[$02] = {$2C}
A[$03] = {$2D}
A[$04] = {$2E}
A[$05] = {$2F}
A[$06] = {$30}
A[$07] = {$31}
A[$08] = {$32}
A[$09] = {$33}
A[$0A] = {$34}
A[$0B] = {$35}
A[$0C] = {$36}
A[$0D] = {$37}
A[$0E] = {$38}
A[$0F] = {$39}
A[$10] = {$3A}
A[$11] = {$3B}
A[$12] = {$3C}
A[$13] = {$3D $53} (would be $3D if not escaped)
A[$14] = {$3E}
A[$15] = {$3F}
A[$16] = {$40}
A[$17] = {$41}
A[$18] = {$42}
A[$19] = {$43}
A[$1A] = {$44}
A[$1B] = {$45}
A[$1C] = {$46}
A[$1D] = {$47}
A[$1E] = {$48}
A[$1F] = {$49}
A[$20] = {$4A}
A[$21] = {$4B}
A[$22] = {$4C}
A[$23] = {$4D}
A[$24] = {$4E}
A[$25] = {$4F}
A[$26] = {$50}
A[$27] = {$51}
A[$28] = {$52}
A[$29] = {$53}
A[$2A] = {$54}
A[$2B] = {$55}
A[$2C] = {$56}
A[$2D] = {$57}
A[$2E] = {$58}
A[$2F] = {$59}
A[$30] = {$5A}
A[$31] = {$5B}
A[$32] = {$5C}
A[$33] = {$5D}
A[$34] = {$5E}
A[$35] = {$5F}
A[$36] = {$60}
A[$37] = {$61}
A[$38] = {$62}
A[$39] = {$63}
A[$3A] = {$64}
A[$3B] = {$65}
A[$3C] = {$66}
A[$3D] = {$67}
A[$3E] = {$68}
A[$3F] = {$69}
A[$40] = {$6A}
A[$41] = {$6B}
A[$42] = {$6C}
A[$43] = {$6D}
A[$44] = {$6E}
A[$45] = {$6F}
A[$46] = {$70}
A[$47] = {$71}
A[$48] = {$72}
A[$49] = {$73}
A[$4A] = {$74}
A[$4B] = {$75}
A[$4C] = {$76}
A[$4D] = {$77}
A[$4E] = {$78}
A[$4F] = {$79}
A[$50] = {$7A}
A[$51] = {$7B}
A[$52] = {$7C}
A[$53] = {$7D}
A[$54] = {$7E}
A[$55] = {$7F}
A[$56] = {$80}
A[$57] = {$81}
A[$58] = {$82}
A[$59] = {$83}
A[$5A] = {$84}
A[$5B] = {$85}
A[$5C] = {$86}
A[$5D] = {$87}
A[$5E] = {$88}
A[$5F] = {$89}
A[$60] = {$8A}
A[$61] = {$8B}
A[$62] = {$8C}
A[$63] = {$8D}
A[$64] = {$8E}
A[$65] = {$8F}
A[$66] = {$90}
A[$67] = {$91}
A[$68] = {$92}
A[$69] = {$93}
A[$6A] = {$94}
A[$6B] = {$95}
A[$6C] = {$96}
A[$6D] = {$97}
A[$6E] = {$98}
A[$6F] = {$99}
A[$70] = {$9A}
A[$71] = {$9B}
A[$72] = {$9C}
A[$73] = {$9D}
A[$74] = {$9E}
A[$75] = {$9F}
A[$76] = {$A0}
A[$77] = {$A1}
A[$78] = {$A2}
A[$79] = {$A3}
A[$7A] = {$A4}
A[$7B] = {$A5}
A[$7C] = {$A6}
A[$7D] = {$A7}
A[$7E] = {$A8}
A[$7F] = {$A9}
A[$80] = {$AA}
A[$81] = {$AB}
A[$82] = {$AC}
A[$83] = {$AD}
A[$84] = {$AE}
A[$85] = {$AF}
A[$86] = {$B0}
A[$87] = {$B1}
A[$88] = {$B2}
A[$89] = {$B3}
A[$8A] = {$B4}
A[$8B] = {$B5}
A[$8C] = {$B6}
A[$8D] = {$B7}
A[$8E] = {$B8}
A[$8F] = {$B9}
A[$90] = {$BA}
A[$91] = {$BB}
A[$92] = {$BC}
A[$93] = {$BD}
A[$94] = {$BE}
A[$95] = {$BF}
A[$96] = {$C0}
A[$97] = {$C1}
A[$98] = {$C2}
A[$99] = {$C3}
A[$9A] = {$C4}
A[$9B] = {$C5}
A[$9C] = {$C6}
A[$9D] = {$C7}
A[$9E] = {$C8}
A[$9F] = {$C9}
A[$A0] = {$CA}
A[$A1] = {$CB}
A[$A2] = {$CC}
A[$A3] = {$CD}
A[$A4] = {$CE}
A[$A5] = {$CF}
A[$A6] = {$D0}
A[$A7] = {$D1}
A[$A8] = {$D2}
A[$A9] = {$D3}
A[$AA] = {$D4}
A[$AB] = {$D5}
A[$AC] = {$D6}
A[$AD] = {$D7}
A[$AE] = {$D8}
A[$AF] = {$D9}
A[$B0] = {$DA}
A[$B1] = {$DB}
A[$B2] = {$DC}
A[$B3] = {$DD}
A[$B4] = {$DE}
A[$B5] = {$DF}
A[$B6] = {$E0}
A[$B7] = {$E1}
A[$B8] = {$E2}
A[$B9] = {$E3}
A[$BA] = {$E4}
A[$BB] = {$E5}
A[$BC] = {$E6}
A[$BD] = {$E7}
A[$BE] = {$E8}
A[$BF] = {$E9}
A[$C0] = {$EA}
A[$C1] = {$EB}
A[$C2] = {$EC}
A[$C3] = {$ED}
A[$C4] = {$EE}
A[$C5] = {$EF}
A[$C6] = {$F0}
A[$C7] = {$F1}
A[$C8] = {$F2}
A[$C9] = {$F3}
A[$CA] = {$F4}
A[$CB] = {$F5}
A[$CC] = {$F6}
A[$CD] = {$F7}
A[$CE] = {$F8}
A[$CF] = {$F9}
A[$D0] = {$FA}
A[$D1] = {$FB}
A[$D2] = {$FC}
A[$D3] = {$FD}
A[$D4] = {$FE}
A[$D5] = {$FF}
A[$D6] = {$3D $16} (would be $00 if not escaped)
A[$D7] = {$01}
A[$D8] = {$02}
A[$D9] = {$03}
A[$DA] = {$04}
A[$DB] = {$05}
A[$DC] = {$06}
A[$DD] = {$07}
A[$DE] = {$08}
A[$DF] = {$3D $1F} (would be $09 if not escaped)
A[$E0] = {$3D $20} (would be $0A if not escaped)
A[$E1] = {$0B}
A[$E2] = {$0C}
A[$E3] = {$3D $23} (would be $0D if not escaped)
A[$E4] = {$0E}
A[$E5] = {$0F}
A[$E6] = {$10}
A[$E7] = {$11}
A[$E8] = {$12}
A[$E9] = {$13}
A[$EA] = {$14}
A[$EB] = {$15}
A[$EC] = {$16}
A[$ED] = {$17}
A[$EE] = {$18}
A[$EF] = {$19}
A[$F0] = {$1A}
A[$F1] = {$1B}
A[$F2] = {$1C}
A[$F3] = {$1D}
A[$F4] = {$1E}
A[$F5] = {$1F}
A[$F6] = {$20}
A[$F7] = {$21}
A[$F8] = {$22}
A[$F9] = {$23}
A[$FA] = {$3D $3A} (would be $24 if not escaped)
A[$FB] = {$25}
A[$FC] = {$26}
A[$FD] = {$27}
A[$FE] = {$28}
A[$FF] = {$29}
```
