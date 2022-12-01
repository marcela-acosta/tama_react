import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carusel from "./components/Carusel/Carusel";
import Card from "./components/Card/Card";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const cards = [
    {
      titulo: "Transportador de plástico",
      descripcion:
        "$950",
      img: "https://image.chewy.com/is/image/catalog/89372_MAIN._AC_SL1500_V1569016432_.jpg",
      btnText: "Agregar al carrito",
    },
    {
      titulo: "Transportador bolso",
      descripcion:
        "$1150",
      img: "https://m.media-amazon.com/images/I/81fjfUnQKBS.jpg",
      btnText: "Agregar al carrito",
    },
    {
      titulo: "Transportador mochila",
      descripcion:
        "$1450",
      img: "https://cdn.shopify.com/s/files/1/0542/9300/4483/collections/pet-crates-carriers.jpg?v=1665957081",
      btnText: "Agregar al carrito",
    },
    {
      titulo: "Transportador burbuja",
      descripcion:
        "$1550",
      img: "https://m.media-amazon.com/images/I/61gq+0iTWCL.jpg",
      btnText: "Agregar al carrito",
    },
  ];

  return (
    <div>
      <Main>
      <ItemListContainer greeting='¡HOLA! Soy un mensaje de ItemListContainer' />
        <Carusel/>
        <div className="d-flex">
        {cards.map(
          ({ titulo, descripcion, img, btnText, btnClassName }, index) => (
            <Card
              key={index}
              titulo={titulo}
              descripcion={descripcion}
              img={img}
              btnText={btnText}
              btnClassName={btnClassName}
            />
          )
        )}
        </div>
      </Main>
    </div>
  );
}

export default App;

