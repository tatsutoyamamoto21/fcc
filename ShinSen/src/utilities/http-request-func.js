class APIUtils{
  constructor(url) {
    this.url = url;
  }

  async getItems () {
      try {
        url = this.url + '/get-all-data';
        const response = await fetch(url);
        const data = await response.json();
        const items = [];
        for(let i=0;i<data['data'].length;i++){
          items[i] = {
            title: data['data'][i][2],
            data:[{
              itemID: data['data'][i][0].toString(),
              itemName: data['data'][i][1],
              expDate: data['data'][i][2],
              isBestBefore: data['data'][i][3]
            }]
          }
        }
        return items;
      } catch (err) {
        console.log("error");
        console.log(err);
      }
    };

  async addItem(itemName, expDate, isBestBefore) {
      url = this.url + '/add-item';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset-UTF-8'
          },
          body: JSON.stringify({
            ItemName: itemName,
            ExpDate: expDate,
            IsBestBefore: isBestBefore,
          })
        });
        const data = await response.text();
        return data;
      } catch (err) {
        console.log(err);
      }
    };

  async deleteItem (id) {
      try {
        url = this.url + '/delete-item/'+id.toString();
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        });
        const data = await response.text();
        return data;
      } catch (err) {
        console.log(err);
      }
    }

  async updateItem (id, itemName, expDate, isBestBefore) {
      try {
        url = this.url + '/edit-item';
        const response = await fetch(url, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            ItemIDd: id,
            ItemName: itemName,
            ExpDate: expDate,
            IsBestBefore: isBestBefore,
          }),
        });
        const data = await response.text();
        return data;
      } catch (err) {
        console.log(err);
      }
  }
}

export default APIUtils;
