import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleResize = (
  d: { width: number; height: number },
  setDroppedComponents: any,
  id?: string
) => {
  setDroppedComponents((prev: any) =>
    prev.map((comp: any) =>
      comp.id === id ? { ...comp, width: d.width, height: d.height } : comp
    )
  );
};
