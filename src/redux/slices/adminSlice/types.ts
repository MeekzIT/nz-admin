export type AdminState = {
    adminIsLoggedIn: boolean;
    loading: boolean
    error: string,
}

export type LoginRequest = {
    email: string;
    password: string;
}