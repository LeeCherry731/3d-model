import React, { ReactElement, Fragment } from "react";
import { Link } from "react-router-dom";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <>
      <header className=" ">
        <nav>
          <span>logo</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
