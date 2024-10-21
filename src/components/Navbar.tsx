import Link from "next/link";

function Navbar() {
  return (
    <div className="shadow-xl p-3 flex justify-between sticky top-0 bg-white">
      <p className="text-2xl font-bold">Switch Attire</p>
      <div className="flex justify-around">
        <Link className="mx-4 hover:font-bold" href="/">
          New & Featured
        </Link>
        <Link className="mx-4 hover:font-bold" href="/categories/tshirts">
          T-Shirts
        </Link>
        <Link className="mx-4 hover:font-bold" href="/categories/shirts">
          Shirts
        </Link>
        <Link className="mx-4 hover:font-bold" href="/categories/pants">
          Pants
        </Link>

        <Link className="mx-4 hover:font-bold" href="/categories/polos">
          Polos
        </Link>
        <Link className="mx-4 hover:font-bold" href="/categories/accessories">
          Accessories
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
