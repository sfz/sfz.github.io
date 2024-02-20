#!/usr/bin/env python3

import os
import requests
import shutil
import tempfile
from urllib.parse import urlparse

versions = {
  "anchor":          "4.3.1",
  "bootstrap":       "5.3.0",
  "bootstrap-table": "1.22.1",
  "fontawesome":     "6.5.1",
  "fork-awesome":    "1.2.0",
  "hljs":            "11.8.0",
  "jquery":          "3.6.0",
# "ekko-lightbox":   "5.3.0",
  "bs5-lightbox":    "1.8.3",
  "mermaid":         "10.6.1",
  "popper":          "2.11.8"
}

def download_helper(url, path, check=True):
  filename = path
  if os.path.isdir(filename):
    filename += '/' + os.path.basename(urlparse(url).path)

  if check and os.path.isfile(filename):
    return

  print("Downloading " + url + " to " + path)
  headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0"}
  response = requests.get(url, headers=headers)
  with open(filename, "wb") as file:
    file.write(response.content)
    file.close()

def download_bootstrap():
  if os.path.isfile(".bootstrap/scss/bootstrap.scss"):
    return

  bootstrap_dir  = ".bootstrap/bootstrap-" + versions["bootstrap"]
  bootstrap_scss = bootstrap_dir + "/scss"
  bootstrap_src  = "https://github.com/twbs/bootstrap/archive/refs/tags/v" + \
    versions["bootstrap"] + ".tar.gz"

  tmp = tempfile.NamedTemporaryFile(delete=False)
  try:
    download_helper(bootstrap_src, tmp.name, False)
    shutil.unpack_archive(tmp.name, ".bootstrap/", "gztar")
    shutil.move(bootstrap_scss, ".bootstrap/")
    shutil.rmtree(bootstrap_dir)
  finally:
    tmp.close()
    os.unlink(tmp.name)

def download_forkawesome():
  if os.path.isfile("docs/assets/fonts/forkawesome-webfont.ttf"):
    return

  fa_zip = versions["fork-awesome"] + ".zip"
  fa_url = "https://github.com/ForkAwesome/Fork-Awesome/archive/" + fa_zip
  fa_dir = "Fork-Awesome-" + versions["fork-awesome"]
  fa_fnt = fa_dir + "/fonts"
  tmp    = tempfile.NamedTemporaryFile(delete=False)
  try:
    download_helper(fa_url, tmp.name, False)
    shutil.unpack_archive(tmp.name, ".", "zip")
    shutil.move(fa_fnt, "docs/assets/")
    shutil.rmtree(fa_dir)
  finally:
    tmp.close()
    os.unlink(tmp.name)

def download_fontawesome():
  if os.path.isfile("docs/assets/webfonts/fa-brands-400.ttf"):
    return

  fa_dir = "fontawesome-free-" + versions["fontawesome"] + "-web"
  fa_zip = fa_dir + ".zip"
  fa_url = "https://use.fontawesome.com/releases/v" \
         + versions["fontawesome"] + '/'  + fa_zip
  fa_fnt = fa_dir + "/webfonts"
  tmp    = tempfile.NamedTemporaryFile(delete=False)
  try:
    download_helper(fa_url, tmp.name, False)
    shutil.unpack_archive(tmp.name, ".", "zip")
    shutil.move(fa_fnt, "docs/assets/")
    shutil.move(fa_dir + "/css/brands.min.css",       "docs/assets/css/")
    shutil.move(fa_dir + "/css/fontawesome.min.css",  "docs/assets/css/")
    shutil.move(fa_dir + "/css/solid.min.css",        "docs/assets/css/")
    shutil.move(fa_dir + "/css/v4-font-face.min.css", "docs/assets/css/")
    shutil.rmtree(fa_dir)
  finally:
    tmp.close()
    os.unlink(tmp.name)

def download():
  css_urls = [
    "https://unpkg.com/bootstrap-table@"         + versions["bootstrap-table"] + "/dist/bootstrap-table.min.css",
    "https://unpkg.com/bootstrap-table@"         + versions["bootstrap-table"] + "/dist/extensions/filter-control/bootstrap-table-filter-control.min.css",
    "https://cdn.jsdelivr.net/npm/fork-awesome@" + versions["fork-awesome"]    + "/css/fork-awesome.min.css",
    "https://cdn.jsdelivr.net/npm/fork-awesome@" + versions["fork-awesome"]    + "/css/fork-awesome.min.css.map",
    "https://cdn.jsdelivr.net/npm/highlight.js@" + versions["hljs"]            + "/styles/github.min.css",
    "https://cdn.jsdelivr.net/npm/highlight.js@" + versions["hljs"]            + "/styles/github-dark-dimmed.min.css",
  ]
  js_urls = [
    "https://cdn.jsdelivr.net/npm/anchor-js@"               + versions["anchor"]          + "/anchor.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@"               + versions["bootstrap"]       + "/dist/js/bootstrap.min.js",
    "https://unpkg.com/bootstrap-table@"                    + versions["bootstrap-table"] + "/dist/bootstrap-table.min.js",
    "https://unpkg.com/bootstrap-table@"                    + versions["bootstrap-table"] + "/dist/extensions/filter-control/bootstrap-table-filter-control.min.js",
    "https://cdn.jsdelivr.net/npm/bs5-lightbox@"            + versions["bs5-lightbox"]    + "/dist/index.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/bs5-lightbox@"            + versions["bs5-lightbox"]    + "/dist/index.bundle.min.js.map",
    "https://cdn.jsdelivr.net/npm/jquery@"                  + versions["jquery"]          + "/dist/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/jquery@"                  + versions["jquery"]          + "/dist/jquery.min.map",
    "https://cdn.jsdelivr.net/npm/mermaid@"                 + versions["mermaid"]         + "/dist/mermaid.min.js",
    "https://unpkg.com/@popperjs/core@"                     + versions["popper"]          + "/dist/umd/popper.min.js",
    "https://unpkg.com/@popperjs/core@"                     + versions["popper"]          + "/dist/umd/popper.min.js.map",
    "https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@" + versions["hljs"]            + "/highlight.min.js",
    "https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@" + versions["hljs"]            + "/languages/bash.min.js",
    "https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@" + versions["hljs"]            + "/languages/cpp.min.js",
    "https://cdn.jsdelivr.net/gh/sfz/highlight.js@master/dist/sfz.min.js"
  ]

  download_bootstrap()
  download_fontawesome()
# download_forkawesome()

  path = "docs/assets/css"
  for url in css_urls:
    download_helper(url, path)

  path = "docs/assets/js"
  for url in js_urls:
    download_helper(url, path)

def main():
  if not os.path.isfile(os.getcwd() + "/mkdocs.yml"):
    raise SystemExit("Error: You must run this file from the main directory")
  download()

if __name__ == '__main__':
  main()
