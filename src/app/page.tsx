'use client';

import { Header } from "./ui/Home/Header";
import { Main } from "./ui/Home/Main";
import { Nav } from "./ui/Home/Nav";
import { getTheme } from "./lib/theme";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    getTheme();
  }, [])
  
  return (
    <main className={`mainGrid h-screen w-screen bg-white`}>
      <header className={`header md:hidden`}>
        <Header />
      </header>
      <section className={`main`}>
        <Main />
      </section>
      <nav className="nav">
        <Nav />
      </nav>
    </main>
  );
}
