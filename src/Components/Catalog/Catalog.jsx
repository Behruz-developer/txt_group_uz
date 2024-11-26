import React, { useState } from "react";
import man from "../../assets/images/man.svg";
import wal from "../../assets/images/wal.svg";
import catalog from "../../assets/images/catalog.png";
import pin_adress from "../../assets/images/pin_adress.svg";
import './Catalog.scss'

const Catalog = () => {
  // Katalogdagi kartalar uchun ma'lumotlar
  
  const catalogData = [
    {
      images: [catalog, man, wal],
      title: "Orifon",
      price: "298.9 mln UZS dan",
      description: "300 kvartira sotiladi",
      location: "Tashkent viloyati",
      size: "39,8м² (dan) - 111м² (gacha)"
    },
    {
      images: [man, wal, catalog],
      title: "Mega Palace",
      price: "400 mln UZS dan",
      description: "150 kvartira sotiladi",
      location: "Samarqand",
      size: "50м² (dan) - 120м² (gacha)"
    },
    {
      images: [wal, catalog, man],
      title: "Green City",
      price: "350 mln UZS dan",
      description: "200 kvartira sotiladi",
      location: "Buxoro",
      size: "45м² (dan) - 100м² (gacha)"
    }
  ];

  // Rasmning qaysi biri ko'rsatilayotganini kuzatish uchun holat
  const [currentImages, setCurrentImages] = useState(Array(catalogData.length).fill(0));

  // MouseMove funksiyasi
  const handleMouseMove = (e, cardIndex) => {
    const { width } = e.target.getBoundingClientRect();
    const xPos = e.nativeEvent.offsetX;
    const newImages = [...currentImages];

    if (xPos < width / 3) {
      newImages[cardIndex] = 0;
    } else if (xPos < (2 * width) / 3) {
      newImages[cardIndex] = 1;
    } else {
      newImages[cardIndex] = 2;
    }

    setCurrentImages(newImages);
  };

  return (
    <div className="catalog">
      <div className="container    mx-auto px-4">
        <div className="catalog_box">
          {catalogData.map((item, cardIndex) => (
            <div className="catalog_card" key={cardIndex}>
              <div
                className="catalog_card_img hover-slider"
                onMouseMove={(e) => handleMouseMove(e, cardIndex)}
              >
                {item.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`slider-image ${currentImages[cardIndex] === index ? "active" : ""}`}
                  >
                    <img
                      className="catalog_img"
                      src={imgSrc}
                      alt={item.title}
                    />
                  </div>
                ))}
                <div className="catalog_bottom">
                  <div className="catalog_bottom_card">
                    <p className="catalog_subtitle">{item.title}</p>
                    <p className="catalog_subtitle2">{item.price}</p>
                    <p className="catalog_bottom_text">{item.description}</p>
                  </div>
                  <div className="catalog_bottom_card">
                    <p className="card_palace">
                      <img className="pin_address" src={pin_adress} alt="Location" />
                      {item.location}
                    </p>
                    <p className="catalog_bottom_text">{item.size}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
