import XterList from "./xterList";
import Search from "./search";
import Characters from "./content.json";
import { useState } from "react";

function Props() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search input={search} setInput={setSearch} />
      <XterList xters={Characters} filter={search} />
    </div>
  );
}

export default Props;
