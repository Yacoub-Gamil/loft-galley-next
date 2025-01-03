"use cleint";
import Input from "./Input";
import { orderAction } from "@/app/_lib/actions";
import useStoreContext from "@/app/_context/ContextStore";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

function FormOrder({ totalPrice }) {
  const { state, dispatch } = useStoreContext();
  const ids = state.map((item) => item.id).join(",");
  async function handleOrder(formData) {
    const data = await orderAction(formData);
    if (data?.error) {
      toast.error(data.error);
    } else {
      toast.success("Order Added");
      dispatch({ type: "clearCart" });
    }
  }

  return (
    <form action={handleOrder} className="w-full flex flex-col xl:gap-6 p-8">
      <Input name="email" type="email" placeholder="Email" required={true} />
      <div className=" grid xl:grid-cols-2 gap-6">
        <Input
          name="firstName"
          type="text"
          placeholder="First Name"
          required={true}
        />
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          required={true}
        />
      </div>
      <Input name="address" type="text" placeholder="Address" required={true} />
      <div className=" grid xl:grid-cols-2 gap-6">
        <Input name="city" type="text" placeholder="City" required={true} />

        <Input
          name="phoneNumber"
          type="number"
          placeholder="Phone Number"
          required={true}
          label=" make sure to provide your phone number"
        />
      </div>
      <div className=" flex justify-center flex-col items-center gap-8 mt-8">
        <div className=" border p-7 flex flex-col gap-5">
          <h1>
            Delivery Fees <strong>(700) LE</strong>{" "}
          </h1>
          <h1>
            Total Price Is <strong>( {+totalPrice + 700}) EL</strong>
          </h1>
        </div>
        <input name="ids" type="hidden" value={ids} />
        <input name="totalPrice" type="hidden" value="700" />
        <SubmitButton />
      </div>
    </form>
  );
}
export default FormOrder;
