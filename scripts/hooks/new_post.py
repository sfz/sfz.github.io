import argparse, re
from datetime import datetime, timezone

"""
  Creates a new blog post to edit manually or with content if specified.
"""
def new_post(title, author, content=None):
  dt   = datetime.now(timezone.utc).replace(microsecond=0)
  date = dt.strftime("%Y-%m-%d")
  path = "docs/news/posts"
  name = title.lower()
  name = name.replace(' ', '-')
  name = re.sub("[^0-9a-z\-\.-]*", '', name)
  path = "{}/{}-{}.md".format(path, date, name)
  date = dt.strftime("%Y-%m-%dT%T%z") # without comma in tz
  post = "\
---\n\
title:  \"{}\"\n\
author: \"{}\"\n\
date:   \"{}\"\n\
---\n".format(title, author, date)
  if content is not None:
    post += content

  with open(path, "w") as file:
    file.write(post)

  print("File created at \"{}\".".format(path))
  return path

def main():
  parser = argparse.ArgumentParser(description="creates a new blog post to edit manually or with content if specified.")
  parser.add_argument("title",  type=str, help="post title")
  parser.add_argument("author", type=str, help="post author")
  parser.add_argument('-c', '--content',  help="post content (optional)", type=str)
  args = parser.parse_args()

if __name__ == "__main__":
  main()
