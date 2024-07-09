"use client"

import { usePathname, useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { IAuthProps } from "@/types/components"

import { getUser } from "@/services/user"

import { getToken } from "@/utils/token"

import Loader from "./Loader"

const Auth: React.FC<IAuthProps> = ({ auth, children }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["getUser"],
        queryFn: () => getUser(getToken() as string)
    })
    const router = useRouter()
    const pathname = usePathname()

    const allowedPaths: Record<string, { defaultRedirect: string, routes: string[] }> = {
        logged_in: {
            defaultRedirect: "/",
            routes: []
        },
        not_logged_in: {
            defaultRedirect: "/login",
            routes: ["/login","/signup"]
        },
    }

    if (isLoading) return <div className="w-full h-screen flex justify-center items-center">
        <Loader className="w-8 h-8 dark:text-gray-2 fill-blue-6" />
    </div>
    if ((!auth && !data)) return children
    else if (auth && data) {
        const { defaultRedirect, routes } = allowedPaths['logged_in'];
        const isMatched = routes.some(route => pathname.includes(route))
        if (isMatched) return children
        if(pathname==="/") return children
        else router.push(defaultRedirect)
        return <></>
    }
    else if (auth && !data) {
        const { defaultRedirect, routes } = allowedPaths['not_logged_in'];
        const isMatched = routes.some(route => pathname.includes(route))
        if (isMatched) return children
        else router.push(defaultRedirect)
    }
    return <></>
}

export default Auth
