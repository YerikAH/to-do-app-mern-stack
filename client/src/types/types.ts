export class RegisterBody {
  username: string = "";
  email: string = "";
  password: string = "";
}
export class LoginBody {
  email: string = "";
  password: string = "";
}

export class RegisterResponse {
  id: string = "";
  username: string = "";
  email: string = "";
  createdAt: string = "";
  updateAt: string = "";
}
export class LoginResponse {
  id: string = "";
  username: string = "";
  email: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  constructor(response: LoginResponse) {
    this.id = response.id;
    this.username = response.username;
    this.email = response.email;
    this.createdAt = response.createdAt;
    this.updatedAt = response.updatedAt;
  }
}

export class ErrorResponse {
  message: unknown;
  statusCode: number = 0;
  statusText: string = "";
  constructor(response: ErrorResponse) {
    this.message = response.message;
    this.statusCode = response.statusCode;
    this.statusText = response.statusText;
  }
}
