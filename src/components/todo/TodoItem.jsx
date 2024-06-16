import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, selectItem } from "../../store/slices/todoSlice";

// Components
import { ToastConfirm } from "../tiny/Dialog";
import UpdateTodoItem from "./modal/UpdateTodoItem";

export default function TodoItem({ index, id, isChecked, itemName }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return showConfirm ? (
    <div className="md:px-4 border-b border-text/40 hover:bg-secondary/20 transition-all py-1 rounded-b-md">
      <ToastConfirm
        title={"Deleting"}
        msg={"Are you sure?"}
        dialog={setShowConfirm}
        handleFn={() => dispatch(deleteItem(id))}
      />
    </div>
  ) : (
    <div
      className="grid text-center md:px-4 border-b border-text/40 hover:bg-secondary/20 transition-all py-2 rounded-b-md"
      style={{ gridTemplateColumns: "50px 75px 3fr 1fr" }}
    >
      <div className="text-accent text-xl">
        <button
          onClick={() => {
            setChecked(!checked);
            dispatch(selectItem({ id, isChecked: !checked }));
          }}
          className="border-none outline-none"
        >
          <i
            className={`fa-${
              checked ? "solid" : "regular text-text/50"
            } fa-square-check`}
          ></i>
        </button>
      </div>
      <div className="text-xl">{index}</div>
      <div className="text-left capitalize">{itemName}</div>
      <div className="flex items-start justify-center gap-3 mr-2">
        <button
          onClick={() => setShowUpdateModal(!showUpdateModal)}
          className="tracking-wide group"
          title="Update Item"
        >
          <i className="fa-solid fa-pencil text-base group-hover:text-yellow-500"></i>
        </button>
        <button
          onClick={() => setShowConfirm(true)}
          className="tracking-wide group"
          title="Delete Item"
        >
          <i className="fa-regular fa-trash-can text-base group-hover:text-red-500"></i>
        </button>
      </div>

      {/* Modal */}
      {showUpdateModal && (
        <UpdateTodoItem item={{ id, itemName }} close={setShowUpdateModal} />
      )}
    </div>
  );
}
