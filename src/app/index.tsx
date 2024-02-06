import ReactSVG from "@/assets/react.svg";
import { EmptyState } from "@/components/common";
import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  CustomMenu,
  CustomSearchSelect,
  CustomSelect,
  DateDropdown,
  MarkdownRenderer,
  Tabs,
} from "../components/ui";

function App() {
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);

  const TestMarkdown = `
  # Hello World
  This is a test markdown file to test the markdown renderer component. It supports all the basic markdown features like: 
  ## 🎉 Features
  - Headers
  - Lists
  - Links
  - Images
  - Code blocks
  - Blockquotes
  `;

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex h-full flex-col items-center gap-y-4 overflow-y-auto py-6">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="accent-primary" onClick={() => setCount(count + 1)}>
            Button {count}
          </Button>
          <CustomMenu ellipsis>
            <CustomMenu.MenuItem onClick={() => alert("Item 1 clicked")}>Item 1</CustomMenu.MenuItem>
            <CustomMenu.MenuItem onClick={() => alert("Item 2 clicked")}>Item 2</CustomMenu.MenuItem>
            <CustomMenu.MenuItem onClick={() => alert("Item 3 clicked")}>Item 3</CustomMenu.MenuItem>
          </CustomMenu>
          <CustomSelect
            label={selected ? `Selected: ${selected}` : "Select an option"}
            onChange={(val: string) => setSelected(val)}
            value={selected}
          >
            {new Array(5).fill(null).map((_, i) => (
              <CustomSelect.Option key={i} value={`Option-${i}`}>
                Option {i}
              </CustomSelect.Option>
            ))}
          </CustomSelect>
          <CustomSearchSelect
            value={selected}
            label={selected ? `Selected: ${selected}` : "Select an option"}
            onChange={(val: string) => setSelected(val)}
            options={new Array(20).fill(null).map((_, i) => ({
              value: `Option ${i}`,
              query: `option-${i}`,
              content: <div>Option {i}</div>,
            }))}
            optionsClassName="w-full"
          />
          <DateDropdown
            value={date}
            onChange={(date) => {
              setDate(date);
            }}
            buttonVariant="border-with-text"
            placeholder="Start date"
            tabIndex={10}
          />
        </div>
        <AvatarGroup showTooltip size="md">
          {new Array(5).fill(null).map((_, i) => (
            <Avatar
              key={i}
              name={`User ${i + 1}`}
              src="https://i.pinimg.com/236x/3e/f8/4f/3ef84ffcb2804221e271a4ac67836c88.jpg"
            />
          ))}
        </AvatarGroup>
        <MarkdownRenderer markdown={TestMarkdown} />
        <Tabs
          tabs={[
            {
              label: "Tab 1",
              content: (
                <div className="w-full p-2">
                  <EmptyState
                    title="ไม่พบข้อมูล"
                    description="ไม่พบข้อมูลที่ค้นหา กรุณาลองใหม่อีกครั้ง"
                    image="https://cdn.dribbble.com/users/2192169/screenshots/6622130/published_empty-state.gif"
                    primaryButton={{
                      text: "สร้างโปรเจค",
                      onClick: () => alert("Create project clicked"),
                    }}
                  />
                </div>
              ),
            },
            {
              label: "Tab 2",
              content: <div>Tab 2 content</div>,
            },
            {
              label: "Tab 3",
              content: <div>Tab 3 content</div>,
            },
          ]}
        />
      </div>
    </main>
  );
}

export default App;
