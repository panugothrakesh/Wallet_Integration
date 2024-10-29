'use client'
import React, { useState } from 'react'
import { useConnect, useAccount, useWriteContract } from 'wagmi'
import { waitForTransactionReceipt } from '@wagmi/core'
import { injected } from 'wagmi/connectors'
import { sepolia } from 'viem/chains'
import { config } from '@/config/wagmi'

function PayButton() {
    const { connectAsync } = useConnect()
    const {address} = useAccount()
    const { writeContractAsync } = useWriteContract()
    const [started, setStarted] = useState(false)
    const [errors, setErrors] = useState('')
    const [completed, setCompleted] = useState(false)

    const handlePayment = async () =>{
        try{
            setErrors('')
            setStarted(true)
            if(!address){
                await connectAsync({chainId: sepolia.id, connector:injected()})
            }
            const data = await writeContractAsync({
                chainId: sepolia.id,
                address: '0xA791b70c3cc6c89D4F976dd632b3387735e2cCf7',
                functionName: 'transfer',
                abi: [{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function" }] as const,
                args: [
                    '0x642EAe4Abe094846489ec2D9b7279B3c209D3300',
                    BigInt(50 * (10 ** 18)),
                ]
            })
            const receipt = await waitForTransactionReceipt(config, {
                hash: data,
                chainId: sepolia.id,
                confirmations: 1,
            })
            if(receipt.status == 'success') {
                setCompleted(true)
            }
            console.log(data)
        } catch (err){
            console.log(err)
            setStarted(false)
            setErrors('Payment Failed Please try again.')
        }
    }

  return (
          <>
      {!completed && (
        <button 
          disabled={started}
          className="border-2 rounded-full px-8 py-2 text-lg border-transparent font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
          onClick={handlePayment}
        >
          {started ? "Confirming..." : "Pay Now"}
        </button>
      )}
      {completed && <p className='text-stone-800 mt-2 bg-green-200 rounded-md text-sm py-2 px-4'>Thank you for your payment.</p>}
      {errors && <p className='text-stone-800 mt-2 bg-red-200 rounded-md text-sm py-2 px-4'>{errors}</p>}
    </>
  )
}

export default PayButton