import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAddOrRemoveRestaurant = (restaurant) => {
    setLoading(true);
    setFavorites((prevValue) => {
      const restaurantExists = prevValue.find(
        (oldRestaurant) => oldRestaurant.placeId === restaurant.placeId
      );
      if (restaurantExists) {
        setLoading(false);
        return prevValue.filter(
          (oldRestaurant) => oldRestaurant.placeId !== restaurantExists.placeId
        );
      } else {
        setLoading(false);
        return [...prevValue, restaurant];
      }
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, onAddOrRemoveRestaurant, loading }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
