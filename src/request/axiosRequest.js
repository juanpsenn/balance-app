import axios from "axios";

export default async function axiosRequest({ method, url, data, ...rest }) {
  const defaultHeader = {};
  const config = {
    method,
    url,
    data,
    headers: defaultHeader,
    ...rest,
  };

  return await axios(config);
}
