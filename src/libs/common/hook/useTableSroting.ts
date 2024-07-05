import { useMemo, useState } from "react";

type DirectionSortType = "ascending" | "descending";

interface SortConfigType<T> {
  key: keyof T | null;
  direction: DirectionSortType;
}

export function useSortableData<T>(
  items: T[],
  initialSortConfig: SortConfigType<T> = { key: null, direction: "ascending" }
) {
  const [sortConfig, setSortConfig] =
    useState<SortConfigType<T>>(initialSortConfig);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return items; // No sorting if no key is provided
    return [...items].sort((a, b) => {
      const key = sortConfig.key as keyof T;

      if (a[key] < b[key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0; // no change
    });
  }, [items, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: DirectionSortType = initialSortConfig.direction;
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { sortedData, requestSort, sortConfig };
}
