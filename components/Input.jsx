

function Input(props) {
  const { itemLabel, placeholder, text } = props;
  return (
    <>
      <div className="flex justify-center items-center border py-4 rounded-lg">
        <div className=" p-2 ">
          <label htmlFor="">{itemLabel}</label>
          <div className="border p-2 rounded-lg shadow-inner">
            <input className="px-4" type="text" placeholder={placeholder} name="" id="" />
          </div>
          <p className="pt-1 text-gray-500">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Input;
