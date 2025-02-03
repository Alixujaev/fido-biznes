import { DollarSign } from "lucide-react";
import { Resizable } from "re-resizable";

export default function PriceCard() {
  return (
    <Resizable
      defaultSize={{ width: 200, height: 120 }}
      minHeight={120}
      minWidth={200}
      maxHeight={400}
      maxWidth={800}
      className="text-white p-3 rounded-2xl w-full max-w-sm border border-sidebar-border flex flex-col justify-between"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Total Revenue</span>
        <DollarSign className="text-gray-500 w-4 h-4" />
      </div>
      <h2 className="text-3xl font-bold text-black">$45,231.89</h2>
      <p className="text-sm text-gray-400">+20.1% from last month</p>
    </Resizable>
  );
}
