import CircleChart from "@/pages/circle-chart";
import LineChart from "@/pages/line-chart";
import BarChart from "@/pages/bar-chart";
import Table from "@/pages/table";
import Card from "@/pages/card";
import { useContext } from "react";
import { DnDContext } from "@/DndContext";
import { useDrop } from "react-dnd";
import LineCard from "@/components/cards/LineCard";

const componentsMap: any = {
  "circle-chart": <CircleChart />,
  "line-chart": <LineChart />,
  "bar-chart": <BarChart />,
  table: <Table />,
  card: <Card />,
  "line-card": <LineCard />,
};

export default function Dashboard() {
  const { droppedComponents, setDroppedComponents } = useContext(DnDContext);

  const [, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item: { id: string; name: string }) => {
      setDroppedComponents((prev: any) => [...prev, item]);
    },
  }));

  return (
    <div ref={drop} className="flex-1 p-4 min-h-screen">
      <div className="flex flex-wrap gap-4">
        {droppedComponents.map((comp: any, index: number) => (
          <div key={index}>{componentsMap[comp.id]}</div>
        ))}
      </div>
    </div>
  );
}
