"use client";
import Image from "next/image";
import Pagination from "./_components/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "./utils/constant";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  let currentPage = searchParams.get("page") ?? 1;

  const products = Array.from({ length: 100 }, (_, index) => index);

  const pageCount = Math.ceil(products.length / PAGE_SIZE);

  useEffect(() => {
    if (Number(currentPage) > pageCount) {
      currentPage = pageCount;
      const params = new URLSearchParams(searchParams);
      params.set("page", currentPage);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (Number(currentPage) <= 0) {
      currentPage = 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", 1);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, []);

  const arr = products.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <div className="bg-gray-100 px-2 py-12 md:px-4 lg:py-16">
      <div className="grid gap-x-3 gap-y-10 sm2:grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-y-14">
        {arr.map((each, index) => (
          <div
            key={index}
            className="cursor-pointer space-y-4 rounded-md px-4 py-8 shadow-sm2 shadow-gray-300"
          >
            <div className="relative mx-auto h-60">
              <Image
                src="/image-product-2.jpg"
                alt="product-image"
                fill
                className="cursor-zoom-in object-cover"
              />
            </div>

            <div className="">
              <span className="block text-base leading-normal text-gray-800 sm:text-lg md:font-medium">
                Adidas{each}
              </span>
              <span className="block leading-tight">₦132,785</span>
              <div className="flex items-center justify-between">
                <span className="text-sm line-through">$250,000</span>
                <span className="bg-PaleOrange px-[6px] py-[2px] text-sm font-semibold text-DarkOrange">
                  -47%
                </span>
              </div>
            </div>
            <div>
              <button className="flex w-full items-center justify-center gap-3 rounded-md bg-DarkOrange py-3 text-center font-medium text-white transition-all duration-200 ease-linear hover:bg-DarkOrange/80 sm:font-bold">
                <img
                  src="/icon-cart.svg"
                  alt="cart-icon "
                  className="hidden sm:block"
                />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* this improves when the user input the page manually */}
      {arr.length !== 0 && <Pagination count={products.length} />}
    </div>
  );
}
