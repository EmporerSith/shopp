import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/brand/1.png",
    title: "Slingbag",
    desc: "Tas Slingbag Rajut Kecil",
    price: "45.99",
  },
  {
    img: "/brand/2.png",
    title: "Footwear",
    desc: "Sepatu Rajut Hijau Padded",
    price: "55.99",
  },
  {
    img: "/brand/3.png",
    title: "Footwear",
    desc: "Sandal Rajut Pink Light",
    price: "25.99",
  },
  {
    img: "/brand/4.png",
    title: "Footwear",
    desc: "Sandal Rajut Biru Muda Light",
    price: "45.99",
  },
  {
    img: "/brand/5.png",
    title: "Hat",
    desc: "Topi Rajut Dark Cream",
    price: "45.99",
  },
  {
    img: "/brand/6.png",
    title: "Slingbag",
    desc: "Pouch Rajut Putih Octopus",
    price: "45.99",
  },
  {
    img: "/brand/8.png",
    title: "Slingbag",
    desc: "Tas Rajut Kecil Lime Single",
    price: "45.99",
  },
  {
    img: "/brand/7.png",
    title: "Bag",
    desc: "Tas Rajut Regular-sized Coffee",
    price: "45.99",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-10 px-5">
        <h2 className="font-semibold text-3xl pb-5">Our Products</h2>
        <div
          className="grid grid-cols-2 place-items-center sm:place-items-start 
        sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9 xl:gap-x-14 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductCard key={index} img={item.img} title={item.title} desc={item.desc} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
