export const ShippingForm = ({ provinces, selectedProvince, handleProvinceChange }) => {
  return (
    <div>
      <label htmlFor="province">Calcular Envio</label>
      <select
        id="province"
        value={selectedProvince}
        onChange={handleProvinceChange}
      >
        <option value="">Codigo Postal</option>
        {provinces.map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>
    </div>
  );
};