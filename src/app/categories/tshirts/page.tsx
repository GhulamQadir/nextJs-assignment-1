import ProductCard from "@/components/ProductCard";
import { tshirtsCateg } from "@/utils/data";

function TShirtsPage() {
  return (
    <div>
      <div className="mt-3">
        <p className="text-3xl font-bold text-center">T-Shirts</p>
        <div className="flex justify-around mt-6 flex-wrap">
          {tshirtsCateg.map((prod, index) => {
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
  );
}
export default TShirtsPage;
