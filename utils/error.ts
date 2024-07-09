import { toast } from 'react-hot-toast'

export const toastError = (error: any) => {
    const detail = error?.response?.data
    if(Array.isArray(detail))
        toast.error(detail?.[0]?.ctx?.reason || detail?.[0]?.msg)
    else if(typeof detail?.message === "string")
        toast.error(detail.message)
}
