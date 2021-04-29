import axios from "axios";

export default async function axiosRequest({
  method,
  url,
  data,
  header,
  ...rest
}) {
  const defaultHeader = { ...header };
  const config = {
    method,
    url,
    data,
    headers: defaultHeader,
    ...rest,
  };

  return await axios(config);
}
