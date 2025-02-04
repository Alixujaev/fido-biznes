import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleResize = (
  ref: any,
  setDroppedComponents: any,
  id?: string
) => {
  if(ref.current && id){ 
    setDroppedComponents((prev: any) =>
    prev.map((comp: any) =>
      comp.id === id ? { ...comp, width: ref.current.state.width, height: ref.current.state.height } : comp
    )
  );
  }
  
};
