import gamersImg from "../../assets/images/hero/gamers.jpg";
import { Product } from "../../component/Product/Product";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={gamersImg} alt="hero" className="home__image" />
        <div className="home__row">
          <Product
            id="1234567"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image={gamersImg}
            rating={4}
          />
          <Product
            id="1234568"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234569"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={4}
          />
          <Product
            id="12345610"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={4}
          />
          <Product
            id="12345611"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345612"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
