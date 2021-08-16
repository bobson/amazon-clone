import React, { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { useSpring, animated } from "react-spring";

import "./CheckoutItem.css";

const CheckoutItem = ({ id, title, image, price, rating, hideButton }) => {
  const [{}, dispatch] = useStateValue();
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    duration: 300,
    reverse: flip,
  });

  const removeFromBasket = () => {
    setTimeout(() => {
      setFlip(false);
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id,
      });
    }, 300);
    setFlip(true);
  };

  return (
    <animated.div style={props} className="checkoutItem">
      <div className="checkoutItem__left">
        <img src={image} alt="item" />
      </div>

      <div className="chekcoutItem__right">
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} className="star">
                &#9733;
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </animated.div>
  );
};

export default CheckoutItem;
