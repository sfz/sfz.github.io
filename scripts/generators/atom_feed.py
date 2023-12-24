import frontmatter, jinja2, mkdocs_gen_files, os, yaml
from datetime import datetime, timezone
from markdown import markdown

#def post_date(s):
#  dt = datetime.strptime(s, "%Y-%m-%dT%H:%M:%S%z")
## dt = dt.replace(tzinfo=timezone.utc)
## return dt.strftime("%Y-%m-%dT%T%z")# without comma in tz
#  return dt.isoformat()

with mkdocs_gen_files.open("templates/atom.xml", "r") as f:
  content = f.read()

posts_dir = os.path.abspath("docs/news/posts/")
posts = []
files = [
  os.path.abspath(os.path.join(posts_dir, f))
    for f in os.listdir(posts_dir)
    if os.path.isfile(os.path.join(posts_dir, f))
]
for f in sorted(files, key=lambda x: x, reverse=True):
  with open(f) as file:
    post = frontmatter.load(file)

  try:
    post["date"] = datetime.strptime(post["date"], "%Y-%m-%dT%H:%M:%S%z").isoformat()
  except KeyError:
    post["date"] = None
  finally:
    post["id"]   = "/news/posts/" + os.path.splitext(os.path.basename(f))[0]
    posts.append(post)

content = jinja2.Template(content).render(
# now=utils.get_build_datetime().strftime("%Y-%m-%dT%T%z"),# without comma in tz
  now=datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
  config=mkdocs_gen_files.config,
  markdown=markdown,
  site_posts=posts
)
with mkdocs_gen_files.open("atom.xml", "w") as f:
  f.write(content)
