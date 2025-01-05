import Image from "next/image";

export default function Cart() {
  return (
    <div className="opacity-80 transition-all duration-200 ease-linear hover:opacity-100">
      <Image
        src="/icon-cart.svg"
        width={25}
        height={20}
        alt="cart-icon"
        className="cursor-pointer object-contain"
        unoptimized
      />
    </div>
  );
}
