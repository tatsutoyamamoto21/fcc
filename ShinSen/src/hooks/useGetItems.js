import {useEffect, useState} from 'react';
import APIUtils from '../utilities/http-request-func';

const useGetItems = () => {
  const API = new APIUtils('http://192.168.1.12:5000');
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.getItems().then((data) => {
      setItems(data);
    });
  }, []);
  return items;
};

export default useGetItems;
