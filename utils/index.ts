export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
export const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

export const generateRandomString = (myLength: number) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: myLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
};

export const setToken = (url: string, s: any) => {
  if (url.includes("access_token")) {
    const token = extractToken(url);
    s.setAccessToken(token);
    localStorage.setItem("token", token);
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

// NON EXPORTED FUNCTIONS BELOW //

const extractToken = (url: string) => {
  const hash = url.substring(1);
  const params = hash.split("&");
  const token = params[0].split("=")[1];

  return token;
};
