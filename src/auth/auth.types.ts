export interface User {
  fullname: string;
  email: string;
  password: string;
  age: number;
}

export interface UserLogin {
  email: string;
  password: string;
}
