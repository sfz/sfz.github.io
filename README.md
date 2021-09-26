# Source code for the [SFZ Format] website

## Dependencies and license information

The website is built using [Jekyll], using [Node.js] to compile
all static assets including the [Bootstrap] library and built on
along with the [SASS] stylesheets. Most of the content on the website is
written using [Markdown], making it extremely easy to write and maintain.
Icons are provided by [Font Awesome], favicons by [Favicon Generator].
Anchors headings are provided by [jekyll-anchor-headings] by [Alleyo],
licensed under the MIT license.
Syntax highlighting is provided by [highlight.js], BSD 3-Clause License.

## Local Build Quick-start Guide

- Install `ruby` and `yarn`
- Use the automatic setup via `setup.sh`

or manually:

```bash
$ gem update --user-install
$ gem install bundler --user-install
$ bundle config set path '.bundle'
$ bundle install
$ yarn --no-bin-links
$ yarn dist
$ bundle exec jekyll serve --watch --host 0.0.0.0
```

The local website should be available at <http://localhost:4000/>

## Creating posts

This can be done either manually by creating a new .md file
in the [_posts] directory, paying attention for a correct filename, date and
[front-matter], or by running the following command:

```bash
$ ./new_post.sh "New post title" "<author_name>"
```

## License

<p xmlns:dct="http://purl.org/dc/terms/">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://sfzformat.com">
    <span property="dct:title">sfz format team</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">sfz format website</span>.
</p>

[Alleyo]:                 https://pure-liquid.allejo.org/
[SFZ Format]:             https://sfzformat.github.io/
[Bootstrap]:              http://getbootstrap.com/
[Favicon Generator]:      https://realfavicongenerator.net/
[Font Awesome]:           http://fontawesome.io/
[front-matter]:           https://jekyllrb.com/docs/front-matter/
[Jekyll]:                 http://jekyllrb.com/
[jekyll-anchor-headings]: https://github.com/allejo/jekyll-anchor-headings/
[Markdown]:               https://daringfireball.net/projects/markdown/
[Node.js]:                http://nodejs.org/
[_posts]:                 https://github.com/sfzformat/sfzformat.github.io/tree/source/_posts/
[SASS]:                   https://sass-lang.com/
[highlight.js]:           https://highlightjs.org/
