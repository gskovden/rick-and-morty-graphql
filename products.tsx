import "./style.css";

import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

interface Product {
  description: string;
  id: string;
  info: string;
  name: string;
}

type Shop = {
  coordinate: number[];
  id: string;
  name: string;
  priceList: Record<string, string>;
};

const AppTimer = () => {
  const currency = " $";
  const [counter, setCounter] = useState(10);

  const onDecrease = () => {
    if (counter > 0) {
      setCounter((prev) => prev--);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(onDecrease, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="Controls">{counter}</div>
      <ProductList currency={currency} />
    </div>
  );
};

interface ProductListProps {
  currency: string;
  error?: boolean;
}

const ProductList = ({ currency, error = false }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [shops, setShops] = useState<Array<Shop>>([]);

  useEffect(() => {
    async function fetchedProducts() {
      const productsResponse = await fetch(
        "https://my-json-server.typicode.com/cyberwalrus/demo/products",
      );
      const productsJson = await productsResponse.json();

      setProducts(productsJson);
    }
    fetchedProducts();
  }, []);

  const getShops = (id: string) => {
    return shops.filter((shop) => shop.priceList[id]);
  };

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/cyberwalrus/demo/shops")
      .then((res) => res.json())
      .then((res) => setShops(res));
  }, []);

  if (error) {
    return null;
  }

  return (
    <div className="productsWrapper">
      {/* render products */}
      {products.map(({ name, description, id }) => (
        <main className="products" key={id}>
          <h2 className="products-Item_green">{name}</h2>
          <h5>{description}</h5>
          <hr />
          {/* render shops list */}
          <ul className="postList">
            {getShops(id).map(({ name, priceList, id: shopId }) => (
              <li className="post__header" key={shopId}>
                {name} -{" "}
                {Object.entries(priceList).find(([key]) => id === key)?.[1]}
                {currency}
              </li>
            ))}
          </ul>
        </main>
      ))}
    </div>
  );
};

createRoot(document.getElementById("root") as HTMLElement).render(<AppTimer />);