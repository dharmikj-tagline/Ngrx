export interface UserComponentState {
    isLoading: boolean;
    error: string | null;
    users: UserList[];
}

export interface UserDetailComponentState {
    userDetail: any;
}

export interface UserList {
    id: number | null;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    }
}