"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import React from "react"

let client: QueryClient | undefined;

const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry: false,
            },
        },
    })
}

const getQueryClient = () => {
    if (typeof window === "undefined") {
        return makeQueryClient()
    } else {
        if (!client) client = makeQueryClient()
        return client
    }
}

const ReactQueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const client = getQueryClient()
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider
