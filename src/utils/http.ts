type HttpMethods = "GET" | "POST" | "PATCH";

interface HttpOptions {
  method: HttpMethods;
  headers?: {
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

    if (response.status !== 200) {
      throw new Error("Server Http Error");
    }

    return response.json();
  } catch (error) {
    return error;
  }
};

export default http;
