import ProductCard from "@/components/ProductCard";
import { polosCateg } from "@/utils/data";

function PolosPage() {
  return (
    <div>
      <div className="mt-3">
        <p className="text-3xl font-bold text-center">Polos</p>
        <div className="flex justify-around mt-6 flex-wrap">
          {polosCateg.map((prod, index) => {
            const { title, img, price } = prod;
            return (
              <ProductCard
                index={index}
                img={img}
                title={title}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PolosPage;
