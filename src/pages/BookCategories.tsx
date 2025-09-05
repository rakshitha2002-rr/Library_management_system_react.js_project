// src/pages/BookCategories.tsx

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";

// import images from assets
import novelImg from "../assets/categories/novel.jpg";
import dramaImg from "../assets/categories/drama.jpg";
import historyImg from "../assets/categories/history.jpg";
import scifiImg from "../assets/categories/scifi.jpg";

// static data (no backend)
const categoryData = [
  { name: "Novel", imageUrl: novelImg },
  { name: "Drama", imageUrl: dramaImg },
  { name: "History", imageUrl: historyImg },
  { name: "Sci-Fi", imageUrl: scifiImg },
];

const BookCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/books/${category}`);
  };

  return (
    <div className="container mx-auto">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col lg:w-2/4 mx-auto text-center my-14 md:my-16 px-3"
      >
        <h1 className="text-3xl font-bold mb-3 text-brandPrimary">
          Explore Our Book Categories
        </h1>
        <p className="text-base text-neutralGrey px-10">
          Dive into a world of knowledge and imagination. Explore our vast
          collection of books across various genres and find your next
          favorite read.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
        {categoryData.map((category) => (
          <motion.div
            key={category.name}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-center bg-base-100 shadow-xl border rounded-xl p-10 lg:py-16 lg:px-8 cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="h-72 md:h-60 lg:h-72 mx-auto border shadow-2xl mb-5 flex flex-col items-center">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="h-full w-48 object-cover"
              />
              <h3 className="text-xl text-brandSecondary font-bold mt-4 lg:mt-6">
                {category.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
