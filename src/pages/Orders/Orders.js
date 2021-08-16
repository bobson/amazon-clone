import { useState, useEffect } from "react";
import Order from "../../component/Order/Order";
import { useStateValue } from "../../context/StateProvider";
import { db } from "../../firebase";

import "./Orders.css";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else setOrders([]);
    return () => {
      setOrders([]);
    };
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="oreders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
