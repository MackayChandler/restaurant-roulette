import { Restaurant } from "@/app/page";
import axios from "axios";

interface filterProps {
  latitude?: number;
  longitude?: number;
  setRestaurants: (restaurants: Restaurant[]) => void;
}

export function getRestaurants({ latitude, longitude, setRestaurants }: filterProps) {
  axios.get(
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
    {
      headers: {
        Authorization: `Bearer uF79f0BSjm9EWOg-uIInFeEwmxkpAHmGxXHJl7RpjP6EftSPBvGGPd-qfqx-MzFral4Pd1hMQWu9b9Pbfvkf7AeYZ0dA3RMudHLG6Au3Hg4eZ953VCi5QrdJCIqSYXYx`,
      },
      params: {
        latitude: latitude,
        longitude: longitude,
      },
    }
  ).then((res) => {
    console.log(res.data.businesses)
    setRestaurants(res.data.businesses)
  })

  
}
