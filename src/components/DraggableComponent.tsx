import { useDrag } from "react-dnd";

function DraggableItem({
  id,
  name,
  children,
}: {
  id: string;
  name?: string;
  children?: React.ReactNode;
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={` ${isDragging ? "opacity-50" : "opacity-100"}`}>
      {children ? children : name}
    </div>
  );
}

export default DraggableItem;
