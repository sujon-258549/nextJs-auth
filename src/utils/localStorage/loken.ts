export const tokenInfo = () => {
  const tokenData = localStorage.getItem("accessToken");
  console.log(tokenData);
  return tokenData;
};
