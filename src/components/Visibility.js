import { useDispatch } from "react-redux";
import { filterChange } from "../Reducers/filterReducer";

const Visibility = () => {
  const dispatch = useDispatch();

  return (
    <div>
      All{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("All"))}
      />
      Important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("IMPORTANT"))}
      />
      Not Important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("NONIMPORTANT"))}
      />
    </div>
  );
};

export default Visibility;
