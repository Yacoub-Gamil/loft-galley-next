function Input({ type, required, placeholder }) {
  return (
    <input
      className="p-3 border rounded-md outline-none focus:scale-105 duration-300"
      type={type}
      required={required}
      placeholder={placeholder}
    />
  );
}

export default Input;
