import { useCart } from "../store/useCart";

export default function Cart() {
  const { products, increaseQuantity, decreaseQuantity, remove } = useCart();

  return (
    <div>
      <h2 className="text-xl font-semibold">Cart</h2>
      {products.length === 0 && <p>Your cart is empty.</p>}
      <ul className="list-disc">
        {products.map((product) => (
          <li key={product.id} className="mb-1">
            <span>{product.title} </span>
            <span>(Quantity: {product.quantity}) </span>
            <button
              className="bg-green-500 hover:bg-green-700 text-white px-1 mx-1 rounded"
              onClick={() => increaseQuantity(product.id)}
            >
              Increase Qty.
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white px-1 mx-1 rounded"
              onClick={() => decreaseQuantity(product.id)}
            >
              Decrease Qty.
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-1 mx-1 rounded"
              onClick={() => remove(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
