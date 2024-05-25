"use client";

import { products } from "@wix/stores";
import { Add } from "../Add";
import { useEffect, useState } from "react";

// The CustomizeProducts component allows users to select product options and variants
// It takes in a productId, variants, and productOptions as props
export const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  // State to keep track of selected options for the product
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  // State to keep track of the currently selected variant based on selected options
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  // Effect to update the selected variant whenever the selected options change
  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  // Handler for selecting an option for a product
  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  // Function to check if a variant is in stock based on the selected choices
  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              // Determine if the current choice is disabled based on stock availability
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              // Determine if the current choice is selected
              const selected =
                selectedOptions[option.name!] === choice.description;

              // Click handler for selecting an option
              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
      {/* 
        // Example color options for the product
        <ul className="flex items-center gap-3">
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
        </ul>
      */}
      {/* 
        // Example size options for the product
        <h4 className="font-medium">Choose a size</h4>
        <ul className="flex items-center gap-3">
          <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
            Small
          </li>
          <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">
            Medium
          </li>
          <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
            Large
          </li>
        </ul>
      */}
    </div>
  );
};
