import axiosRequest from "./axiosRequest";

export const listCategories = async () => {
  const response = await axiosRequest({
    url: "/generics/categories/",
    method: "GET",
  });
  return response;
};
