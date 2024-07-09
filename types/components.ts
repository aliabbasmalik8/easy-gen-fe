import { FormikConfig, FormikValues } from "formik";

export interface IFormProps extends FormikConfig<FormikValues> {
    children?: React.ReactNode | React.ReactNode[];
    wrapperClassName?: string;
}

export interface IAuthProps extends React.PropsWithChildren {
    auth?: boolean
}

export interface IAuthFormHeaderProps {
    title?: string;
    subTitle?: string;
}

export interface IFormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    fieldName: string;
    label?: string;
    withLockIcon?: boolean;
}


export interface IFormButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface ILoaderProps {
    className?: string;
}


export interface IAuthFormFooterProps {
    text?: string;
    route: string;
    linkText?: string;
}
