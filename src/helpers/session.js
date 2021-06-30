export const addCookie = () => {
  const data = new Date();
  const days = 1;
  data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `unicorn-messenger-session; path=/; max-age=${data}`;
};

export const deleteCoockie = (name) => {
  document.cookie = "unicorn-messenger-session; path=/; max-age=-1";
};

export const checkCookie = () => {
  if (document.cookie === "unicorn-messenger-session") {
    return true;
  } else return false;
};
