// type HttpMethods = "GET" | "POST";

const initialHttpOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const http = async (url: string, options: object = initialHttpOptions) => {
  const response = await fetch(url, options);

  return await response.json();
};

export default http;
