import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import React from "react";

const LineCard = () => {
  const [progress, setProgress] = React.useState(13);
  return (
    <Card className=" text-white pt-3 rounded-2xl w-full max-w-sm border border-sidebar-border">
      <CardContent className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Range card</span>
        </div>
        <h2 className="text-3xl font-bold text-black">{progress}%</h2>
        <Progress value={progress} />
        <p className="text-sm text-gray-400">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
};

export default LineCard;
