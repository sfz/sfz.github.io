import copy, os, sys
from typing import NamedTuple
sys.path.insert(0, os.path.dirname(__file__))

import fs

headers           = {}
opcodes           = {}
opcode_set        = []
_current_category = None
_current_type     = None
_sfz_dict         = fs.load_yaml("data/sfz/syntax.yml")
see_also          = fs.load_yaml("data/sfz/see_also.yml")

def _process_category(category):
  global _current_category, _current_type
  if _current_category and "types" in _current_category \
  and category in _current_category["types"]:
    _current_type = category
    print("setting type: " + _current_type["name"])
#   _current_type = copy.deepcopy(category)
#   del _current_type["opcodes"]
  else:
    if _current_category != category:
      _current_type   = None
    _current_category = category
    print("setting category: " + _current_category["name"])
#   _current_category = copy.deepcopy(category)
#   if "types" in _current_category:
#     del _current_category["types"]
#   if "opcodes" in _current_category:
#     del _current_category["opcodes"]

def _process_opcode(opcode):
  name = opcode["name"]
  opcode_set.append(opcode)
  opcodes[name] = opcode
  opcodes[name]["category"] = _current_category
  if _current_type and "types" in _current_category \
  and _current_type in _current_category["types"]:
    opcodes[name]["type"] = _current_type
  print("processing opcode: " + name)
  for a in opcode.get('alias', []):
    a["isa"] = "alias"
    a["alias_of"] = opcode
    _process_opcode(a)
  for m in opcode.get('modulation', {}).get('midi_cc', []):
    m["isa"] = "midi_cc"
    _process_opcode(m)
  for v in opcode.get('modulation', {}).get('velocity', []):
    v["isa"] = "velocity"
    _process_opcode(v)

def _process(data):
  global _current_category, _current_type
  if isinstance(data, dict):
    for k, v in data.items():
      if k == "opcodes":
        for o in v:
          _process_opcode(o)
      elif k == "headers":
        for h in v:
          name = h["name"]
          headers[name] = h
          print("processing header: " + name)
      else:
        _process(v)
  elif isinstance(data, list):
    for v in data:
      if isinstance(v, dict):
        # Categories and types
        _process_category(v)
    # else:
    #   # Versions
      _process(v)

def get_category_url(name, as_type = False):
  if not name in opcodes:
    return None

  if as_type and "type" in opcodes[name] and opcodes[name]["type"]:
    if "url" in opcodes[name]["type"]:
      return '<a href="' + opcodes[name]["type"]["url"] + '">' \
        + opcodes[name]["type"]["name"] + '</a>'
    return opcodes[name]["type"]["name"]

  if not as_type and "category" in opcodes[name]:
    if "url" in opcodes[name]["category"]:
      return '<a href="' + opcodes[name]["category"]["url"] + '">' \
        + opcodes[name]["category"]["name"] + '</a>'
    return opcodes[name]["category"]["name"]

  return None

def find_opcode(name):
  if name in opcodes:
    return opcodes[name]
  return None

class OpcodeInfo(NamedTuple):
  name: str
  version: str
  value_type: str
  value_default: str
  value_range: str
  value_unit: str

def get_info(opcode):
  if not "value" in opcode or \
  (not "min" in opcode["value"] and not "max" in opcode["value"]):
    value_range = ""
  else:
    if "min" in opcode["value"]:
      min_ = str(opcode["value"]["min"])
    else:
      min_ = "?"

    if "max" in opcode["value"]:
      max_ = str(opcode["value"]["max"])
    else:
      max_ = "?"

    value_range = min_ + " to " + max_
  """
  return OpcodeInfo(
    opcode.name,
    opcode.version if version in opcode else "N/A",
    opcode.value.type_name if value in opcode and type_name in opcode.value else "N/A",
    opcode.value.default   if value in opcode and default   in opcode.value else "N/A",
    value_range,
    opcode.value.unit if value in opcode and unit in opcode.value else "N/A"
  )
  """
  return OpcodeInfo(
    opcode["name"],
    opcode["version"] if "version" in opcode else "",
    opcode["value"]["type_name"] if "value" in opcode and "type_name" in opcode["value"] else "N/A",
    opcode["value"]["default"]   if "value" in opcode and "default"   in opcode["value"] else "N/A",
    value_range,
    opcode["value"]["unit"] if "value" in opcode and "unit" in opcode["value"] else "N/A"
  )

def get_opcode_category(opcode):
  if "type" in opcode:
    return opcode["type"]
  return opcode["category"]

print("initializing database...")
_process(_sfz_dict)
del _current_category
del _current_type
del _sfz_dict

def on_env(env, **kwargs):
  env.globals["headers"]             = headers
  env.globals["opcodes"]             = opcodes
  env.globals["opcode_set"]          = opcode_set
  env.globals["find_opcode"]         = find_opcode
  env.globals["get_category_url"]    = get_category_url
  env.globals["get_info"]            = get_info
  env.globals["get_opcode_category"] = get_opcode_category
  env.globals["see_also"]            = see_also
