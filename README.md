# Source code for the [SFZ Format] website

[![Travis Build Status](https://img.shields.io/travis/com/sfzformat/sfzformat.github.io.svg?label=format&labelColor=lightgrey&style=popout&logo=data:image/png;base64,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)](https://travis-ci.com/sfzformat/sfzformat.github.io)

The website is built using [Jekyll], using [Node.js] to compile
all static assets including the [Bootstrap] library and built on
along with the [SASS] stylesheets. Most of the content on the website is
written using [Markdown], making it extremely easy to write and maintain.
Icons are provided by [Font Awesome], favicons by [Favicon Generator].

## Local Build Quick-start Guide

- Install `ruby` and `yarn`
- Use the automatic setup via `setup.sh`

or manually:

    $ gem update
    $ gem install bundler
    $ yarn --no-bin-links
    $ yarn dist
    $ bundle exec jekyll serve --watch --host 0.0.0.0

The local website should be available at <http://localhost:4000/>

## Creating posts

This can be done either manually by creating a new .md file
in the [_posts] directory, paying attention for a correct filename, date and
[front-matter], or by running the following command:

```bash
newpost.pl "New post title" <author_name>
```

Requires [perl] and [perl-datetime] module.

[SFZ Format]: https://sfzformat.github.io/

[Bootstrap]: http://getbootstrap.com/
[Favicon Generator]: https://realfavicongenerator.net/
[Font Awesome]: http://fontawesome.io/
[Jekyll]: http://jekyllrb.com/
[Markdown]: https://daringfireball.net/projects/markdown/
[Node.js]: http://nodejs.org/
[SASS]: https://sass-lang.com/

[perl]: https://www.perl.org
[perl-datetime]: https://metacpan.org/pod/DateTime
[_posts]: https://github.com/sfzformat/sfzformat.github.io/tree/source/_posts/
[front-matter]: https://jekyllrb.com/docs/front-matter/