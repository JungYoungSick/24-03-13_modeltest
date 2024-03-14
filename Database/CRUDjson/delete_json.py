import json

file_path = 'example.json'
def delete_json(delete_func):
  try:
    with open(file_path, 'r+') as file:
      data = json.load(file)
      delete_func(data)
      file.seek(0)
      json.dump(data, file, indent=4)
      file.truncate()
  except FileNotFoundError:
    print("파일을 ����을 때 예외��리")
    