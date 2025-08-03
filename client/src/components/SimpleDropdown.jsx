import { useState } from "react";
import { Listbox } from "@headlessui/react";

const options = ["Apple", "Banana", "Orange"];

export default function SimpleDropdown() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-48">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="w-full border px-3 py-2 rounded">
          {selected}
        </Listbox.Button>

        <Listbox.Options className="border mt-1 rounded shadow">
          {options.map((option, idx) => (
            <Listbox.Option
              key={idx}
              value={option}
              className="px-3 py-2 hover:bg-teal-100 cursor-pointer"
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
