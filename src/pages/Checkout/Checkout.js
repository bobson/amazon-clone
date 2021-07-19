import CheckoutItem from "../../component/CheckoutItem/CheckoutItem";
import Subtotal from "../../component/Subtotal/Subtotal";
import { useStateValue } from "../../context/StateProvider";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { Product } from "../../component/Product/Product";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>

        {basket.length ? (
          <div className="items__container">
            {/* <FlipMove duration={750} typeName={null} easing="ease-out"> */}
            {basket.map((item, i) => (
              <CheckoutItem
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
            {/* </FlipMove> */}
          </div>
        ) : (
          <div className="checkout__empty">
            <h2>Your shopping bag is empty</h2>
            <Link to="/">
              <h3>Start shopping now</h3>
            </Link>
          </div>
        )}
      </div>
      {basket.length !== 0 ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : (
        <div className="checkout__right">
          <Product
            id="1234569"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={4}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
