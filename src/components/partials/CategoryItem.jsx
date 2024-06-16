import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useURLFetch } from "../../hooks/fetch";

// Redux
import { deleteCategory } from "../../store/slices/categorySlice";
import { deleteItemsByGroup } from "../../store/slices/itemSlice";
import { deleteItemsByGroup as deleteTodoItemsByGroup } from "../../store/slices/todoSlice";

import { Confirm } from "../tiny/Dialog";
import Share from "../todo/modal/Share";

export default function CategoryItem({ id, name, todoMode = false }) {
  const { categories } = useSelector((s) => s.categories);
  const { items: todosItems } = useSelector((s) => s.todos);
  const { items } = useSelector((s) => s.items);

  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  //
  const makeUrl = () => {
    const c = categories.filter((cat) => cat.id === id)[0];
    let tempItems = [];
    if (c.todoMode) {
      tempItems = todosItems.filter((ti) => ti.category === id);
    } else {
      tempItems = items.filter((ti) => ti.category === id);
    }

    const base64 = btoa(
      JSON.stringify({
        category: c,
        items: tempItems,
      })
    );
    
    return base64;
  };

  // Handle Share
  const handleShare = async () => {
    const base64 = makeUrl();

    const res = await useURLFetch("/", {
      method: "post",
      body: new URLSearchParams({
        url: "https://bb.shre.in/get?data=" + base64,
      }).toString(),
    });
    setShowShare(true);
    setShareUrl(res.short_url);
  };

  return (
    <div className="relative p-4 py-5 border border-text hover:bg-secondary/50 rounded transition-all">
      {/* Confirm */}
      {showConfirm && (
        <Confirm
          msg={"Deleting category! Are you sure?"}
          dialog={setShowConfirm}
          handleFn={() => {
            if (todoMode) {
              dispatch(deleteTodoItemsByGroup(id));
            } else {
              dispatch(deleteItemsByGroup(id));
            }
            dispatch(deleteCategory(id));
          }}
        />
      )}
      <button
        onClick={() => setShowConfirm(true)}
        title="Close"
        className="absolute top-0 right-0 px-2.5 py-1 text-text/40 hover:text-red-500"
      >
        <i className="fa-solid fa-xmark text-lg"></i>
      </button>

      {/* Share */}
      {showShare && <Share shareUrl={shareUrl} close={setShowShare} />}
      <button
        onClick={handleShare}
        title="Share"
        className="absolute top-6 right-0 px-2.5 py-1 text-text/50 hover:text-green-400"
      >
        <i className="fa-solid fa-share-nodes text-lg"></i>
      </button>
      <Link
        to={todoMode ? `/todo/${id}?name=${name}` : `/${id}?name=${name}`}
        className="flex flex-col items-center justify-center gap-2 group"
      >
        <div className="text-4xl group-hover:scale-110 transition-all">
          {todoMode ? "📝" : "🛍️"}
        </div>
        <span className="capitalize tracking-wide text-center text-wrap max-w-20 text-lg">
          {name}
        </span>
      </Link>
    </div>
  );
}
