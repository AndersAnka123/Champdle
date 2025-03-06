import { useEffect, useState } from "react";

function getChampsFunction() {
  let [randomChamp, setRandomChamp] = useState(""); // Random champ
  let [champList, setChampList] = useState<string[]>([]); // Lista med alla champ namn.

  useEffect(() => {
    let fetchChampions = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json"
        );
        const data = await response.json(); // Fånga svart av anropet
        const ChampNames: any = Object.keys(data.data); // Gå igenom varje objects namn och göra det till en variabel
        console.log(ChampNames);

        let selectRandomChamp = () => {
          setRandomChamp(
            ChampNames[Math.floor(Math.random() * ChampNames.length)]
          ); // Så ut en random champ
        };

        selectRandomChamp();
      } catch (error) {
        console.log("Something went wrong" + error);
      }
      return setRandomChamp;
    };
    fetchChampions();
  });
  console.log(randomChamp);
}

export default getChampsFunction();
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
