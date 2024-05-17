import { ItemsList } from "./items-list";

export function FitBuilder() {
  return (
    <div className="mt-[2rem]">
      <div className="text-6xl text-black w-full text-center">
        Build your fit
      </div>
      <div>
        <ItemsList
          name="Shirts"
          itemImageIds={[
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b54ea6f0-11ca-482a-bb3c-d3aef040953f/miler-short-sleeve-running-top-mVBc7r.png",
          ]}
        />
      </div>
    </div>
  );
}
