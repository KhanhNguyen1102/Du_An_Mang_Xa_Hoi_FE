import {User} from "./user";

export interface Post {
  id?: string;
  user?: User;
  createAt?: string;
  content?: string;
  imageList?: string;
  status?: string;
}
