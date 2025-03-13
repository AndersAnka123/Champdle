import useChamps from "./GetRandomChamp";

function GuessedChamps(guessedChamp: string, randomChamp: string) {
  const { champList } = useChamps();

  champList.forEach((item) => {});

  console.log("Random Champ: " + randomChamp);
  console.log(champList);

  if (guessedChamp == randomChamp) {
    alert("You got it!!");
  } else alert("You did not get it!!");

  return <h1>dsadsa</h1>;
}

export default GuessedChamps;
