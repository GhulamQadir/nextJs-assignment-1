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
              <div key={index} className="my-3 shadow-xl">
                <img src={img} className="h-96 w-80 object-cover" />
                <div className="p-2">
                  <p className="text-ms text-gray-700 font-medium">{title}</p>
                  <p className=" text-md font-bold">Rs.{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PantsPage;
