export interface LoginInterfaceRequest {
    email: string,
    password: string
}

export interface LoginInterfaceResponse extends LoginInterfaceRequest {
    user_id: number;
    category: number | 1;
    name: string,
    phone: number,
    genre: string,
    dob: string
    cambio_fase: number | 0,
    fase: number | 0
}

