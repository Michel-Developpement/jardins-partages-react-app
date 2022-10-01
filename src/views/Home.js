import React from "react";
import Logo from "../assets/Logo.jpg";
import "../input.css";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="sm:w-100">
      <NavBar />
      <img src={Logo} alt="logo" className="sm:w-100 sm:h-100 md:w-80 md:w-80" />
      <h1 className="text-3xl">Bienvenue sur les Jardins D'Yvonne</h1>
    </div>
  );
}
