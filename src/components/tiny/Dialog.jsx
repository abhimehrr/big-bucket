import { useEffect, useRef } from "react";
import { closeModal } from "../../utils/closeModal";

export const Confirm = ({ msg, handleFn = () => {}, dialog }) => {
  // Close Modal
  const documentRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    closeModal(documentRef, dialog);
  }, []);
  return (
    <div
      ref={documentRef}
      className="w-full h-screen flex items-center justify-center bg-slate-800 bg-opacity-40 fixed top-0 left-0 z-50"
    >
      <div className="min-w-56 max-w-96 min-h-10 py-4 px-6 text-slate-800 bg-slate-200 rounded-lg">
        <h2 className="font-semibold tracking-wide text-left text-secondary">
          Confirm
        </h2>
        <p className="text-left text-md my-2">{msg}</p>
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => {
              handleFn();
              dialog(false);
              document.documentElement.classList.remove("overflow-hidden");
            }}
            className="py-1 px-4 font-semibold text-slate-100 bg-accent hover:bg-accent/80 rounded-full transition-all"
          >
            Yes
          </button>
          <button
            onClick={() => {
              dialog(false);
              document.documentElement.classList.remove("overflow-hidden");
            }}
            className="py-1 px-4 font-semibold text-slate-100 bg-red-500 hover:bg-red-600 rounded-full transition-all"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export const ToastConfirm = ({ title, msg, handleFn = () => {}, dialog }) => {
  return (
    <div className="flex items-center justify-between text-sm sm:text-md px-2 sm:px-4 py-3 gap-3 sm:gap-6 text-text-50">
      <div className="flex items-center gap-4">
        <h2 className="font-medium tracking-wide text-red-500">{title}</h2>
        <p className="text-left">{msg}</p>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => {
            handleFn();
            dialog(false);
          }}
          className="py-0.5 px-4 font-medium text-sm text-slate-100 bg-accent hover:bg-accent/80 rounded-full transition-all"
        >
          Yes
        </button>
        <button
          onClick={() => {
            dialog(false);
          }}
          className="py-0.5 px-4 font-medium text-sm text-slate-100 bg-red-500 hover:bg-red-600 rounded-full transition-all"
        >
          No
        </button>
      </div>
    </div>
  );
};

export const Toast = ({ title, close = false, children }) => {
  return (
    <div className="fixed top-4 right-8 z-50">
      <div className="relative min-w-72 min-h-10 py-2 px-4 text-slate-800 bg-slate-200 rounded-lg">
        <h2 className="font-semibold tracking-wide text-left text-secondary">
          {title}
        </h2>
        {close && (
          <div
            onClick={() => close(false)}
            className="absolute right-4 top-2 px-3 py-1 hover:text-red-500 cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </div>
        )}
        <div className="text-left">{children}</div>
      </div>
    </div>
  );
};
