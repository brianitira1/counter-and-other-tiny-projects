import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Counter from './Counter'
import ElementFilter from './ElementFilter'
import TargetSum from "./TargetSum";

import IsPalindrome from "./IsPalindrome";
import FizzBuzz from "./FizzBuzz";

import ReverseString from "./ReverseString";

import FindMissingNumber from "./FindMissingNumber";

import ImageUpload from "./ImageUpload";

import App from "./App";

import MovieList from "./MovieList";

import Tmdb from './Tmdb'



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Tmdb
    />
  </StrictMode>
);
