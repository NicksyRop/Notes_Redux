import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../Reducers/noteReducer";

const Note = ({ handleClick, note }) => {
  return (
    <div>
      <li onClick={handleClick}>
        {note.content} <strong>{note.important ? "important" : ""}</strong>
      </li>
    </div>
  );
};

const Notes = () => {
  const dispatch = useDispatch();

  const notes = useSelector(({ filter, notes }) => {
    if (filter === "ALL") {
      return notes;
    }

    return filter === "IMPORTANT"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important);
  });
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </div>
  );
};

export default Notes;
