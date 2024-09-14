import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import { useCart } from "../store/useCart";

export default function List() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { add } = useCart();

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">Product List</h2>
      <ul className="list-disc">
        {data?.map((product) => (
          <li key={product.id} className="mb-1">
            <span>{product.title}</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-1 mx-1 rounded"
              onClick={() => add(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
