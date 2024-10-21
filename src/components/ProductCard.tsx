type PropsType = {
  img: string;
  title: string;
  price: number;
};
function ProductCard(props: PropsType) {
  const { img, title, price } = props;
  return (
    <div className="my-3 shadow-xl hover:opacity-45">
      <img src={img} className="h-96 w-80 object-cover" />
      <div className="p-2">
        <p className="text-md text-gray-700 font-medium">{title}</p>
        <p className=" text-md font-bold">Rs.{price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
