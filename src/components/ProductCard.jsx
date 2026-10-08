import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm">

            <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover rounded-md"
            />

            <div className="mt-4">

                <p className="text-sm text-gray-500">
                    {product.category}
                </p>

                <h2 className="text-xl font-bold mt-1">
                    {product.title}
                </h2>

                <p className="text-lg font-semibold text-blue-600 mt-2">
                    ${product.price}
                </p>

                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
};

export default ProductCard;