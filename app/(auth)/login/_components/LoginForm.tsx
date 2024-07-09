"use client"

import { useRouter } from "next/navigation"
import { FormikValues } from "formik"
import { useState } from "react"
import Image from "next/image"

import AuthFormHeader from "@/components/AuthFormHeader"
// import AuthFormFooter from "@/components/AuthFormFooter"
import FormButton from "@/components/FormButton"
import FormInput from "@/components/FormInput"
import Loader from "@/components/Loader"
import Form from "@/components/Form"

import { useLogin } from "@/hooks/user"

import { loginSchema } from "@/models/models"

import { toastError } from "@/utils/error"

const LoginForm = () => {
    const [checked, setChecked] = useState(true)
    const router = useRouter()
    const { login, isLoggingIn } = useLogin()

    const handleSubmit = async(values: FormikValues) => {
        try {
            await login({ email: values.email, password: values.password })
        } catch (error) {
            console.log(error)
            toastError(error)
        }
    }

    const handleRememberMe = () => setChecked(prev => !prev)

    const handleNavigate = (route: string) => () => router.push(route)

    return (
        <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
            wrapperClassName="w-full shadow-md bg-white max-w-[460px] py-[32px] px-[16px] rounded-[20px] flex flex-col gap-[24px]"
        >
            <AuthFormHeader
                title="Welcome back"
                subTitle="Please enter our details to sign in"
            />
            <div className="flex flex-col gap-[16px] w-full">
                <FormInput 
                    fieldName="email" 
                    placeholder="Your Email" 
                    label="Email" 
                />
                <FormInput
                    fieldName="password"
                    placeholder="Password"
                    label="Password"
                    type="password"
                    withLockIcon
                />
                <div className="flex flex-row justify-between items-center w-full">
                    <div onClick={handleRememberMe} className="flex flex-row gap-[8px] items-center cursor-pointer">
                        {
                            checked ? 
                            <Image src="/check.svg" width="20" height="20" alt="check-icon" /> : 
                            <div className="w-[20px] h-[20px] rounded-[5px] border-[2px] border-blue-7" />
                        }
                        <div className="text-dark-9 font-[400] text-[14px] leading-[22px]">Remember me</div>
                    </div>
                    <div onClick={handleNavigate("/signup")} className="text-blue-7 cursor-pointer font-[500] text-[14px] leading-22px relative">
                        Signup
                        <div className="absolute w-full h-[1.5px] bg-blue-7 bottom-[1px]" />
                    </div>
                </div>
            </div>
            <FormButton 
                disabled={isLoggingIn} 
                className="w-full flex flex-row items-center justify-center gap-[10px] bg-blue-7 h-[40px] leading-[24px] border-2 border-[#5f89f8] rounded-[4px]"
            >
                <div className="text-white  font-[400] text-[16px]">
                    Sign in
                </div>
                {isLoggingIn && <Loader className="w-4 h-4 dark:text-gray-2 fill-blue-6" />}
            </FormButton>
            {/* <AuthFormFooter
                route="/signup"
                text="Don't have an account?"
                linkText="Sign up"
            /> */}
        </Form>
    )
}

export default LoginForm
