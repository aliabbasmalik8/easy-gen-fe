"use client"

import { useFormikContext } from "formik"
import React from "react"

import { IFormButtonProps } from "@/types/components"

const FormButton: React.FC<IFormButtonProps> = (props) => {
    const { handleSubmit } = useFormikContext()
    return (
        <button {...props} onClick={() => handleSubmit()} />
    )
}

export default FormButton
