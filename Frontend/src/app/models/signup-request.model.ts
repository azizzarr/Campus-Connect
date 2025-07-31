import {Role} from "./role.model";

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  roles: Role[];
}
