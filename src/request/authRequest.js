import axiosRequest from "./axiosRequest";

const login = async ({ username, password }) => {
  const data = { username, password };
  const response = await axiosRequest({
    url: "/users/auth/",
    method: "POST",
    data,
  });
  return response;
};

export const listUser = async () => {
  const response = await axiosRequest({
    url: "/users/list/",
    method: "GET",
  });
  return response;
};

export default { login };
