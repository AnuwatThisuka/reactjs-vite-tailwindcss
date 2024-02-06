import { cn } from "@/lib/utils";

export type TTabsVariant = "default" | "custom";

export interface ITabsStyling {
  [key: string]: {
    tabsList: string;
    tabsItem: string;
    tabsItemActive?: string;
    tabsItemNotActive?: string;
  };
}

export const tabsStyle: ITabsStyling = {
  default: {
    tabsList: "w-max border-[0.5px] border-custom-border-200 rounded grid grid-cols-3 bg-custom-background-80",
    tabsItem: "px-6 font-semibold text-xs rounded py-1.5 focus:outline-none",
    tabsItemActive: "bg-custom-background-100 text-custom-text-300 shadow-[2px_0_8px_rgba(167,169,174,0.15)]",
    tabsItemNotActive: "text-custom-text-400",
  },
  custom: {
    tabsList: "space-x-2 border-b border-custom-border-200 p-5 pt-0",
    tabsItem: "rounded-3xl border border-custom-border-200 px-4 py-2 text-xs hover:bg-custom-background-80",
    tabsItemActive: "bg-custom-background-80 focus:outline-none",
    tabsItemNotActive: "",
  },
};

export const tabsStyling = (variant: TTabsVariant, selected: boolean) => {
  if (!tabsStyle[variant]) {
    throw new Error(`Unknown variant: ${variant}`);
  }
  const tabsList = cn(tabsStyle[variant]?.tabsList);
  const tabsItem = cn(
    tabsStyle[variant]?.tabsItem,
    selected ? tabsStyle[variant]?.tabsItemActive : tabsStyle[variant]?.tabsItemNotActive
  );
  return { tabsList, tabsItem };
};

export const getTabsStyling = (variant: TTabsVariant, selected: boolean) => tabsStyling(variant, selected);
