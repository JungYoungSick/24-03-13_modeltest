import json

file_path = 'example.json'
def read_json():
  try:
    with open(file_path, 'r') as file:
      return json.load(file)

  except FileNotFoundError:
    return None
    