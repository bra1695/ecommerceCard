"use client";
import Image from "next/image";
import React, { useState } from "react";
import LinkApp from "./LinkApp";
import { useCartStore } from "../lib/store";

const Header = () => {
  const { quantity } = useCartStore();
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleCart = () => setShowCart(!showCart);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { name: "Collections", link: "#" },
    { name: "Men", link: "#" },
    { name: "Women", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <header className="relative flex justify-between items-center pt-2 pb-8 px-2 md:px-8 border-b-2 border-gray-200">
      {/* Left Section */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <Image
            src={"/images/icon-menu.svg"}
            alt="Menu"
            width={20}
            height={15}
            className="hover:opacity-80 transition-opacity"
          />
        </button>

        {/* Logo */}
        <Image
          src={"/images/logo.svg"}
          alt="Logo"
          width={150}
          height={25}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          priority
        />

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row gap-4">
          {links.map((item, index) => (
            <LinkApp key={index} name={item.name} link={item.link} />
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden">
          <div className="bg-white w-3/4 h-full p-6">
            <button
              className="mb-8"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <Image
                src={"/images/icon-close.svg"}
                alt="Close"
                width={20}
                height={15}
              />
            </button>
            <div className="flex flex-col gap-4">
              {links.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="font-bold text-lg hover:text-orange-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="flex flex-row gap-4 md:gap-8">
        <button
          className="mt-2 relative"
          onClick={toggleCart}
          aria-label="Open cart"
        >
          <Image
            src={"/images/icon-cart.svg"}
            alt="Cart"
            width={20}
            height={15}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          {quantity > 0 && (
            <span className="bg-orange-500 absolute text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1 -top-3 left-1.5">
              {quantity}
            </span>
          )}
          {showCart && (
            <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-4 w-64 z-50">
              <h3 className="font-bold pb-4 text-left border-b-2 border-gray-200">
                Cart
              </h3>
              <div className="py-4 text-gray-500 font-semibold">
                {quantity > 0 ? (
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                      <Image
                        src={"/images/image-product-1-thumbnail.jpg"}
                        alt="Product Thumbnail"
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <div className="flex flex-col gap-1 text-xs">
                        <span>Fall Limited Edition Sneakers</span>
                        <span>
                          $125.00 x {quantity} ${(125 * quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span>Your cart is empty</span>
                )}
              </div>
            </div>
          )}
        </button>

        <Image
          src={"/images/image-avatar.png"}
          alt="Avatar"
          width={35}
          height={35}
          className="cursor-pointer hover:opacity-80 transition-opacity rounded-full border-orange-500 border-2"
        />
      </div>
    </header>
  );
};

export default Header;