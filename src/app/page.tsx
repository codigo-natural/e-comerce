import { ProductList } from "app/components/ProductList";
import { Slider } from "app/components/Slider/indes";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Product</h1>
        <ProductList />
      </div>
    </main>
  );
}
