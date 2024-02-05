import ReactSVG from "@/assets/react.svg";
import { useState } from "react";
import { Button, CustomMenu, CustomSearchSelect, CustomSelect, MarkdownRenderer } from "../components/ui";

function App() {
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string>("");

  const TestMarkdown = `
  # Hello World
  This is a test markdown file to test the markdown renderer component. It supports all the basic markdown features like: 
  ## 🎉 Features
  - List item 1
  - List item 2
  - List item 3
  `;

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="neutral-primary" onClick={() => setCount(count + 1)}>
            Button {count}
          </Button>
          <CustomMenu
            customButton={
              <Button variant="neutral-primary" className="flex items-center gap-2">
                <span>Menu</span>
              </Button>
            }
          >
            <CustomMenu.MenuItem onClick={() => alert("Item 1 clicked")}>Item 1</CustomMenu.MenuItem>
            <CustomMenu.MenuItem onClick={() => alert("Item 2 clicked")}>Item 2</CustomMenu.MenuItem>
            <CustomMenu.MenuItem onClick={() => alert("Item 3 clicked")}>Item 3</CustomMenu.MenuItem>
          </CustomMenu>
          <CustomSelect
            customButton={
              <Button variant="neutral-primary" className="flex items-center gap-2">
                Select an option
              </Button>
            }
            onChange={(e: { target: { value: any } }) => console.log(e.target.value)}
            value="option-1"
          >
            {new Array(5).fill(null).map((_, i) => (
              <CustomSelect.Option key={i} value={`option-${i}`}>
                Option {i}
              </CustomSelect.Option>
            ))}
            <CustomSelect.Option value="custom">Custom</CustomSelect.Option>
          </CustomSelect>
          <CustomSearchSelect
            value={selected}
            customButton={
              <Button variant="neutral-primary" className="flex items-center gap-2">
                <span>{selected || "Select an option"}</span>
              </Button>
            }
            onChange={(val: string) => setSelected(val)}
            options={new Array(20).fill(null).map((_, i) => ({
              value: `Option ${i}`,
              query: `option-${i}`,
              content: <div>Option {i}</div>,
            }))}
            optionsClassName="w-full"
          />
        </div>
        <MarkdownRenderer markdown={TestMarkdown} />
      </div>
    </main>
  );
}

export default App;
