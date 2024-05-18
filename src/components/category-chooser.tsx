export function CategoryChooser() {
  return (
    <div className="flex w-full px-[2rem] items-center">
      {["Jackets", "Shoes", "Shirts", "Pants", "Hoodies"].map((category) => {
        return (
          <span
            key={category}
            className={`w-full mx-2 pt-4 pb-5 rounded-[2rem] text-center mt-[2rem] ${
              category === "Shirts"
                ? "bg-gray-300 text-5xl shadow-md"
                : "text-4xl"
            }`}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
}
