import jinja2, mkdocs_gen_files, os, yaml

#with open("mkdocs.yml") as f:
#  config = yaml.load(f, Loader=yaml.FullLoader)

with open("data/sfizz/support.yml") as f:
  sfizz_support = yaml.load(f, Loader=yaml.FullLoader)

# FIXME: hardcoded percentages until working SVG badge generator calc
done = {
  "ARIA":  45,
  "SFZv1": 96,
  "SFZv2": 44
}
for name in ["ARIA", "SFZv1", "SFZv2"]:
  with mkdocs_gen_files.open("templates/badge_status.svg", "r") as f:
    content = f.read()

  content = jinja2.Template(content).render(
    title=name,
    done=done[name] # TODO: Calculation
  )
  with mkdocs_gen_files.open("assets/img/sfizz/badge_" + name.lower() + ".svg", "w") as f:
    f.write(content)
