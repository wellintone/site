"use client";

import Image from "next/image";
import Navbar from "./components/NavbarMain/Navbar";
import Button from "./components/button";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main>
      <div className="theme-switch-wrapper">
        <span id="toggle-icon">
          <span className="toggle-text">
            {theme ? "Light Mode" : "Dark Mode"}
          </span>
          <span>{theme ? "🌙" : "☀️"}</span>
        </span>
        <label className="theme-switch">
          <input
            className="theme-switch"
            type="checkbox"
            id="toggle"
            checked={theme}
            onChange={(e: any) => toggleTheme(e?.target.checked)}
          />
          <div className="slider round"></div>
        </label>
      </div>
      <Navbar type="primary-transparent-0" linkColor="white" textBold={800} />

      <section id="home">
        <div className="title-group">
          <h1>Custom title here</h1>
          <h2>Welcome to de website</h2>
        </div>
      </section>
      <section id="about">
        <h1>Undraw illustrations</h1>
      </section>
      <section id="projects">
        <h1>Buttons</h1>
        <div className="buttons">
          <button className="b-primary">Primary</button>
          <button className="b-secondary">Secondary</button>
          <button className="b-disabled" disabled>
            Disabled
          </button>
          <button className="b-outline">Outline</button>
        </div>
        <div className="text-box" id="text-box">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          animi nam vero molestias cumque, totam error non fugiat dignissimos?
          Corporis fugit esse non quas aliquid alias quo id voluptas odio!
        </div>
      </section>
      <section id="contacts">
        <h1>Contacts section</h1>
      </section>
    </main>
  );
}
