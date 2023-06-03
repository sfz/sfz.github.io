# Source code for the [SFZ Format] website

## Dependencies and license information

The website is built using the following software and technologies:

- [Bootstrap] UI toolkit, code under MIT license, docs under [Creative Commons]
- [Favicon Generator] for favicons
- [Font Awesome] for icons, [SIL OFL 1.1] license
- [highlight.js] for syntax highlighting, BSD 3-Clause license
- [Jekyll] static website generator, MIT license
- [jekyll-anchor-headings] by [Alleyo], for anchors headings, MIT license
- [Markdown] markup language
- [Node.js] to compile all static assets, including the Bootstrap library, [see license]
- [SASS] for stylesheets, MIT license

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

[SFZ Format]:             https://sfzformat.github.io/
[Alleyo]:                 https://pure-liquid.allejo.org/
[Bootstrap]:              https://getbootstrap.com/
[Creative Commons]:       https://creativecommons.org/licenses/by/3.0/
[Favicon Generator]:      https://realfavicongenerator.net/
[Font Awesome]:           https://fontawesome.io/
[front-matter]:           https://jekyllrb.com/docs/front-matter/
[highlight.js]:           https://highlightjs.org/
[Jekyll]:                 https://jekyllrb.com/
[jekyll-anchor-headings]: https://github.com/allejo/jekyll-anchor-headings/
[Markdown]:               https://daringfireball.net/projects/markdown/
[Node.js]:                https://nodejs.org/
[_posts]:                 https://github.com/sfzformat/sfzformat.github.io/tree/source/_posts/
[SASS]:                   https://sass-lang.com/
[see license]:            https://github.com/nodejs/node/blob/main/LICENSE
[SIL OFL 1.1]:            https://scripts.sil.org/cms/scripts/page.php?item_id=OFL
