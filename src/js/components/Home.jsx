import Card from "./Card";

//create your first component
const Home = () => {
  // mock data
  const person = {
    name: "Liz",
    age: "23",
    carMake: "Hundai",
    carModel: "Tacoma",
    carYear: 2029,
    image: "https://picsum.photos/200",
  };

  return (
    <div className="text-center">
      <Card />
    </div>
  );
};

export default Home;
