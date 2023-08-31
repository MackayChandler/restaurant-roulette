"use client";
import { getRestaurants } from "@/services/services";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface Restaurant {
  id: string;
  name: string;
  display_phone: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  url: string;
}

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selRestaurant, setSelRestaurant] = useState<Restaurant | null>(null);
  useEffect(() => {
    let latitude = 0;
    let longitude = 0;

    navigator.geolocation.getCurrentPosition(async (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      await getRestaurants({ latitude, longitude, setRestaurants });
    });
  }, []);

  const pickRestaurant = () => {
    const random = Math.floor(Math.random() * restaurants.length);
    setSelRestaurant(restaurants[random]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold mb-5">Restaurant Roulette</h1>
      <h2 className="text-2xl mb-5">{selRestaurant?.name}</h2>
      <button
        onClick={pickRestaurant}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Pick a restaurant
      </button>
    </main>
  );
}
