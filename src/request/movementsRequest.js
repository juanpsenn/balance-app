import objToFormData from "src/utils/objToFormData";
import axiosRequest from "./axiosRequest";

export const createMovement = async (data) => {
  const dataForm = objToFormData(data);
  const response = await axiosRequest({
    url: "/movements/",
    method: "POST",
    data: dataForm,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export const listMovements = async ({
  from_date,
  to_date,
  orderby,
  limit,
  offset,
}) => {
  const response = await axiosRequest({
    url: `/movements/list/?from_date=${from_date || ""}&to_date=${
      to_date || ""
    }&orderby=${orderby || ""}&offset=${offset || 0}&limit=${limit || 10}`,
    method: "GET",
  });
  return response;
};

const deleteMovement = async (uuid) => {
  const response = await axiosRequest({
    method: "PUT",
    url: `/movements/delete/${uuid}/`,
  });
};
