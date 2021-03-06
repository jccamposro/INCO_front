export interface User {
    id: number;
    name_user: string;
    unencrypted_password: string;
    password: string;
    name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    CC: string;
    gender: string;
    role: number;
    profile_picture: string;
    remember_token: string;
    created_at: string;
    updated_at: string;
}

export interface UserMatch {
    user_id: number;
    name_user: string;
}

export interface UserForMatch {
    id_user: number;
}

export interface UserForMatchIN {
    id_user: number;
    id_venture:number;
}