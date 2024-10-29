'use client'
import MintButton from "@/components/MintButton";
import PayButton from "@/components/PayButton";
import { useState } from "react"

export default function Home() {
  const [mintValue, setMintValue] = useState(0)
  return (
    <div className="flex flex-col gap-y-4">
        <h1 className="text-5xl font-semibold">
          Hello there This is demo
        </h1>
        <p className="text-xl font-medium">Product Details here</p>
        <div className="flex text-xl font-medium pt-2 gap-2 items-center ">
          <p>50 PST</p>
          <PayButton/>
        </div>
        <hr />
        <h1 className="text-5xl font-semibold">
          Mint PTK Tokens for free
        </h1>
        <p className="text-xl font-medium">Product Details here</p>
        <div className="flex text-xl font-medium pt-2 gap-2 items-center ">
          <label htmlFor="">Enter the amount of Pst tokens you want to mint (10<sup>18</sup>)</label>
          <input className="border-2 rounded-full px-3 py-2 text-lg border-indigo-700 focus:outline-none bg-gray-100" placeholder="Enter Minting amount here" type="Number" value={mintValue} onChange={(e)=> {setMintValue(Number(e.target.value))}}/>
          <MintButton value={mintValue}/>
        </div>
    </div>
  );
}
