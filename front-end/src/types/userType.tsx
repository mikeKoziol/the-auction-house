

// TODO: add in organizationId and role
export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    organizationId: number | null;
    dateCreated: string;
};


