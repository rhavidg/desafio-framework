import { AxiosPromise } from "axios";
import api from "./api";

class CoreService {
  getAlbuns = (): AxiosPromise => {
    return api.get("/albums");
  };

  getUsers = (): AxiosPromise => {
    return api.get("/users");
  };
  getPosts = (): AxiosPromise => {
    return api.get("/posts");
  };
  getToDos = (): AxiosPromise => {
    return api.get("/todos");
  };
}

export default CoreService;
