export async function response(body, statusCode = 200) {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}