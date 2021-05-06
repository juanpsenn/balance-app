import axios from "axios";

export default async function axiosRequest({
  method,
  url,
  data,
  header,
  ...rest
}) {
  const defaultHeader = { ...header };
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://juansennait.pythonanywhere.com"
      : "http://localhost:8000";
  const config = {
    method,
    url: baseUrl + url,
    data,
    headers: defaultHeader,
    ...rest,
  };

  return await axios(config);
}
