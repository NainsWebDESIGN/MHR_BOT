export const Form = (status, data, msg = "") => {
  return {
    success: status,
    data: data,
    message: msg,
  };
};