import json

file_path = 'example.json'
def create_json(data):

  with open(file_path, 'w') as file:

    json.dump(data, file, indent=4)