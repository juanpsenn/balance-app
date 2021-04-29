export default function objToFormData(obj) {
  const formData = new FormData();
  const objsKeys = Object.keys(obj);
  objsKeys.forEach((objsKey) => formData.append(`${objsKey}`, obj[objsKey]));
  return formData;
}
