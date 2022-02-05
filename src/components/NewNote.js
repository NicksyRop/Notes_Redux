import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../Reducers/noteReducer";

const NewNnote = () => {
  const dispatch = useDispatch();
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;

    dispatch(createNote(content));

    event.target.note.value = "";
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewNnote;
