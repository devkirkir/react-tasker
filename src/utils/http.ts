type HttpMethods = "GET" | "POST";

interface HttpOptions {
  method: HttpMethods;
  headers: {
    ["Content-Type"]?: "application/json";
  };
  body?: string;
}

const initialHttpOptions: HttpOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const http = async (url: string, options = initialHttpOptions) => {
  try {
    const response = await fetch(url, options);

    return await response.json();
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export default http;
