import CartContext from "./cart-context";
const addItemToCartHandler = (item) => {};

const removeItemFromCartHandler = (id) => {};

const cartContext = {
  items: [],
  totalAmound: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler,
};

const CartProvider = (props) => {
  return <CartContext value={cartContext}>{props.children}</CartContext>;
};

export default CartProvider;
