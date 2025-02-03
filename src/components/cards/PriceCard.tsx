import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function PriceCard() {
  return (
    <Card className="text-white pt-3 rounded-2xl w-full max-w-sm border border-sidebar-border">
      <CardContent className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Total Revenue</span>
          <DollarSign className="text-gray-500 w-4 h-4" />
        </div>
        <h2 className="text-3xl font-bold text-black">$45,231.89</h2>
        <p className="text-sm text-gray-400">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
