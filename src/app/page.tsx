'use client'
// import MintButton from "@/components/MintButton";
import Navbar from "@/components/Navbar";
// import PayButton from "@/components/PayButton";
import { useState } from "react"

export default function Home() {
  const [mintValue, setMintValue] = useState(0)
  return (
    <main>
      <Navbar/>
    </main>
  );
}
