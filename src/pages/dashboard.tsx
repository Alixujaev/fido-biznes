import { useDrop } from "react-dnd";
import { useContext, useEffect } from "react";
import { DnDContext } from "@/DndContext";
import DraggableComponent from "@/components/DashboardDraggableComp";
import { CircleChartComponent } from "@/components/charts/CircleChart";
import { LineChartComponent } from "@/components/charts/LineChart";
import { BarChartComponent } from "@/components/charts/BarChart";
import { TableDemo } from "@/components/table/DataTable";
import PriceCard from "@/components/cards/PriceCard";
import LineCard from "@/components/cards/LineCard";

const componentsMap: { [key: string]: JSX.Element } = {
  "circle-chart": <CircleChartComponent />,
  "line-chart": <LineChartComponent />,
  "bar-chart": <BarChartComponent />,
  table: <TableDemo />,
  card: <PriceCard />,
  "line-card": <LineCard />,
};

export default function Dashboard() {
  const { droppedComponents, setDroppedComponents, moveComponent } =
    useContext(DnDContext);

  useEffect(() => {
    const savedComponents = localStorage.getItem("dashboard_components");
    if (savedComponents) {
      setDroppedComponents(JSON.parse(savedComponents));
    }
  }, []);

  const [, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item: { type: string; name: string }) => {
      setDroppedComponents((prev: any) => [
        ...prev,
        {
          type: item.type,
          name: item.name,
          id: `${item.type}-${Date.now()}`,
        },
      ]);
    },
  }));

  const removeComponent = (id: string) => {
    console.log(id);

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

  console.log(droppedComponents);

  return (
    <div ref={drop} className="flex-1  min-h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <button
          onClick={saveDashboard}
          className="mb-4 px-4 py-2 bg-sidebar text-black rounded-xl border border-sidebar-border"
        >
          Save
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {droppedComponents.map((comp: any, index: number) => (
          <DraggableComponent
            key={comp.id}
            id={comp.id}
            index={index}
            width={comp.width ? comp.width : null}
            height={comp.height ? comp.height : null}
            moveComponent={moveComponent}
            removeComponent={removeComponent}
          >
            {componentsMap[comp.type]}
          </DraggableComponent>
        ))}
      </div>
    </div>
  );
}
