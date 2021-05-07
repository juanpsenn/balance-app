import axiosRequest from "./axiosRequest";

export const listCategories = async () => {
  const response = await axiosRequest({
    url: "/generics/categories/",
    method: "GET",
  });
  return response;
};

export const createCategory = async (data) => {
  const response = await axiosRequest({
    url: "/generics/categories/",
    method: "POST",
    data,
  });
  return response;
};

export const listBanks = async () => {
  const response = await axiosRequest({
    url: "/generics/banks/",
    method: "GET",
  });
  return response;
};

export const listOwners = async () => {
  const response = await axiosRequest({
    url: "/generics/owners/",
    method: "GET",
  });
  return response;
};
