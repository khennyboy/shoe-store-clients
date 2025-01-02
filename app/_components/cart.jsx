import Image from "next/image";
import cart from "@/public/icon-cart.svg";

export default function Cart() {
  return (
    <div>
      <Image src={cart} alt="cart-icon" className="cursor-pointer" />
    </div>
  );
}
