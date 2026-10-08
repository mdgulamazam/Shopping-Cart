import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6 text-center bg-green-600 rounded-lg w-1/2 mx-auto text-white p-2">
        Welcome to Shopping Cart
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Cart />

    </div>
  );
}

export default App;