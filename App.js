import React from "react";
import "./App.css";
import MultiStepForm from "./MultiStepForm";
import ColorMixer from "./ColorMixer";
import QuadrantApp from "./QuadrantApp";
import Stopwatch from "./Stopwatch";
import ToastComponent from "./Toast/ToastComponent";
import Counter from "./Counter/Counter";
import FetchAndMergeData from "./MergingDataFromTwoAPI/FetchAndMergeData";
import Pagination from "./Pagination/Pagination";
import CompletedItems from "./CompletedItems/CompletedItems";
import FilterByDiscount from "./FilterByDiscount/FilterByDiscount";
import Stack from "./Stack/Stack";
import FilterByDiscountMultpleItems from "./FilterByDiscount/FilterByDiscountMultpleItems";
import TodoList from "./TodoList/TodoList";
import Main from "./ValidationComponent/Main";
import MainCarousel from "./Carousal/MainCarousel";

function App() {
  return (
    <div className="App">
      <MultiStepForm />
      <ColorMixer />
      <Stopwatch />
      <QuadrantApp />
      <ToastComponent />
      <Counter />
      <FetchAndMergeData />
      <Pagination />
      <CompletedItems />
      <FilterByDiscount />
      <FilterByDiscountMultpleItems />
      <Stack />
      <TodoList />
      <Main />
      <MainCarousel />
    </div>
  );
}

export default App;
