import axiosRequest from "./axiosRequest";

export const listCategories = async () => {
  const response = await axiosRequest({
    url: "/generics/categories/",
    method: "GET",
  });
  return response;
};

export const listAccounts = async () => {
  const response = await axiosRequest({
    url: "/accounts/list/",
    method: "GET",
  });
  return response;
};
