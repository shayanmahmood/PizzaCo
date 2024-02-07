import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getQauantyinCart, getTotalCartQuantity } from "./CartSlice";
import DeleteCart from "./DeleteCart";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const getItemQuantityinCart = useSelector(getQauantyinCart(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} quanity={getItemQuantityinCart} />
        <DeleteCart pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
