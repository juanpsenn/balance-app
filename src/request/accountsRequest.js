import axiosRequest from "./axiosRequest";

export const listAccounts = async () => {
  const response = axiosRequest({
    method: "GET",
    url: "/accounts/list/",
  });
  return response;
};
