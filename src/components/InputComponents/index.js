// This component is used for design input fields
export default function InputComponent({
  label,
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <div className="relative">
      <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-blak-600 bg-opacity-600 backdrop-blur-el bg-black rounded-md ">
        {label}
      </p>
      <input
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="border text-black placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
      />
    </div>
  );
}
