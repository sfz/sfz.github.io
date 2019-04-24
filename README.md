# Source code for the [sfzformat](https://sfzformat.github.io/) website.

The website is built using [Jekyll][jekyll], using [Node.js][node] to compile
all static assets including the [Bootstrap][bootstrap] library and built on
along with the [SASS][sass] stylesheets. Most of the content on the website is
written using [Markdown][markdown], making it extremely easy to write and maintain.
Icons are provided by [Font Awesome][fa].

[jekyll]: http://jekyllrb.com/
[node]: http://nodejs.org/
[grunt]: http://gruntjs.com/
[bootstrap]: http://getbootstrap.com/
[fa]: http://fontawesome.io/
[sass]: https://sass-lang.com/
[markdown]: https://daringfireball.net/projects/markdown/

## Quick-start Guide

    Install `ruby` and `yarn`
    $ gem install bundler
    $ gem install github-pages
    $ gem update
    $ yarn --no-bin-links
    $ yarn dist
    $ bundle exec jekyll serve -w

At this point the local website will be available at <http://localhost:4000/>

## Automated setup

The `setup.sh` makes the installation process automatic.
It uses [bash-ini-parser](https://github.com/rudimeier/bash_ini_parser)
from Ruediger Meier Github repository.
Giving website specific infos (website name, url etc.) in the `site.conf`
ini file, it replace the specified variables with the ini file informations.
Once done it installs ruby bundle, runs yarn and jekyll automatically and push
the resulting `_site` content in a specified git repository.
