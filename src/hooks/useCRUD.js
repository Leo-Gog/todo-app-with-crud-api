import { useState } from "react";

const useCRUD = () => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (url, method, body) => {
    setLoading(true);

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };

    if (body) options.body = JSON.stringify(body);

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("error");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err.message);
    }
    
    setLoading(false);
  };
  return { sendRequest, loading };
};
export default useCRUD;
