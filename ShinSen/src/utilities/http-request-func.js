// Description: Contains functions for making http requests to the backend

/**
 * Class for making http requests to the backend
 */
class APIUtils {
  /**
   * Constructor for APIUtils
   * @param {String} url url of the backend
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * Gets all items from database
   * @return {Array} return json of result
   */
  async getItems() {
    try {
      url = this.url + '/get-all-data';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('error');
      console.log(err);
    }
  };

  /**
   * Adds item to database
   * @param {String} itemName
   * @param {String} expDate date in format 'YYYY-MM-DD'
   * @param {Boolean} isBestBefore
   * @return {String} if success ok, else invalid request
   */
  async addItem(itemName, expDate, isBestBefore, portion) {
    url = this.url + '/add-item';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset-UTF-8',
        },
        body: JSON.stringify({
          ItemName: itemName,
          ExpDate: expDate,
          IsBestBefore: isBestBefore,
          Portion: portion,
        }),
      });
      const data = await response.text();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Deletes item from database
   * @param {Number} id id of item to delete
   * @return {String} if success ok, else invalid request
   */
  async deleteItem(id) {
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

  /**
    * Updates item in database
    * @param {Number} id id of item to update
    * @param {String} itemName
    * @param {String} expDate date in format 'YYYY-MM-DD'
    * @param {Boolean} isBestBefore
    * @return {String} if success ok, else invalid request
    */
  async editItem(id, itemName, expDate, isBestBefore) {
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
