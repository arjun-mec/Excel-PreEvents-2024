import React from "react";
import EventsList from "./components/EventsList";
import HeadingText from "./components/HeadingText";

const App = () => {
  return (
    <>
      <div className="app-container">
        <HeadingText />
        <EventsList />
      </div>
    </>
  );
};
export default App;
