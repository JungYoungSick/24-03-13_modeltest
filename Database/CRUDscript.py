import create_json
import update_json
import read_json
import delete_json

if __name__ == '__main__':

  create_data = {'items':[]}
  create_json(create_data)
  def add_item(data):
    data['items'].append({'name':'example', 'value':123})
  
  update_json(add_item)
  
  print(read_json())

  def remove_item(data):

    data['items'] = [item for item in data['items'] if item['name'] !='example']

  delete_json(remove_item)

  print(read_json())