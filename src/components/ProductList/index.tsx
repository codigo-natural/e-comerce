import Image from "next/image";
import Link from "next/link";

export const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-lucid py-2 px-4 text-xs hover:bg-lucid hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-lucid py-2 px-4 text-xs hover:bg-lucid hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-lucid py-2 px-4 text-xs hover:bg-lucid hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ring-1 ring-lucid py-2 px-4 text-xs hover:bg-lucid hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};