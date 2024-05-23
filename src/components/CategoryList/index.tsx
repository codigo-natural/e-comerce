import Image from "next/image"
import Link from "next/link"

export const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
          <Image
            src="https://images.pexels.com/photos/23731719/pexels-photo-23731719/free-photo-of-amanecer-cafeina-cafe-taza.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  )
}