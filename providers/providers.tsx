"use client"
import { Toaster } from 'react-hot-toast'
import React from "react"
import axios from "axios"

import ReactQueryProvider from './ReactQueryProvider'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL as string

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <ReactQueryProvider>
            {children}
            <Toaster />
        </ReactQueryProvider>
    )
}

export default Providers
