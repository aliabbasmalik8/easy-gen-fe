"use client"

import classNames from "classnames"
import { Formik } from "formik"
import React from "react"

import { IFormProps } from "@/types/components"

const Form: React.FC<IFormProps> = ({
    wrapperClassName,
    children,
    ...props
}) => {
    return (
        <Formik
            {...props}
        >
            <div className={classNames(wrapperClassName)}>
                {children}
            </div>
        </Formik>
    )
}

export default Form
