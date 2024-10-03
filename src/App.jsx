import Input from "../components/Input";
import Pricing from "../components/Pricing";

export default function App() {
  return (
    <>
      <div className="p-2">
        <Pricing itemLabel="Price" placeholder="0.00" currency="$" />
        <Pricing itemLabel="Currency In EUR" placeholder="0.00" currency="Eur" />
        <Input itemLabel="Email" placeholder="you@example.com" text="We'll only use this for spam"/>
      </div>
    </>
  );
}
