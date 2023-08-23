"use client";
import { getRestaurants } from "@/services/services";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Restaurant Roulette</h1>
    </main>
  );
}




