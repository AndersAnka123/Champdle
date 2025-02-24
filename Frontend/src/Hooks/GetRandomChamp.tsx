import { useEffect, useState } from "react";

function getRandomChamp() {
  const [data, setData] = useState(null);
  const [loadingm, setloading] = useState(true);
  const [error, setError] = useState(null);

  let url = "https://httpbin.org/get";
  useEffect(() => {
    let fetchData = async () => {
      setloading(true);
      try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setloading(false);
      }
    };
    fetchData()
  }, [url]);
}

export default getRandomChamp;
