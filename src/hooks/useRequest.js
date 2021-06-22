import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.redcon1.com/";

const useRequest = ({ requet }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(requet);
      setItems(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { items, error, loading };
};

export default useRequest;
