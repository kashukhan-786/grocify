import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/appContext";

const Products = () => {
  const { products, searchQuery } = useAppContext();
  const { category } = useParams();   // This gets "vegetables", "fruits", etc.

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let result = products;

    // Filter by category if present in URL
    if (category) {
      result = result.filter(
        (product) => 
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery?.length > 0) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [products, searchQuery, category]);

  return (
    <div className="mt-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl lg:text-4xl font-medium capitalize">
          {category ? category : "All Products"}
        </h1>
        <p className="text-gray-500 mt-2 sm:mt-0">
          {filteredProducts.length} items
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">
            No products found {category && `in ${category}`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts
            .filter((product) => product.inStock)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;