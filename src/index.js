import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ElementFilter from "./ElementFilter";
import FizzBuzz from "./FizzBuzz";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FizzBuzz />
  </StrictMode>,
);
