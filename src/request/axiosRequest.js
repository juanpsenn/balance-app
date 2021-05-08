import axios from "axios";

export default async function axiosRequest({
  method,
  url,
  data,
  header,
  ...rest
}) {
  const token = sessionStorage.getItem("_uid");
  const authorization = { Authorization: `Token ${token}` };
  const defaultHeader = token ? { ...authorization, ...header } : { ...header };
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "http://ec2-18-223-126-150.us-east-2.compute.amazonaws.com/api"
      : "http://localhost:8000/api";
  const config = {
    method,
    url: baseUrl + url,
    data,
    headers: defaultHeader,
    ...rest,
  };

  return await axios(config);
}
