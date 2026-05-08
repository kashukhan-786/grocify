// import { categories } from "../assets/assets";
// import { useAppContext } from "../context/appContext";
// const Category = () => {
//   const { navigate } = useAppContext();
//   return (
//     <div className="mt-16">
//       <p className="text-2xl md:text-3xl font-medium">Categories</p>
//       <div className=" my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-center">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className={`group cursor-pointer py-5 px-3 rounded-lg gap-2 flex flex-col items-center justify-center`}
//             style={{ backgroundColor: category.bgColor }}
//             onClick={() => {
//               navigate(`/products/${category.path.toLowerCase()}`);
//               scrollTo(0, 0);
//             }}
//           >
//             <img
//               src={category.image}
//               alt=""
//               className="max-w-28 transition group-hover:scale-110"
//             />
//             <p className="text-sm font-medium">{category.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Category;
// import { categories } from "../assets/assets";
// import { useAppContext } from "../context/appContext";

// const Category = () => {
//   const { navigate } = useAppContext();

//   return (
//     <div className="mt-16">
//       <p className="text-2xl md:text-3xl font-medium text-center md:text-left">
//         Categories
//       </p>

//       <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-center">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="group cursor-pointer py-6 px-4 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
//             style={{ backgroundColor: category.bgColor }}
//             onClick={() => {
//               navigate(`/products/${category.path.toLowerCase()}`);
//               scrollTo(0, 0);
//             }}
//           >
//             <div className="mb-4">
//               <img
//                 src={category.image}
//                 alt={category.text}
//                 className="max-w-28 h-28 object-contain transition group-hover:scale-110"
//                 onError={(e) => {
//                   e.target.src = "https://via.placeholder.com/120?text=Image";
//                   console.log("Failed to load:", category.text);
//                 }}
//               />
//             </div>
//             <p className="text-sm font-medium text-center text-gray-700">
//               {category.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;
import { categories } from "../assets/assets";
import { useAppContext } from "../context/appContext";

const Category = () => {
  const { navigate } = useAppContext();

  console.log("Categories loaded:", categories.length); // For debugging

  return (
    <div className="mt-16">
      <p className="text-3xl font-medium mb-6">Categories</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer p-6 rounded-2xl flex flex-col items-center justify-center hover:shadow-xl transition"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => navigate(`/products/${category.path.toLowerCase()}`)}
          >
            <img
              src={category.image}
              alt={category.text}
              className="w-28 h-28 object-contain mb-3"
              onError={(e) => {
                console.error("Image failed:", category.text);
                e.target.src = "https://via.placeholder.com/120?text=No+Image";
              }}
            />
            <p className="font-medium text-center">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;