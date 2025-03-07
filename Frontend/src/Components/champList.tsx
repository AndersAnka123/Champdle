import useChamps from "../Hooks/GetRandomChamp";

function onChampionClick(champ: string) {}

const randomChamp = useChamps();

const ChampsComponent: React.FC = () => {
  const { champList, loading, error } = useChamps();

  if (loading) return <p>Loading champions...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(randomChamp);

  return (
    <ul className="champList">
      {Object.keys(champList) // Get all champion names
        .map((champ) => (
          <li
            key={champ}
            className="champListItem"
            onClick={() => onChampionClick(champ)}
          >
            {champ}
          </li>
        ))}
    </ul>
  );
};

export default ChampsComponent;
