import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"


const Cards = ({currentProducts}) => { //recibo los usuarios por props
  

/*   const usersList = allUsers */
  return (
    <div className={styles.cardList}>

      {currentProducts?.map((user)=>(
         <Card key={user.id} user = {user}/>
         )) } {/* primer verifico si existe userList , luego hago un map para mandarle por prop a mi Card cada uno de los usuarios  */}
       
    </div>
  );
};

export default Cards;

/* 
import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Cards = ({ currentProducts }) => {
  // Determinar el número de tarjetas a mostrar en función del número de productos
  const slidesToShow = Math.min(currentProducts.length, 3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {currentProducts?.map((user) => (
          <div key={user.id}>
            <Card user={user} />
          </div>
        ))}
      </Slider>
      <div>
      </div>
    </div>
  );
};

export default Cards;

 */