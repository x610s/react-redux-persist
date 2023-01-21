import React, { useEffect, useState } from "react";
import { Product, ProductResponse } from "../models/products";

export const useFetchProducts = () => {
  const [carrito, setcarrito] = useState<any>(null);
  useEffect(() => {
   fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(data => {
      setcarrito(data.products.slice(0,5)) 
      });
  }, []);
  return carrito;
};
