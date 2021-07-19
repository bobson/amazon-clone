import { useStateValue } from "../../context/StateProvider";
import "./Product.css";

export const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} className="star">
                &#9733;
              </span>
            ))}
        </div>
      </div>

      <img scr={image} alt="product" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};
