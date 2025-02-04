import { useDrop } from "react-dnd";
import { useContext } from "react";
import CircleChart from "@/pages/circle-chart";
import LineChart from "@/pages/line-chart";
import BarChart from "@/pages/bar-chart";
import Table from "@/pages/table";
import Card from "@/pages/card";
import { DnDContext } from "@/DndContext";
import DraggableComponent from "@/components/DashboardDraggableComp";
import LineCard from "./line-card";

const componentsMap: any = {
  "circle-chart": <CircleChart />,
  "line-chart": <LineChart />,
  "bar-chart": <BarChart />,
  table: <Table />,
  card: <Card />,
  "line-card": <LineCard />,
};

export default function Dashboard() {
  const { droppedComponents, setDroppedComponents, moveComponent } =
    useContext(DnDContext);

  const [, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item: { id: string; name: string }) => {
      setDroppedComponents((prev: any) => [...prev, item]);
    },
  }));

  const removeComponent = (id: string) => {
    setDroppedComponents((prev: any) =>
      prev.filter((comp: { id: string }) => comp.id !== id)
    );
  };

  const saveDashboard = () => {
    localStorage.setItem(
      "dashboard_components",
      JSON.stringify(droppedComponents)
    );
  };

  return (
    <div ref={drop} className="flex-1  min-h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <button
          onClick={saveDashboard}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Saqlash
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {droppedComponents.map((comp: any, index: number) => (
          <DraggableComponent
            key={comp.id}
            id={comp.id}
            index={index}
            moveComponent={moveComponent}
            removeComponent={removeComponent}
          >
            {componentsMap[comp.id]}
          </DraggableComponent>
        ))}
      </div>
    </div>
  );
}
