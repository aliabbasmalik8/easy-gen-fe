"use client"
import { removeToken } from '@/utils/token'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

function HomePage() {
    const client = useQueryClient()
    const handleLogout = () => {
        removeToken()
        client.resetQueries()
    }
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to the Application</h1>
                <p className="mt-4 text-lg text-gray-600">We are glad to have you here!</p>
                <button
                    onClick={handleLogout}
                    className="w-full flex flex-row items-center justify-center gap-[10px] bg-blue-7 h-[40px] leading-[24px] border-2 border-[#5f89f8] rounded-[4px] mt-4"
                >
                    <div className="text-white  font-[400] text-[16px]">
                        Logout
                    </div>
                </button>
            </div>

        </div>
    )
}

export default HomePage