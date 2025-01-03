import FormOrder from "./FormOrder";

function Modal({ setShowModal, totalPrice }) {
  return (
    <div id="modle" className=" w-[90%] mx-auto bg-white xs:p-3 xl:p-8 rounded-md ">
      <div className=" flex justify-end">
        <button
          onClick={() => setShowModal(false)}
          className=" xl:mb-6 border px-4 py-1 border-[#dc2626] xs:text-[.6rem] xl:text-[1rem]"
        >
          <span className=" text-[#dc2626]">X</span> Close
        </button>
      </div>
      <FormOrder totalPrice={totalPrice} />
    </div>
  );
}

export default Modal;
