import ProductCard from "@/components/ProductCard";
import { shirtsCateg } from "@/utils/data";

function ShirtsPage() {
  return (
    <div>
      <div className="mt-3">
        <p className="text-3xl font-bold text-center">Shirts</p>
        <div className="flex justify-around mt-6 flex-wrap">
          {shirtsCateg.map((prod, index) => {
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
export default ShirtsPage;
