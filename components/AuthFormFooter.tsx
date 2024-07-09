"use client"

import { useRouter } from "next/navigation"
import React from "react"

import { IAuthFormFooterProps } from "@/types/components"

const AuthFormFooter: React.FC<IAuthFormFooterProps> = ({ text, route, linkText }) => {
    const router = useRouter()

    const handleNavigate = () => router.push(route)

    return (
        <div className="flex gap-[5px] font-[500] text-[14px] leading-[22px] justify-center">
            <span className="text-gray-6">{text}</span>
            <span onClick={handleNavigate} className="text-blue-7 cursor-pointer">{linkText}</span>
        </div>
    )
}

export default AuthFormFooter
