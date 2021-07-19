import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

import "./Subtotal.css";

const Subtitle = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtitle ({basket?.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={() => history.push("/payment")}
        disabled={!basket.length}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtitle;
