import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
          >
            {/* Product Image */}
            <div className="relative h-48">
              <Image
                src="/image-avatar.png"
                alt="product-image"
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <span className="block text-lg font-semibold text-gray-800">
                Adidas
              </span>
              <span className="block text-lg font-bold text-orange-500">
                ₦132,785
              </span>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-500 line-through">
                  ₦250,000
                </span>
                <span className="text-sm font-semibold text-green-500">
                  -47%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
