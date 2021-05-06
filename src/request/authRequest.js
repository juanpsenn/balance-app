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

export default { login };
