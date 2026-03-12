import Card from "./Card";

//create your first component
const Home = () => {
  // mock data
  const person = {
    name: "Liz",
    age: "23",
    carMake: "Toyota",
    carModel: "Prius",
    carYear: 2029,
    image: "https://picsum.photos/200",
  };

  return (
    <div className="text-center">
      <Card name={person.name} carMake={person.carMake} image={person.image} />
    </div>
  );
};

export default Home;
