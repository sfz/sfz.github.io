---
template: "sfz/opcode.j2"
opcode_name: "image"
---
## Practical Considerations

Supported in Cakewalk DropZone, sfizz and possibly other players,
but not ARIA / Sforzando.

- **DropZone** supports bitmap images with transparent alpha channels,
showing one image per instrument and can be placed under any header.
The visible image is approximately 530x150 pixels. If a larger image is loaded,
only the top left part will be visible.
If set multiple times, the last image set in the SFZ file is actually used.
- **Dimension Pro** parses but ignores the opcode.
- **sfizz** supports it under the `<control>` header only,
together with a custom `image_controls` opcode to support an additional image
in its controls tab.
The image size is 775x335 pixels with 1:1 aspect ratio, not limited to BMP images.
