"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../utils/constant";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const pageCount = Math.ceil(count / PAGE_SIZE);
  const currentPage = Number(searchParams.get("page")) || 1;

  const updatePage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const nextPage = () => {
    if (currentPage < pageCount) {
      updatePage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  if (pageCount <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`rounded-md px-4 py-2 text-sm font-medium transition ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        <GrFormPrevious size={20} />
      </button>

      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          onClick={() => updatePage(index + 1)}
          disabled={currentPage === index + 1}
          className={`rounded-md px-4 py-2 text-sm font-medium transition ${
            currentPage === index + 1
              ? "cursor-not-allowed bg-blue-500 text-white"
              : "cursor-pointer bg-gray-100 text-black hover:bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className={`rounded-md px-4 py-2 text-sm font-medium transition ${
          currentPage === pageCount
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        <GrFormNext size={20} />
      </button>
    </div>
  );
}
