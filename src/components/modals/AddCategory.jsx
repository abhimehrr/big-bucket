import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";

import { addCategory } from "../../store/slices/categorySlice";
import { closeModal } from "../../utils/closeModal";

// Components
import { LoaderFluid } from "../tiny/Loader";

export default function AddCategory({ close }) {
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    if (value.length < 1) {
      setErrMsg("Enter category name");
      return;
    } else {
      setErrMsg("");
    }
    setLoader(true);
    dispatch(
      addCategory({
        name: value,
      })
    );
    setLoader(false);
    close(false);
    document.documentElement.classList.remove("overflow-hidden");
  };

  // Close Modal
  const documentRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    closeModal(documentRef, close);
  }, []);

  return createPortal(
    <div
      ref={documentRef}
      className="flex items-center justify-center fixed top-0 left-0 min-h-screen w-full bg-secondary/70"
    >
      <div className="relative min-w-96 max-w-[450px] p-6 rounded-lg bg-background">
        <div className="absolute right-4 top-3">
          <button
            onClick={() => {
              document.documentElement.classList.remove("overflow-hidden");
              close(false);
            }}
            className="size-8 bg-slate-800 text-slate-200 hover:text-red-500 rounded-full"
          >
            <span className="sr-only">close</span>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <h1 className="font-semibold tracking-wide text-xl sm:text-2xl">
          Create a category
        </h1>
        <form onSubmit={handleSubmit} className="relative">
          <div className="absolute -top-7 text-red-500">{errMsg}</div>
          <div className="my-8 w-full">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoFocus={true}
              placeholder="Category name"
              className="w-full bg-transparent border border-primary focus:ring ring-accent focus:bg-background/50 py-1 px-2 text-lg outline-none rounded transition-all"
            />
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
    </div>,
    document.getElementById("big-portal")
  );
}
