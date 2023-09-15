export const decodeJwt = () => {
  // Split the JWT into parts
  const accessToken = localStorage.getItem('accessToken')
  const [headerEncoded, payloadEncoded, signature] = accessToken.split('.');

  // Decode the Base64Url-encoded payload
  const payload = JSON.parse(
    Buffer.from(payloadEncoded, 'base64')
      .toString('utf8')
  );

  return payload;
};