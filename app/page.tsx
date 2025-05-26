"use client";
import { useState, useEffect } from "react";
import data from "./utils/data.json";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";


export default function Home() {


  useEffect(() => {
    // If you need to load data asynchronously later:
    // fetchExtensions().then(setExtensions);
  }, []);


  return (
    <div className="container mt-8 px-4 py-8 lg:px-24">
      <Header />
      <InfoCard />
    </div>
  );
}