function Input({ name, type, required, placeholder, label }) {
  return (
    <div className=" flex flex-col">
      <label className=" text-[#dc2626] xs:text-[.6rem] md:text-[.8rem] lg:text-[1rem]">*{label}</label>
      <input
        name={name}
        className="xl:p-3 xs:p-2 border text-[.6rem] rounded-md outline-none focus:scale-105 duration-300"
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
