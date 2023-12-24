import mkdocs_gen_files

with mkdocs_gen_files.open("templates/opcode_table_generator.j2", "r") as f:
  content = f.read()


