"use client"

import { FormikValues } from "formik"
import AuthFormHeader from "@/components/AuthFormHeader"
import AuthFormFooter from "@/components/AuthFormFooter"
import FormButton from "@/components/FormButton"
import FormInput from "@/components/FormInput"
import Form from "@/components/Form"
import { useSignup } from "@/hooks/user"
import { signupSchema } from "@/models/models"
import { toastError } from "@/utils/error"

const SignupForm = () => {
    const { signup, isSigningUp } = useSignup()

    const handleSubmit = async (values: FormikValues) => {
        try {
            await signup({
                email: values.email,
                name: values.name,
                password: values.password,
            })
        } catch (error) {
            console.log(error)
            toastError(error)
        }

    }

    return (
        <Form
            initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
            wrapperClassName="w-full shadow-md bg-white max-w-[460px] py-[32px] px-[16px] rounded-[20px] flex flex-col gap-[24px]"
        >
            <AuthFormHeader
                title="Welcome"
                subTitle="Create an account to access all our features"
            />
            <div className="flex flex-col gap-[16px] w-full">
                <FormInput
                    fieldName="name"
                    placeholder="Your name"
                    label="Name"
                />
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
                <FormInput
                    fieldName="confirmPassword"
                    placeholder="Confirm password"
                    label="Confirm Password"
                    type="password"
                    withLockIcon
                />
            </div>
            <FormButton
                disabled={isSigningUp}
                className="w-full text-white bg-blue-7 h-[40px] font-[400] text-[16px] leading-[24px] border-2 border-[#5f89f8] rounded-[4px]"
            >
                Sign Up
            </FormButton>
            <AuthFormFooter
                text="Have an account?"
                route="/login"
                linkText="Login"
            />
        </Form>
    )
}

export default SignupForm
