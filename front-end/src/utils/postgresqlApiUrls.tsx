

export const baseUrl = "http://localhost:8080/api/";

// USERS API REQUESTS

export const userUrl = baseUrl + "users";

export const userIdUrl = (id: string): string => {
    return userUrl + "/" + id;
};

export const userEmailUrl = (email: string): string => {
    return userUrl + "/" + email;
};

