export default function Unit({ defaultValue, handleOnChange }) {
  return (
    <div className="relative">
      <select
        name="unit"
        id="unit"
        defaultValue={defaultValue}
        onChange={handleOnChange}
        className="w-full bg-transparent border border-primary focus:ring ring-accent focus:bg-background/50 py-1 px-2 text-lg outline-none appearance-none rounded transition-all"
      >
        {options?.map((option) => {
          return (
            <option
              key={option.value}
              value={`${option.unit}^${option.value}`}
              className="bg-background text-base"
            >
              {`${option.unit} - ${option.value}`}
            </option>
          );
        })}
      </select>
      <div className="absolute top-1/2 -translate-y-1/2 right-3">
        <i className="fa-solid fa-chevron-down text-text"></i>
      </div>
    </div>
  );
}

const options = [
  { value: "Piece", unit: "PC" },
  { value: "Packet", unit: "PKT" },
  { value: "Pair", unit: "PR" },
  { value: "Box", unit: "BX" },
  { value: "Gram", unit: "GR" },
  { value: "Kilogram", unit: "KG" },
  { value: "Mili Litter", unit: "ML" },
  { value: "Liter", unit: "LTR" },
  { value: "Dozen", unit: "DZ" },
  { value: "Roll", unit: "ROLL" },
  { value: "Bottle", unit: "BTL" },
  { value: "Unit", unit: "UNIT" },
  { value: "Carton", unit: "CTN" },
  { value: "Pound", unit: "LB" },
  { value: "Package", unit: "PKG" },
  { value: "Bag", unit: "BAG" },
  { value: "Set", unit: "SET" },
  { value: "Lot", unit: "LOT" },
  { value: "Bundle", unit: "BUNDLE" },
  { value: "Case", unit: "CASE" },
  { value: "Jar", unit: "JAR" },
  { value: "Tube", unit: "TUBE" },
  { value: "Can", unit: "CAN" },
  { value: "Pallet", unit: "PALLET" },
  { value: "Strip", unit: "STRIP" },
  { value: "Ream", unit: "REAM" },
  { value: "Gallon", unit: "GAL" },
];
