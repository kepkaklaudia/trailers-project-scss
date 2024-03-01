import { useState } from "react";

export const useViewPreference = () => {
  const setViewPreference = (view: string): void => {
    localStorage.setItem("viewPreference", view);
  };

  const getViewPreference = (): string => {
    if (typeof window !== "undefined") {
      const viewPreference = localStorage.getItem("viewPreference");
      return viewPreference || "list";
    } else {
      return "list";
    }
  };

  const [view, setView] = useState(getViewPreference());

  const handleViewChange = (view: string) => {
    setViewPreference(view);
    setView(view);
  };

  return { view, handleViewChange };
};
