import { useEffect, useState } from "react";

const API_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json";

function useChamps(url: string = API_URL) {
  const [randomChamp, setRandomChamp] = useState<string>(""); // Random champ
  const [champList, setChampList] = useState<string[]>([]); // List of champions
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        const champNames: string[] = Object.keys(data.data);
        setChampList(champNames);
        setRandomChamp(
          champNames[Math.floor(Math.random() * champNames.length)]
        );
      } catch (err) {
        setError("Failed to fetch champion data");
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, [url]);

  return { champList, randomChamp, loading, error };
}

export default useChamps;

// useEffect(() => {
//   let fetchChampions = async () => {
//     try {
//       const response = await fetch(
//         "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json"
//       );
//       const data = await response.json();
//       const champNames: any = Object.keys(data.data);
//       setChampions(champNames);

//       setRandomChamp(champNames[Math.floor(Math.random() * champNames.length)]);
//     } catch (error) {
//       console.error("Error fetching champions:", error);
//     }
//   };
//   fetchChampions();
// }, [null]);
