import jinja2, os, json, yaml

def path_exists(path):
  if isinstance(path, str):
    return os.path.exists(path)
  return False

def load_json(path):
  if not path_exists(path):
    return None
  with open(path) as file:
    return json.load(file)

def load_yaml(path):
  if not path_exists(path):
    return None
  with open(path) as file:
    return yaml.load(file, Loader=yaml.FullLoader)

def on_env(env, **kwargs):
  env.globals["path_exists"] = path_exists
  env.globals["load_json"]   = load_json
  env.globals["load_yaml"]   = load_yaml
