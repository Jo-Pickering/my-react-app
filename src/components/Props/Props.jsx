import XterList from "./xterList";
import Characters from "./content.json";

function Props() {
  return (
    <div>
      <XterList xters={Characters} />
    </div>
  );
}

export default Props;
