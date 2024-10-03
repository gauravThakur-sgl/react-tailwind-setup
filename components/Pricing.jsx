function Pricing(props) {
    const {itemLabel, placeholder, currency}= props
  return (
    <>
      <div className="flex justify-center items-center border py-4 rounded-lg">
        <div className=" p-2 ">
          <label htmlFor="">{itemLabel}</label>
          <div className="border p-2 rounded-lg shadow-inner">
            <span className="p-2 text-gray-500 pointer-events-none">{currency}</span>
            <input type="text" placeholder={placeholder} name="" id=""/>
            <select name="Currency" id="" className="bg-white">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
