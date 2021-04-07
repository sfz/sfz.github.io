---
layout: "sfz/opcode"
opcode_name: "image"
---
## Practical Considerations

Supported in Cakewalk DropZone, sfizz and possibly other players.

- **DropZone** supports bitmap images with transparent alpha channels,
showing one image per instrument and can be placed under any header.
The visible image is approximately 530x150 pixels. If a larger image is loaded,
only the top left part will be visible.
If set multiple times, the last image set in the SFZ file is actually used.
- **Dimension Pro** parses but ignores the opcode.
- **sfizz** supports it under the `<control>` header only, not limited to BMP images.
