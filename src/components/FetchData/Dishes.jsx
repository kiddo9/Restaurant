import Axios from "axios";
import { useEffect, useState } from "react";
import Api from "../URL/Api";

const useDishes = (resfreshData) => {
  const [dishes, setDishes] = useState([]);
  const [preloader, setPreloader] = useState(false) 

  useEffect(() => {
    setPreloader(true)
    const fetchDishes = async () => {
      try {
        const response = await Axios.get(`${Api}/getDishes`); // Await API response
        setPreloader(false)
        setDishes(response.data); // Set dishes data
        
      } catch (err) {
        setPreloader(false)
        console.error("Error fetching dishes:", err.message);
      }
    };

    fetchDishes();
  }, [resfreshData]);

  return { dishes, preloader };
};

export default useDishes;
