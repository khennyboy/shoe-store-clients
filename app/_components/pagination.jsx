"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../utils/constant";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const pageCount = Math.ceil(count / PAGE_SIZE);
  let currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : (currentPage += 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : (currentPage -= 1);
    const params = new URLSearchParams(searchParams);
    params.set("page", prev);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handlePage(number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", number);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  if (pageCount <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-1">
      <button
        onClick={prevPage}
        disabled={currentPage == 1}
        className={`${currentPage == 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <GrFormPrevious />
        <span>Previous</span>
      </button>

      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          className={` ${Number(searchParams.get("page")) == index + 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => handlePage(index + 1)}
          disabled={Number(searchParams.get("page")) == index + 1}
        >
          {index + 1}{" "}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className={`${currentPage === pageCount ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <GrFormNext />
        <span>Next</span>
      </button>
    </div>
  );
}
