// SPDX-License-Identifier: CC0-1.0 or MIT

#include <stdio.h>

int main(int argc, char *argv[])
{
    if (argc != 3) {
        fprintf(stderr, "Usage: %s <input-file> <output-file>\n"
            "\twarning! output file will be overwritten.\n", argv[0]);
        return 1;
    }

    FILE *in = fopen(argv[1], "rb");
    FILE *out = fopen(argv[2], "wb");

    fprintf(out, "<sample> name=foo.wav\r\n");
    fprintf(out, "data=");

    for (int byte; (byte = fgetc(in)) != EOF;) {
        int enc = (byte + 0x2a) & 0xff;
        switch (enc) {
        default:
            fputc(enc, out);
            break;
        case 0x3d: case 0x00: case 0x09: case 0x0a: case 0x0d: case 0x24:
            fputc(0x3d, out);
            fputc((byte + 0x40) & 0xff, out);
            break;
        }
    }

    fprintf(out, "$\r\n");
    fprintf(out, "<region> sample=foo.wav pitch_keycenter=69\r\n");

    return 0;
}
