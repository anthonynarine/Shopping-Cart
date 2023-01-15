import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/cart/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <hr />
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch(openModal())}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;

//againg we use useSelector to access our entire store. 
//we accessed cart which holds the states amount, total 
//and the array of items from cartItems.
//we then check if the cart has less then one item if it does
//we display a message. if it dosen't the items are displayed 
//by iterating over using the map function. 

// toFixed(2) will leave just 2 decimal place for the cart total
