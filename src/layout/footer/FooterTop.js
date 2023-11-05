import React from "react";
import Link from "next/link";
import Image from "next/image";

//internal import
import useGetSetting from "@hooks/useGetSetting";
import CMSkeleton from "@component/preloader/CMSkeleton";

const FooterTop = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();

  return (
    <section>
  <div className="bg-[#096A00] text-white py-8 px-10 relative">
    <h2 className="font-inter md:text-2xl lg:text-3xl mb-4 pl-3">
      We offer discounts for bulk purchases
    </h2>
    <p className="text-base md:text lg:text-sm mb-4 pl-3 font-inter">
      Call us for a quote or advice on <strong>1234567890</strong> or{' '}
      <strong>1234567890</strong> Or email admin@nexting.com
    </p>
    <div className="absolute top-0 right-0 mt-[55px] mr-20">
      <button className="bg-white py-2 px-6 text-black rounded-full hover:bg-gray-200">
        Contact Us
      </button>
    </div>
  </div>
</section>

  );
};

export default FooterTop;
