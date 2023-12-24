from jinja2.ext import do

def on_env(env, **kwargs):
  env.add_extension(do)
