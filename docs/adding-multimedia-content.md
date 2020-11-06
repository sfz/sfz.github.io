---
title: Add Multimedia Content
---
Here some tips for adding multimedia content into this website pages.

## Images

Usually in markdown format, images are added as the following:

```
![Alternate text](/path/to/image)
```

This might be enough when the image is made with a resolution that can adapt
easily to the page context, by having also some stylesheet support for scaling
on various media devices.
But this is not always the case when we need to integrate differently the
media content, so some additional code is required.

Markdown permits embedded HTML, to give some ability to use traditional code
for the web pages.
This website uses [bootstrap], so some helper classes are available, like
[img-fluid] (see the weblink for details).

## Galleries

There are many implementations available in internet able to display various
multimedia galleries, which can contain not only images but also videos.

[ekko-lightbox] was choosed, that seems to well integrate with bootstrap.

A helper function to made the process easier, avoiding to add more lines of code
into the content, is available at `_includes/lightbox_gallery.liquid`.
Add the following Liquid code in the place you want to add your gallery:

```
{%raw%}{%-assign images  = "my_image1.jpg,my_other_image2.png,another_img.gif" | split: ','-%}{%endraw%}
{%raw%}{%-assign titles  = "Image 1 alt text,,Some alt text for the gif" | split: ','-%}{%endraw%}
{%raw%}{%-assign gallery = "gallery-name"-%}{%endraw%}
{%raw%}{%-assign path    = "/relative/path/to/images/"-%}{%endraw%}
{%raw%}{%-include lightbox_gallery.liquid const_images=images const_titles=titles const_gallery=gallery const_path=path-%}{%endraw%}
```

Note that `images` and `titles` arrays want to be the same number of elements
because they share the same loop, so an unused alternate text must be an
empty element between two commas.

The arrays are passed as a single string each, so don't add spaces between commas,
or they will be added to the image path, resulting to a 404.

[bootstrap]:     https://getbootstrap.com/
[ekko-lightbox]: https://ashleydw.github.io/lightbox/
[img-fluid]:     https://getbootstrap.com/docs/4.4/content/images/
