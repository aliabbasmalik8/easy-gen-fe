import { createUser, login } from "@/services/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"
export const useLogin = () => {
    const client = useQueryClient()
    const onSuccess = ({access_token}:{access_token:string}) => {
        localStorage.setItem("token", access_token)
        client.invalidateQueries({
            predicate: ({ queryKey }) => queryKey[0] === "getUser",
        })
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: login,
        onSuccess
    })

    return { login: mutateAsync, isLoggingIn: isPending }
}
export const useSignup = () => {
    const client = useQueryClient()
    const onSuccess = ({access_token}:{access_token:string}) => {
        console.log("access_token",access_token)
        localStorage.setItem("token", access_token)
        client.invalidateQueries({
            predicate: ({ queryKey }) => queryKey[0] === "getUser",
        })
    }
    const { mutateAsync, isPending } = useMutation({
        mutationFn: createUser,
        onSuccess
    })

    return { signup: mutateAsync, isSigningUp: isPending }
}