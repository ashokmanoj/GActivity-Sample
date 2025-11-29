import { FiChevronDown } from "react-icons/fi";

export default function Dropdown({ value, onChange, options, width }) {
  return (
    <div className={`relative ${width}`}>
      <select
        className="appearance-none bg-white px-4 py-2 rounded-full border outline-none shadow-sm w-full cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>

      <FiChevronDown className="absolute right-4 top-3 text-gray-500" />
    </div>
  );
}
