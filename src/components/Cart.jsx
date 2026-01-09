import { useDispatch, useSelector } from "react-redux";
import data from "../assets/data";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState.cart);

  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart?.length ? (
          cart.map((el) => (
            <CartItem
              key={`${el.id}-${idx}`}
              item={el}
              options={el.options}
              quantity={el.quantity}
              onDelete={() => dispatch(removeFromCart(idx))}
            />
          ))
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>
    </>
  );
}

function CartItem({ item, options, quantity, onDelete }) {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img height={100} src={item.img} alt={item.name} />
        <div>{item.name}</div>
      </div>

      <div className="cart-item-option">
        {Object.keys(options).map((el) => (
          <div key={key}>
            {el} : {data.options[key][options[key]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button className="cart-item-delete" onClick>
        삭제
      </button>
    </li>
  );
}
export default Cart;
