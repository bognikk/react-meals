import { useContext } from "react";
import CartContext from "../../store/cart-context.js";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.jsx";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
