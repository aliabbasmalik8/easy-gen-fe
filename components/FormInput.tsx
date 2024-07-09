"use client"

import { useFormikContext } from "formik"
import React, { useState } from "react"
import classNames from "classnames"
import Image from "next/image"

import { IFormInputProps } from "@/types/components"

const FormInput: React.FC<IFormInputProps> = ({ fieldName, label, withLockIcon, ...inputProps }) => {
    const { className, ...otherInputProps } = inputProps
    const [type, setType] = useState(otherInputProps.type)
    const { values, handleChange, errors, touched, setFieldTouched } = useFormikContext<Record<string, string>>()

    const handleEyeClick = () => {
        if (type === otherInputProps.type) setType("text")
        else setType("password")
    }

    return (
        <div className="w-full flex flex-col gap-[4px]">
            {label ? <div className="font-[500] text-[14px] leading-[22px] text-dark-6">
                {label}
            </div> : <></>}
            <div className="w-full relative">
                {withLockIcon ? <div className="absolute left-[12px] top-[11px]">
                    <Image src="/lock.svg" width="16" height="16" alt="lock icon" />
                </div> : <></>}
                <input
                    {...otherInputProps}
                    type={type}
                    value={values[fieldName]}
                    onBlur={() => setFieldTouched(fieldName)}
                    onChange={handleChange(fieldName)}
                    className={classNames(
                        "w-full h-[38px] focus:outline-none bg-gray-1 py-[8px] px-[12px] rounded-[4px] text-[14px] leading-[22px] font-[400]",
                        { "px-[36px]": withLockIcon },
                        className
                    )}
                />
                <div className="w-full mt-2 font-[400] text-red-6 text-[12px]">
                    {touched[fieldName] && errors[fieldName]}
                </div>
                {otherInputProps.type === "password" ? <div onClick={handleEyeClick} className="absolute right-[12px] top-[11px] cursor-pointer">
                    <Image src="/eye.svg" width="16" height="16" alt="lock icon" />
                </div> : <></>}
            </div>
        </div>
    )
}

export default FormInput
