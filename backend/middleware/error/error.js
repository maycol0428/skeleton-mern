export function error(message, statusCode) {
  let errorObj = new Error(message);
  errorObj.statusCode = statusCode || 500;
  return errorObj;
}
