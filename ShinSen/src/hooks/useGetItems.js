import {useEffect, useState} from 'react';
import APIUtils from '../utilities/http-request-func';
import { API_IP } from '@env';

const useGetItems = () => {
  const API = new APIUtils('http://'+API_IP+':5000');
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.getItems().then((data) => {
      setItems(data);
    });
  }, []);
  return items;
};

export default useGetItems;
