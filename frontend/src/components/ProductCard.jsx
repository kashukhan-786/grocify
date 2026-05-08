import { assets } from "../assets/assets";
import { useAppContext } from "../context/appContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  // Get the first image (it's already imported in assets.js)
  const productImage = Array.isArray(product?.image) 
    ? product.image[0] 
    : product?.image;

  return (
    product && (
      <div
        onClick={() => {
          navigate(`/product/${product.category.toLowerCase()}/${product?._id}`);
          scrollTo(0, 0);
        }}
        className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full cursor-pointer hover:shadow-lg transition"
      >
        <div className="group flex items-center justify-center px-2 py-4">
          <img
            className="group-hover:scale-105 transition duration-300 max-w-28 md:max-w-36 h-40 object-contain"
            src={productImage}
            alt={product.name}
            onError={(e) => {
              e.target.src = assets.logo || "https://via.placeholder.com/150";
            }}
          />
        </div>

        <div className="text-gray-500/60 text-sm">
          <p className="uppercase text-xs tracking-widest">{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full mt-1">
            {product.name}
          </p>

          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="rating"
                  className="w-3 md:w-3.5"
                />
              ))}
            <p className="text-xs text-gray-400 ml-1">(4)</p>
          </div>

          <div className="flex items-end justify-between mt-4">
            <p className="md:text-xl text-base font-medium text-indigo-600">
              ${product.offerPrice}{" "}
              <span className="text-gray-400 text-sm line-through">
                ${product.price}
              </span>
            </p>

            <div
              onClick={(e) => e.stopPropagation()}
              className="text-indigo-500"
            >
              {!cartItems?.[product?._id] ? (
                <button
                  onClick={() => addToCart(product?._id)}
                  className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium hover:bg-indigo-200 transition"
                >
                  <img src={assets.cart_icon} alt="cart" className="w-4" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                  <button
                    onClick={() => removeFromCart(product?._id)}
                    className="cursor-pointer text-lg px-2 h-full hover:text-indigo-700"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-medium">
                    {cartItems[product?._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product?._id)}
                    className="cursor-pointer text-lg px-2 h-full hover:text-indigo-700"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;