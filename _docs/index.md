# Rules

- Start a md file with the [front matter](https://jekyllrb.com/docs/front-matter/)
  2 triple-dashed lines, otherwise Jekyll will copy the original md file into
  the resulting _site directory.

- Using block code three back ticks even with a single line, inline code is used
  for opcode keywords.

- Using spaces instead of tabs for indentation in pages, mainly on _config.yml to
  avoid issues / unwanted results.

- Using 80 characters per line limit for a better reading.

- Using a naming convention for numbered opcodes starting with N following with
  X Y etc, e.g.: `egN_timeX_onccY`

## Example

---
---
# opcode_name

This is just a description example for an opcode example.
This text is readable on any editor, with low or high resolutions.

##### Examples

```
opcode_name=value1

opcode_name=value2
```

| Type    | Default | Range          |
| ---     | ---     | ---            |
| foo     | bar0    | bar0 to bar100 |
