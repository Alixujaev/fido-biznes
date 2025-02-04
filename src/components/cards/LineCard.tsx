import { Resizable } from "re-resizable";
import { Progress } from "../ui/progress";
import { useContext, useRef, useState } from "react";
import { DnDContext } from "@/DndContext";
import { handleResize } from "@/lib/utils";

const LineCard = ({
  id,
  width,
  height,
}: {
  id?: string;
  width?: number;
  height?: number;
}) => {
  const ref = useRef<any>(null);
  const { setDroppedComponents } = useContext(DnDContext);
  const [progress, _] = useState<number>(13);

  return (
    <Resizable
      defaultSize={{
        width: width ? width : 200,
        height: height ? height : 120,
      }}
      minHeight={120}
      minWidth={200}
      onResize={() => handleResize(ref, setDroppedComponents, id)}
      ref={ref}
      className="bg-sidebar text-white p-3 rounded-2xl w-full max-w-sm border border-sidebar-border flex flex-col justify-between"
    >
      <h2 className="text-3xl font-bold text-black">{progress}%</h2>
      <Progress value={progress} />
      <p className="text-sm text-gray-400">+20.1% from last month</p>
    </Resizable>
  );
};

export default LineCard;
