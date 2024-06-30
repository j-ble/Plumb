import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import React, { FC } from 'react' // Import React and FC
import Image from 'next/image'

const Marketplace: FC = () => {
  const router = useRouter()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    // Retrieve the balance from localStorage
    const storedBalance = parseInt(localStorage.getItem('b3trBalance') || '0', 10)
    setBalance(storedBalance)
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="w-full max-w-lg text-center bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">Congratulations</h1>
        <p className="mt-2 text-lg text-gray-600">For shopping sustainably</p>
        <div className="mt-4 flex justify-center">
          <img
            src="/public/images/ecology-bag-with-leaves.png" // Update with the correct path to your image
            alt="Sustainable Shopping"
            className="w-64 h-64 object-contain"
          />
        </div>
        <div className="mt-4 text-green-500 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="ml-2">Verified Local product</span>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Your Reward</h2>
          <div className="mt-4 flex items-center justify-center">
            <img
              src="/path-to-your-token-image.png" // Update with the correct path to your image
              alt="Token"
              className="w-10 h-10 object-contain"
            />
            <span className="ml-2 text-2xl font-bold text-gray-800">{balance} tokens</span>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <span className="text-gray-500">Powered By</span>
          <img
            src="/path-to-your-logo.png" // Update with the correct path to your image
            alt="Logo"
            className="w-24 h-10 object-contain"
          />
        </div>
        <button
          className="mt-8 w-full rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-700 transition duration-200 ease-in-out"
          onClick={() => router.push('/dashboard')}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

export default Marketplace
