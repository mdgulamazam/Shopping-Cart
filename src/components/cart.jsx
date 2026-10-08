import { useDispatch, useSelector } from "react-redux";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../redux/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    // Total items
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="mt-10 border-t pt-6">

            <h2 className="text-2xl font-bold mb-6">
                Shopping Cart
            </h2>

            {cartItems.length === 0 ? (

                <p className="text-gray-500">
                    Your cart is empty.
                </p>

            ) : (

                <div>

                    {cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="border border-gray-300 rounded-lg p-4 mb-4"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="text-lg font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500">
                                        ${item.price}
                                    </p>

                                </div>

                                <button
                                    onClick={() =>
                                        dispatch(removeFromCart(item.id))
                                    }
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>

                            </div>

                            <div className="flex items-center gap-4 mt-4">

                                <button
                                    onClick={() =>
                                        dispatch(decreaseQuantity(item.id))
                                    }
                                    className="bg-gray-200 px-3 py-1 rounded"
                                >
                                    -
                                </button>

                                <span className="font-bold">
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        dispatch(increaseQuantity(item.id))
                                    }
                                    className="bg-gray-200 px-3 py-1 rounded"
                                >
                                    +
                                </button>

                            </div>

                            <p className="mt-3 font-semibold">
                                Subtotal: $
                                {(item.price * item.quantity).toFixed(2)}
                            </p>

                        </div>

                    ))}

                    <div className="border-t pt-4">

                        <p className="text-lg font-semibold">
                            Total Items: {totalItems}
                        </p>

                        <p className="text-xl font-bold mt-2">
                            Total Price: ${totalPrice.toFixed(2)}
                        </p>

                    </div>

                </div>

            )}

        </div>
    );
};

export default Cart;