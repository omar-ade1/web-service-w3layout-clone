import React from "react";

function Map() {
  return (
    <div className="map py-[50px] dark:bg-[#222831]">
      <div className="container mx-auto smT0:px-5 px-3">
      <iframe className="w-full border-4 rounded dark:border-[#31363F]"
        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d215.84992167689103!2d31.23556899325637!3d30.048367425466207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d30.048481499999998!2d31.235451299999998!5e0!3m2!1sar!2ssa!4v1712027008590!5m2!1sar!2ssa"
        title="mapOfCompany"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
}

export default Map;
