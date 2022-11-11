import React from "react";
import "./Category.css";
import { useState } from "react";

const Category = () => {
//   const [bgImage, setBgImage] = useState("");
  const [selectedItem, setSelectedItem] = useState();

  //   const handleHover = () => {
  //     console.log("HOver ON");
  //   };
  //   const handleOver = () => {
  //     console.log("HOver OFf");
  //   };

  const menuItems = [
    {
      id: 0,
      label: "About",
      img: "https://cassandraladru.com/wp-content/uploads/2018/03/SaraRich_SP-45.jpg",
      numb: "/01",
    },
    {
      id: 1,
      label: "Weddings",
      img: "https://cassandraladru.com/wp-content/uploads/2018/03/MariaAnthony_SP-1-4-2048x1536.jpg",
      numb: "/02",
    },
    {
      id: 2,
      label: "Commercial",
      img: "https://cassandraladru.com/wp-content/uploads/2018/03/TBA_FINALS-36.jpg",
      numb: "/03",
    },
    {
      id: 3,
      label: "Contact",
      img: "https://cassandraladru.com/wp-content/uploads/2018/03/JP_WhiteMag-1-2.jpg",
      numb: "/04",
    },
    {
      id: 4,
      label: "The Experience",
      img: "https://cassandraladru.com/wp-content/uploads/2018/03/AnnieRob_SP-51.jpg",
      numb: "/05",
    },
  ];

  return (
    <div
      className="category-container "
      style={{
        backgroundImage: `url('${
          selectedItem?.img ??
          "https://cassandraladru.com/wp-content/uploads/2018/03/SaraRich_SP-45.jpg"
        }')`,
      }}
    >
      <div className="category-section">
        <div className="categories">
          <p>BROWSE BY CATEGORY</p>
          {menuItems.map((el) => {
            return (
              <a
                href=""
                onMouseEnter={() => {
                  setSelectedItem(el);
                }}
                // onMouseLeave={() => {
                //   setSelectedItem(undefined);
                // }}
              >
                <span>+</span> {el.label} <span>{el.numb}</span>
              </a>
            );
          })}
          {/* <a href="" onMouseEnter={handleHover} onMouseLeave={handleOver}>
            <span>+</span> Weddings <span>/02</span>
          </a>
          <a href="" onMouseEnter={handleHover} onMouseLeave={handleOver}>
            <span>+</span> Commercial <span>/03</span>
          </a>
          <a href="" onMouseEnter={handleHover} onMouseLeave={handleOver}>
            <span>+</span> Contact <span>/04</span>
          </a>
          <a href="" onMouseEnter={handleHover} onMouseLeave={handleOver}>
            <span>+</span> The Experience <span>/05</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
