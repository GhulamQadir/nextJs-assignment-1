import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/utils/data";

export default function Home() {
  return (
    <div>
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
                <div key={index}>
                  <ProductCard img={img} title={title} price={price} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
