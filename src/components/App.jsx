import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(e) {
  return <Entry emoji={e.emoji} name={e.name} meaning={e.meaning} key={e.id} />;
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
