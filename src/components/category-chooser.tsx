export function CategoryChooser() {
  return (
    <div className="flex w-full px-[2rem] items-center">
      {["Hoodies", "Shirts", "All", "Pants", "Shoes"].map((category) => {
        return (
          <span
            key={category}
            className={`select-none w-full mx-2 py-2 rounded-[2rem] text-center mt-[1rem] ${
              category === "All"
                ? "bg-gray-300 text-[2.75rem] shadow-md"
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
