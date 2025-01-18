import React from "react";
import "./App.css";
import ColorMixer from "./ColorMixer/ColorMixer";
import QuadrantApp from "./Quadrant/QuadrantApp";
import Stopwatch from "./StopWatch/Stopwatch";
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
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import StarRating from "./StarRating/StarRating";
import LikeButton from "./LikeButton/LikeButton";
import CardSearch from "./CardsSearch/CardsSearch";
import ReviewsProvider from "./WayfairSortDropdown/reviewProvider";
import SortDropdown from "./WayfairSortDropdown/WayFairSortDropdown";
import ReviewsList from "./WayfairSortDropdown/ReviewsList";
import DataFetchingComponent from "./CustomFetchHook/DataFetchingComponent";
import TaskApp from "./TodoAppReducer/TaskApp";
import ShoppingCart from "./CartCostCalculator/ShoppingCart";
import DragAndDropItems from "./DragAndDropItems/DragAndDropItems";
import GridLights from "./GridLights/GridLights";
import ProgressBar from "./ProgressBar/ProgressBar";
import SnakeAndLadder from "./SnakeAndLadder/SnakeAndLadder";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import ResponsiveLayout from "./ResponsiveLayout/ResponsiveLayout";
import Popover from "./PopOver/Popover";
import NestedComments from "./NestedComments/NestedComments";
import OtpLoginMain from "./OtpLogin/OtpLoginMain";
import { ToastContextProvider } from "./Toast/context/toastContext";
import TicTacToe from "./TicTacToe/components/TicTacToe";
import Navbarr from "./Navbar/Navbar";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import MultiSelectInput from "./MultiSelectInput/MultiSelectInput";
import SelectableGridMain from "./SelectableGrid/SelectableGridMain";
import NestedCommentsMain from "./NestedCommentss/NestedCommentss";
import ProgressBarApp from "./ProgressBars/ProgressbarApp";
import NestedCheckboxes from "./NestedCheckboxes/NestedCheckboxes";
import SequentialProgressBars from "./SequentialProgressBars/SequentialProgressbars";
import LoginForm from "./LoginForm/LoginForm";
import FileExplorerApp from "./FileExplorerNew/FileExplorerApp";
import ProgressList from "./COncurrentProgressBars/ConcurrentProgressbars";
import CarousalApp from "./ImageCarousal/CarousalApp";
import CounterWithHistory from "./UndoRedoCounter/UndoRedoCounter";
import SignupForm from "./SignupForm/SignupForm";
import TabsApp from "./Tabs/TabsApp";
import AccordianApp from "./Accordian/AccordianApp";
import Calculator from "./Calculator/Calculator";
import InputComponent from "./ValidationComponent/InputComponent";
import SearchBar from "./DebouncedSearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <SearchBar />
      <InputComponent />
      <ProgressBarApp />
      <SequentialProgressBars />
      <ProgressList />
      <SignupForm />
      <TabsApp />
      <AccordianApp />
      <Calculator />
      <LoginForm />
      <FileExplorerApp />
      <CarousalApp />
      <NestedCheckboxes />
      <CounterWithHistory />
      <ShoppingCart />
      <TaskApp />
      <ReviewsProvider>
        <div>
          <SortDropdown />
          <ReviewsList />
        </div>
      </ReviewsProvider>
      <TicTacToe />
      <DragAndDropItems />
      <MultiSelectInput />
      <GridLights />
      <ProgressBar />
      <PasswordGenerator />
      <Popover />
      <OtpLoginMain />
      <NestedComments />
      <Navbarr />
      <CountdownTimer />
      <ResponsiveLayout />
      <SnakeAndLadder />
      <SelectableGridMain />
      <NestedCommentsMain />
      <DataFetchingComponent />
      <StarRating />
      <LikeButton />
      <CardSearch />
      <MultiStepForm />
      <ColorMixer />
      <Stopwatch />
      <QuadrantApp />
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
      <ToastContextProvider>
        <ToastComponent />
      </ToastContextProvider>
    </div>
  );
}

export default App;
