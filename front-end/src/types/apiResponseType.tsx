

// TODO: figure out tighter data type?

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T | null;
};

