export interface RegisterBody {
  username: string;
  email: string;
  password: string;
}
export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updateAt: string;
}

export interface ErrorResponse {
  message: unknown;
  statusCode: number;
  statusText: string;
}
