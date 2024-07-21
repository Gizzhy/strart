// utils/quantity.js
import { useState } from "react";

export const useQuantity = (initialValue = 0) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return { quantity, increment, decrement };
};
