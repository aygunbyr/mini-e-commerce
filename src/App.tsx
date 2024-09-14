import Cart from "./components/Cart";
import List from "./components/List";

export default function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">E-Commerce App</h1>
      <Cart />
      <List />
    </div>
  );
}

