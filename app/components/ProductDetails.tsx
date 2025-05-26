import Image from "next/image";
import React from "react";
import { useCartStore } from "@/app/lib/store";

const ProductDetails = () => {
  // @ts-ignore
  const { quantity, incrementQuantity, decrementQuantity } = useCartStore();

  return (
    <div className="flex flex-col gap-4 mt-4 p-8">
      <h1 className="text-xl font-bold mb-2 text-gray-600 uppercase">
        Sneaker company
      </h1>

      <h2 className="text-4xl font-bold mb-2">Fall Limited Edition Sneakers</h2>

      <p className="text-gray-600 text-sm mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        <br />
        Featuring a durable rubber outer sole, they’ll withstand everything the
        <br />
        weather can offer.
      </p>

      <div className="flex flex-row mb-4 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-black">$125.00</span>
          <span className="text-sm line-through text-gray-500">$250.00</span>
        </div>
        <div>
          <span className="bg-black text-white px-2 py-1 rounded-md text-xs mt-1 font-bold">
            50%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 flex items-center justify-between bg-gray-200 rounded-lg">
          <button
            onClick={decrementQuantity}
            className="px-4 py-3 text-gray-800 hover:text-orange-500 transition-colors"
          >
            <Image
              src="/images/icon-minus.svg"
              alt="Decrease quantity"
              width={12}
              height={4}
            />
          </button>
          
          <span className="font-bold">{quantity}</span>
          
          <button
            onClick={incrementQuantity}
            className="px-4 py-3 text-gray-800 hover:text-orange-500 transition-colors"
          >
            <Image
              src="/images/icon-plus.svg"
              alt="Increase quantity"
              width={12}
              height={12}
            />
          </button>
        </div>

        <button className="col-span-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors flex justify-center items-center gap-2">
          <Image
            src="/images/icon-cart.svg"
            alt="Cart icon"
            width={20}
            height={20}
            className="filter brightness-0 invert"
          />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;