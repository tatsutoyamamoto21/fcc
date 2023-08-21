class APIUtils{
  constructor(url) {
    this.url = url;
  }

  async getItems () {
      try {
        url = this.url + '/get-all-data';
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (err) {
        console.log("error");
        console.log(err);
      }
    };

  async AddItem(itemName, expDate, isBestBefore) {
      url = this.url + '/add-item';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            ItemName: itemName,
            ExpDate: expDate,
            IsBestBefore: isBestBefore,
          }),
        });
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    };

  async DeleteItem (id) {
      try {
        url = this.url + '/delete-item/'+id.toString();
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    }

  async UpdateItem (id, itemName, expDate, isBestBefore) {
      try {
        url = this.url + '/update-item';
        const response = await fetch(url, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: id,
            ItemName: itemName,
            ExpDate: expDate,
            IsBestBefore: isBestBefore,
          }),
        });
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
      }
  }
}

export default APIUtils;
