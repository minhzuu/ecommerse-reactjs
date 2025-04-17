import { createContext, useEffect, useState } from "react";
import { getProducts } from "@/apis/ProductsService";

export const OurShopContext = createContext();
export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: "Default sorting", value: "0" },
    { label: "Sort by popularity", value: "1" },
    { label: "Sort by average rating", value: "2" },
    { label: "Sort by latest", value: "3" },
    { label: "Sort by price: low to high", value: "4" },
    { label: "Sort by price: high to low", value: "5" },
  ];
  const showOptions = [
    { label: "Show 8", value: "8" },
    { label: "Show 12", value: "12" },
    { label: "all", value: "all" },
  ];

  const [sortId, setSortId] = useState("0");
  const [showId, setShowId] = useState("8");
  const [isShowGrid, setIsShowGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const values = {
    sortOptions,
    showOptions,
    setIsShowGrid,
    setShowId,
    setSortId,
    products,
    isShowGrid,
  };
  useEffect(() => {
    const query = {
      sortType: sortId,
      page: 1,
      limit: showId,
    };
    getProducts(query)
      .then((res) => {
        setProducts(res.contents);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [sortId, showId]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
