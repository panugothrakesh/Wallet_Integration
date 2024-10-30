import { LuLogOut } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

function Connect() {
    const [isOpen, setIsOpen] = useState(false)
    const { connectors, connect, status, error } = useConnect()
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(!!address);
    }, [address]);

    const handleClick = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        if (status === 'success') {
            setIsOpen(false)
            setIsLoggedIn(true)
        }
    }, [status])
    
    const handleDisconnect = () => {
        setIsLoggedIn(false)
        disconnect()
    }

    const handleCopyAddress = () => {
        if (address) {
            navigator.clipboard.writeText(address)
            alert("Address copied to clipboard!")
        }
    }
    return (
        <>
            {isLoggedIn && address ? (
                <div className="flex items-center space-x-2">
                    {ensAvatar && <Image alt="ENS Avatar" src={ensAvatar} width={30} height={30} />}
                    <div onClick={handleCopyAddress} className="cursor-pointer">
                        {ensName ? `${ensName} (${address.slice(0, 4)}...${address.slice(14)})` : `${address.slice(0, 6)}...${address.slice(38)}`}
                    </div>
                </div>
            ) : null}
            <div className={`border-2 flex items-center justify-center rounded-full text-md font-semibold bg-white hover:bg-[#F1F9FF] duration-300 transition-all ease-in-out ${isLoggedIn ? "px-3 py-3" : "px-8 py-2"}`}>
                {isLoggedIn ?
                        <button className="text-md font-semibold " onClick={handleDisconnect}>
                            <LuLogOut />
                        </button>
                    :
                    <>
                    <button onClick={handleClick}>
                        Connect Wallet
                    </button>
                    </>
                }
            </div>
            <div className={`absolute bg-white bg-opacity-50 flex justify-center items-center w-full h-full z-10 top-0 left-0 transition-all duration-200 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className='flex relative flex-col gap-4 p-16 w-1/3 bg-page-gradient backdrop-blur-lg rounded-2xl'>
                    {connectors.map((connector) => (
                        <button className='border-[2px] rounded-full px-8 py-2 text-md font-semibold bg-white hover:bg-[#F1F9FF] duration-300 transition-all ease-in-out' key={connector.uid} onClick={() => connect({ connector })}>
                            {connector.name}
                        </button>
                    ))}
                    <span onClick={()=>setIsOpen(false)} className="absolute right-0 top-0 cursor-pointer p-3 text-2xl">
                        <IoCloseSharp />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Connect