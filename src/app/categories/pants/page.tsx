import ProductCard from "@/components/ProductCard";
import { pantsCateg } from "@/utils/data";

function PantsPage() {
  return (
    <div>
      <div className="mt-3">
        <p className="text-3xl font-bold text-center">Pants</p>
        <div className="flex justify-around mt-6 flex-wrap">
          {pantsCateg.map((prod, index) => {
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
export default PantsPage;
