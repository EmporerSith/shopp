import React from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarker } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-[14px] w-[155px] inline-flex gap-1.5">
            <FaMapMarker />
            <small>Kota Bogor, Jawa Barat.</small>
          </div>
          <div className="hidden lg:flex gap-2 pl-7">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
