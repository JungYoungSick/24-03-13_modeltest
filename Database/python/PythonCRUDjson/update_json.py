import json
import create_json

file_path = 'example.json'
def update_json(update_func):
  try:
    with open(file_path, 'r+') as file:
      data = json.load(file)
      update_func(data)
      file.seek(0)
      json.dump(data, file, indent=4)
      file.truncate()
  except FileNotFoundError:
    print("파일을 못찾을 때 예외처리")
    create_json({})