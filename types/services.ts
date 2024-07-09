export interface ILoginPayload {
    email: string;
    password: string;
}

export type TLoginService = (payload: ILoginPayload) => Promise<{access_token:string}>


export interface IGetUserResponse {
    name: string;
    email: string;
}

export type TGetUserService = (token?: string) => Promise<IGetUserResponse>


export interface ICreateUserPayload {
    name: string;
    email: string;
    password: string
}
export type TCreateUSerService = (payload: ICreateUserPayload) => Promise<{access_token:string,user:IGetUserResponse}>