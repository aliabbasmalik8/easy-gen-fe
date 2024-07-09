"use client"

import Image from "next/image"
import React from "react"

import { IAuthFormHeaderProps } from "@/types/components"

const AuthFormHeader: React.FC<IAuthFormHeaderProps> = ({ title, subTitle }) => {
    return (
        <div className="relative flex flex-col gap-[16px] justify-center items-center">
            <div className="flex flex-col gap-[4px] justify-center items-center">
                <div className="font-[600] text-dark-6 text-[20px] leading-[28px]">
                    {title}
                </div>
                <div className="font-[400] text-[14px] leading-[22px] text-gray-6 text-center">
                    {subTitle}
                </div>
            </div>
        </div>
    )
}

export default AuthFormHeader
