export interface Influencer {
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

export interface InfluencerInformation {
    description: string;
    category: number;
}