import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";

function ItemListContainer({ saludo, numeros, array }) {
  const [data, setData] = useState([]);
  console.log("🚀 ~ ItemListContainer ~ data:", data);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <ItemList data={data} />;
}

export default ItemListContainer;
