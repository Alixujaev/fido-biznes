import { Resizable } from "re-resizable";
import { Progress } from "../ui/progress";
import React from "react";

const LineCard = () => {
  const [progress, setProgress] = React.useState(13);
  return (
    <Resizable
      defaultSize={{ width: 200, height: 120 }}
      minHeight={120}
      minWidth={200}
      maxHeight={400}
      maxWidth={800}
      className=" text-white p-3 rounded-2xl w-full max-w-sm border border-sidebar-border flex flex-col justify-between"
    >
      <h2 className="text-3xl font-bold text-black">{progress}%</h2>
      <Progress value={progress} />
      <p className="text-sm text-gray-400">+20.1% from last month</p>
    </Resizable>
  );
};

export default LineCard;
