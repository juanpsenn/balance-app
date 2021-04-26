import axiosRequest from "./axiosRequest";

export const createMovement = async (data) => {
  const response = await axiosRequest({
    url: "/movements/",
    method: "POST",
    data,
  });
  return response;
};

export const listMovements = async ({
  from_date,
  to_date,
  orderby,
  page,
  size,
}) => {
  const response = await axiosRequest({
    url: `/movements/list/?from_date=${from_date || ""}&to_date=${
      to_date || ""
    }&orderby=${orderby || ""}&page=${page || 1}&size=${size || 10}`,
    method: "GET",
  });
  return response;
};
