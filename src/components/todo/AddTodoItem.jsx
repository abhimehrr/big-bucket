import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import { LoaderFluid } from "../tiny/Loader";
import { addItem } from "../../store/slices/todoSlice";
import Unit from "../modals/UnitDropdown";

export default function AddTodoItem() {
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const [itemName, setItemName] = useState("");

  const inputRef = useRef(null);

  const params = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName.length < 1) {
      setErrMsg("Enter item name");
      return;
    } else {
      setErrMsg("");
    }

    setLoader(true);
    dispatch(
      addItem({
        category: params.group,
        itemName,
       
      })
    );
    setLoader(false);
    setItemName("");
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <h1 className="font-semibold tracking-wide text-xl sm:text-2xl">
        Add an item
      </h1>
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute -top-7 text-red-500">{errMsg}</div>
        <div className="flex gap-4 flex-col my-8 w-full">
          <div className="w-full">
            <label htmlFor="itemName" className="sr-only">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              id="itemName"
              ref={inputRef}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item name"
              className="w-full bg-transparent border border-primary focus:ring ring-accent focus:bg-background/50 py-1 px-2 text-lg outline-none rounded transition-all"
            />
          </div>
        </div>
        {loader && (
          <div className="absolute top-10 w-full">
            <LoaderFluid />
          </div>
        )}
        <button
          type="submit"
          className="px-6 py-2 mb-2 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-lg tracking-wide rounded transition-all"
        >
          <i className="fa-solid fa-plus text-base"></i>
          <span className="font-semibold">Create</span>
        </button>
      </form>
    </div>
  );
}
