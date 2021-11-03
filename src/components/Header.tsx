import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

interface Props {}

export default function Header({}: Props): ReactElement {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <header className="font-roboto tracking-wider bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <nav className="flex justify-around items-center pt-5">
        <span className=" px-2 text-4xl rounded-md shadow bg-gradient-to-r from-blue-400 to-green-400">
          LOGO
        </span>
        <ul className="flex gap-x-6">
          <li className="border-b-4 font-light border-purple-500">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b-4 font-light border-white">
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled
                  ? "bg-blue-400 translate-x-1"
                  : "bg-green-300 translate-x-0"
              } relative inline-flex items-center h-6 rounded-full w-11 transform transition ease-in-out duration-200`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transform transition ease-in-out duration-200`}
              />
            </Switch>
          </li>
        </ul>
      </nav>
    </header>
  );
}
