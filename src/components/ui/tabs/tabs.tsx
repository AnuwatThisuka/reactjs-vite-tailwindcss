import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { getTabsStyling, TTabsVariant } from "./helpers";

export interface TabsProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  className?: string;
  variant?: TTabsVariant;
}

const Tabs = ({ tabs, className = "", variant = "default" }: TabsProps) => {
  return (
    <Tab.Group as="div" className={cn("w-full", className)}>
      <Tab.List as="div" className={cn(getTabsStyling(variant, false)?.tabsList)}>
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) => cn(getTabsStyling(variant, selected)?.tabsItem)}
            onClick={() => {}}
          >
            {tab?.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels as={Fragment}>
        {tabs.map((tab, index) => (
          <Tab.Panel key={index} as={Fragment}>
            {tab.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

Tabs.displayName = "ppso-ui-tabs";

export { Tabs };
