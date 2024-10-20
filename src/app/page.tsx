import { featuredProducts } from "@/utils/data";

export default function Home() {
  return (
    <div className="">
      <div>
        <img
          src="/assets/banner.jpeg"
          style={{ height: "600px", width: "100%" }}
        />
        <div className="mt-7">
          <p className="text-3xl font-bold text-center">Featured Products</p>
          <div className="flex justify-around mt-6 flex-wrap">
            {featuredProducts.map((prod, index) => {
              const { title, img, price } = prod;
              return (
                <div key={index} className="my-4 shadow-xl">
                  <img src={img} className="h-96 w-80" />
                  <div className="p-2">
                    <p className="text-lg text-gray-700 font-medium">{title}</p>
                    <p className=" text-md font-bold">Rs.{price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
