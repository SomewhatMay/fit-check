interface props {
  name: string;
  itemImageIds: string[];
}

export function ItemsList({ name, itemImageIds }: props) {
  return (
    <div className="px-[2rem]">
      <div className="text-3xl">{name}</div>
      <div className="grid grid-flow-col auto-cols-[17%] gap-[1.5rem] overflow-x-auto pb-[3rem] overscroll-x-contain">
        {itemImageIds.map((imageId) => (
          <button
            key={imageId}
            className="inline-block h-full aspect-square"
          >
            <img
              src={imageId}
              alt="item"
              className="h-full rounded-[2rem] mt-5 inline-block object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
