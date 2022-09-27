import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { MdAirlineSeatFlatAngled } from "react-icons/md";

const CartItem = ({ item, flag, setFlag }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const [items, setItems] = useState([]);
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1)
        }
    });
    cartDispatch();
} else {
    if (qty === 1) {
        setItems(cartItems.filter((item) => item.id !== id));
        cartDispatch();
    } else {
        setQty(qty - 1);
        cartItems.map((item) => {
            if (item.id === id) {
                item.qty -= 1;
                setFlag(flag - 1)
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  return (
    <div
      className="w-full p-1 rounded-lg bg-cartItem flex items-center gap-2"
    >
      <img
        src={item?.imageURL}
        alt=""
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>
      {/* button section */}
      <div className="ggroup flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          onClick={() => updateQty("remove", item?.id)}
          whileTap={{ scale: 0.75 }}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          onClick={() => updateQty("add", item?.id)}
          whileTap={{ scale: 0.75 }}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
