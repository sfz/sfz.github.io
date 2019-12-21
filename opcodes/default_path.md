---
layout: "sfz/opcode"
lang: "en"
opcode_name: "default_path"
---
Used under the ‹[control](/headers/control)› header. Changes the root path for
samples.

## Example

```
default_path=../Samples/
```

The string will be added as a prefix to every sample path defined until the end
of the file or until another <control> header is encountered. As such, it should
end with a forward or backward slash if it specifies a subdirectory, but you can
also use it without a forward or backward slash if your samples share a common
prefix for example.