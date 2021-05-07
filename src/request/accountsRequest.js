import axiosRequest from "./axiosRequest";

export const listAccounts = async () => {
  const response = axiosRequest({
    method: "GET",
    url: "/accounts/list/",
  });
  return response;
};

export const createAccount = async (data) => {
  const response = axiosRequest({
    method: "POST",
    url: "/accounts/",
    data,
  });
  return response;
};
