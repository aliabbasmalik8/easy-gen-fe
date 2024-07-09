import { TCreateUSerService, TGetUserService, TLoginService } from "@/types/services"
import { getToken } from "@/utils/token"
import axios from "axios"

export const login: TLoginService = async (payload) => {
    const { data } = await axios.post("/auth/login", payload)
    return data
}

export const getUser: TGetUserService = async (token) => {
    const { data } = await axios.get(`/user`, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return data
}

export const createUser: TCreateUSerService = async (payload) => {
    const { data } = await axios.post(`/user`, payload, {
        headers: {
            Authorization: "Bearer " + getToken()
        }
    })
    return data
}