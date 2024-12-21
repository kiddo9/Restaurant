import Axios from "axios";
import { useEffect, useState } from "react";
import Api from "../URL/Api";

const useDishes = (resfreshData) => {
  const [dishes, setDishes] = useState([]); // Renamed to "dishes" for clarity

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await Axios.get(`${Api}/getDishes`); // Await API response
        setDishes(response.data); // Set dishes data
      } catch (err) {
        console.error("Error fetching dishes:", err.message);
      }
    };

    fetchDishes();
  }, [resfreshData]);

  return { dishes };
};

export default useDishes;
