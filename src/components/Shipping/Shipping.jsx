import React, { useState } from "react";
import { ShippingForm } from "../ShippingForm/ShippingForm";

export const Shipping = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [shippingPrice, setShippingPrice] = useState(500);

  const provinceDistances = {
    3400: 0,
  };

  const handleProvinceChange = (event) => {
    const province = event.target.value;
    setSelectedProvince(province);
    calculateShippingPrice(province);
  };

  const calculateShippingPrice = (province) => {
    const distance = provinceDistances[province.toLowerCase()] || 0;
    const additionalPrice = Math.floor(distance / 100) * 500;
    setShippingPrice(500 + additionalPrice);
  };

  const provinces = Object.keys(provinceDistances);
  return (
    <div>
      <ShippingForm
        provinces={provinces}
        selectedProvince={selectedProvince}
        handleProvinceChange={handleProvinceChange}
      />
      {selectedProvince && (
        <div>
          <p>Costo Envio a Cotr ${shippingPrice}</p>
        </div>
      )}
    </div>
  );
};