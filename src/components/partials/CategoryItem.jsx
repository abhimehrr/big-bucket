import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../store/slices/categorySlice";
import { deleteItemsByGroup } from "../../store/slices/itemSlice";

import { Confirm } from "../tiny/Dialog";

export default function CategoryItem({ id, name }) {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative p-4 py-5 border border-text hover:bg-secondary/50 rounded transition-all">
      {/* Confirm */}
      {showConfirm && (
        <Confirm
          msg={"Deleting category! Are you sure?"}
          dialog={setShowConfirm}
          handleFn={() => {
            dispatch(deleteItemsByGroup(id));
            dispatch(deleteCategory(id));
          }}
        />
      )}
      <button
        onClick={() => setShowConfirm(true)}
        className="absolute top-0 right-0 px-2.5 py-1 text-text/30 hover:text-red-500"
      >
        <i className="fa-solid fa-xmark text-lg"></i>
      </button>
      <Link
        to={`/${id}?name=${name}`}
        className="flex flex-col items-center justify-center gap-2 group"
      >
        <i className="fa-regular fa-folder-open text-4xl group-hover:hidden"></i>
        <i className="fa-solid fa-folder-open text-4xl hidden group-hover:inline-block"></i>
        <span className="capitalize tracking-wide text-center text-wrap max-w-20 text-lg">
          {name}
        </span>
      </Link>
    </div>
  );
}
