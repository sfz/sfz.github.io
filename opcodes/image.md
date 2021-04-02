---
layout: "sfz/opcode"
opcode_name: "image"
---
Sets the background image of the instrument. Supported in Cakewalk Dimension Pro, DropZone and Session Drummer
and possibly other players. Uses bitmap images, and should support transparent alpha channels. In DropZone,
the visible image is approximately 530x150 pixels. If a larger image is loaded, only the top left part will be visible.

This seems to show one image per instrument, and can be placed under any header. If set multiple times, the last
image set in the SFZ file is actually used, at least in DropZone. It is not certain whether Session Drummer can have
different images for different kits or different kit pieces.
