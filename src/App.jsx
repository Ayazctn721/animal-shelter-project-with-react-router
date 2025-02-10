import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CardContainer from "./components/CardContainer.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  // -------> first way <---- //

  // const images = [
  //   new URL('./assets/cat-1.png', import.meta.url).href,
  //   new URL('./assets/cat-2.png', import.meta.url).href,
  //   new URL('./assets/cat-3.png', import.meta.url).href,
  //   new URL('./assets/dog-1.png', import.meta.url).href,
  //   new URL('./assets/dog-2.png', import.meta.url).href,
  //   new URL('./assets/dog-3.png', import.meta.url).href

  // ];

  // const petNames = [
  //   'Nami',
  //   'Naruto',
  //   'Luna',
  //   'Lina',
  //   'Pamuk',
  //   'Lino'
  // ];

  // ----->second way<-----//

  const pets = [
    { id: 1, name: 'Nami', image: './assets/cat-1.png' },
    { id: 2, name: 'Naruto', image: './assets/cat-2.png' },
    { id: 3, name: 'Luna', image: './assets/cat-3.png' },
    { id: 4, name: 'Lina', image: './assets/dog-1.png' },
    { id: 5, name: 'Pamuk', image: './assets/dog-2.png' },
    { id: 6, name: 'Lino', image: './assets/dog-3.png' }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* -----> first way <----- */}

      {/* <CardContainer> */}
      {/* <Card
          src={images[0]}
          name={petNames[0]}
        />
        <Card
          src={images[1]}
          name={petNames[1]}
        />
        <Card
          src={images[2]}
          name={petNames[2]}
        />
        <Card
          src={images[3]}
          name={petNames[3]}
        />
        <Card
          src={images[4]}
          name={petNames[4]}
        />
        <Card
          src={images[5]}
          name={petNames[5]}
        /> */}
      {/* </CardContainer> */}

      {/*----> second way <----- */}

      <CardContainer>
        {pets.map(pet => (
          <Card
            key={pet.id}
            src={new URL(pet.image, import.meta.url).href}
            name={pet.name}
          />
        ))}
      </CardContainer>
      <Footer />
    </>
  );
}

export default App;
