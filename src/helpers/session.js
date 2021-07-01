export const addCookie = (loginData) => {
  const data = new Date();
  const days = 1;
  data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${loginData}; path=/; max-age=${data}`;
};

export const deleteCoockie = (name) => {
  document.cookie = `${name}; path=/; max-age=-1`;
};

export const checkCookie = () => {
  if (document.cookie) {
    return document.cookie;
  } else return false;
};
