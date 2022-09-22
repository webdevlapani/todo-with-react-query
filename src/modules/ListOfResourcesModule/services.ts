import axios from "axios";
import { ResourceDataType } from "../types";

export const USER_LIST_GET = "https://gorest.co.in/public/v2/users";

export const getUserService = () => {
  return axios
    .get(USER_LIST_GET, {
      headers: {
        Authorization:
          "Bearer f9c38344d52465a543774f7601f106fcd354ce30777785b0d5a79b0ac04a1b62",
      },
    })
    .then((res) => res.data.reverse());
};

export const addUserService = (body: ResourceDataType) => {
  return axios.post(USER_LIST_GET, body, {
    headers: {
      Authorization:
        "Bearer f9c38344d52465a543774f7601f106fcd354ce30777785b0d5a79b0ac04a1b62",
    },
  });
};
