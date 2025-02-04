import { Resizable } from "re-resizable";
import { Progress } from "../ui/progress";
import React, { useContext } from "react";
import { handleResize } from "@/lib/utils";
import { DnDContext } from "@/DndContext";

const LineCard = ({
  id,
  width,
  height,
}: {
  id?: string;
  width?: number;
  height?: number;
}) => {
  const { setDroppedComponents } = useContext(DnDContext);
  const [progress, _] = React.useState(13);
  return (
    <Resizable
      defaultSize={{
        width: width && width > 0 ? width : 200,
        height: height && height > 0 ? height : 120,
      }}
      minHeight={120}
      minWidth={200}
      maxHeight={400}
      maxWidth={800}
      onResize={(e, direction, ref, d) =>
        handleResize(
          {
            width: d.width + 200,
            height: d.height + 120,
          },
          setDroppedComponents,
          id
        )
      }
      className="bg-sidebar text-white p-3 rounded-2xl w-full max-w-sm border border-sidebar-border flex flex-col justify-between"
    >
      <h2 className="text-3xl font-bold text-black">{progress}%</h2>
      <Progress value={progress} />
      <p className="text-sm text-gray-400">+20.1% from last month</p>
    </Resizable>
  );
};

export default LineCard;
