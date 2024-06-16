import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedItem } from "../store/slices/itemSlice";
import { Navigate, useParams } from "react-router-dom";

// Components
import { Confirm, Toast } from "../components/tiny/Dialog";
import AddTodoItem from "../components/todo/AddTodoItem";
import TodoItem from "../components/todo/TodoItem";

export default function TodoList() {
  const { items } = useSelector((s) => s.todos);
  const { categories } = useSelector((s) => s.categories);

  const [showConfirm, setShowConfirm] = useState(false);
  const [alert, setAlert] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

  // Delete Selected Items
  const handleDelete = () => {
    dispatch(deleteSelectedItem());
    setAlert(true);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  // Check if category exists or not
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    const valid = categories?.filter((c) => c.id === params.group);
    if (valid < 1) {
      setIsValid(false);
    }
  }, []);

  return !isValid ? (
    <Navigate to={"/404"} replace={true} />
  ) : (
    <div className="my-4">
      <div className="flex justify-between">
        <div className="tracking-wide">
          <h2 className="text-xl sm:text-3xl font-bold text-primary">
            Item List
          </h2>
        </div>
      </div>
      <div className="py-8 lg:grid grid-cols-2 items-start gap-6">
        <div className="max-lg:mb-8 bg-secondary/10 border border-secondary px-4 rounded-md">
          <AddTodoItem />
        </div>

        <div>
          {items?.filter((item) => item.category === params.group)?.length <
          1 ? (
            <div className="mt-10 sm:mt-20">
              <div className="mt-2 text-2xl text-center text-text/50">
                <span className="tracking-wider">Start by adding new item</span>
              </div>
            </div>
          ) : (
            <div className="lg:bg-secondary/10 lg:border lg:border-secondary lg:px-6 lg:py-4 lg:pb-8 lg:rounded-md">
              <h2 className="mb-6 font-semibold tracking-wide text-xl sm:text-2xl">
                All items
              </h2>
              <div className="text-lg tracking-wide border border-text/40 border-b-transparent rounded-md">
                <div
                  className="grid text-center md:px-4 border-b border-text/40 bg-secondary hover:bg-secondary/80 transition-all py-2 font-medium sticky top-0 rounded-t-md"
                  style={{ gridTemplateColumns: "50px 75px 3fr 1fr" }}
                >
                  <div className="text-xl">
                    <button
                      onClick={() => setShowConfirm(true)}
                      className="hover:text-red-500 hover:scale-125 transition-all"
                      title="Delete selected item"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="text-xl">#</div>
                  <div className="text-left">Todo</div>
                  <div className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-wrench text-base sm:hidden"></i>
                    <span className="max-sm:hidden">Action</span>
                  </div>
                </div>
                {items
                  ?.filter((item) => item.category === params.group)
                  ?.map((item, index) => (
                    <TodoItem key={item.id} index={index + 1} {...item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Confirm */}
      {showConfirm && (
        <Confirm
          msg={"Deleting All! Are you sure?"}
          handleFn={handleDelete}
          dialog={setShowConfirm}
        />
      )}
      {alert && <Toast title={"Deleted"}>Seleted item has been deleted.</Toast>}
    </div>
  );
}
