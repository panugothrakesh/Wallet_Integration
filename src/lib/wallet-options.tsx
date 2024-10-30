import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button className='border-[2px] rounded-full px-8 py-2 text-md font-semibold bg-white hover:bg-[#F1F9FF] duration-300 transition-all ease-in-out' key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}