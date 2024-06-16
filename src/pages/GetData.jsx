import React, { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// Slice
import { pushCategory } from "../store/slices/categorySlice";
import { addItems } from "../store/slices/itemSlice";
import { addItems as addTodoItems } from "../store/slices/todoSlice";

import { LoaderFluid } from "../components/tiny/Loader";

export default function GetData() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const base64 = searchParams.get("data");

  // Return if data not found
  if (!base64) return <Error />;

  let data = [];
  try {
    data = JSON.parse(atob(base64));
  } catch (error) {
    return <Error />;
  }

  // Set data to store
  useEffect(() => {
    setIsLoading(true);

    // Set category with new id
    var tempId = nanoid();
    data.category.id = tempId;
    dispatch(pushCategory(data.category));

    // Set items with updated category id
    data.items.map((item) => {
      item.id = nanoid();
      item.category = tempId;
    });

    if (data.category.todoMode) {
      dispatch(addTodoItems(data.items));
    } else {
      dispatch(addItems(data.items));
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center flex-col gap-4">
        <LoaderFluid />
        <div className="text-lg">
          Please hold on while we prepare everything for you.
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/"} replace={true} />
  );
}

// Error
const Error = () => (
  <div className="h-screen w-full flex items-center justify-center">
    <div className="flex items-center flex-col gap-4">
      <div className="text-8xl">🤷‍♂️</div>
      <div className="text-lg text-center">
        The URL is either expired or incorrect!
        <br />
        Please return to the homepage.
      </div>
      <Link
        to="/"
        className="text-primary hover:text-primary/70 transition-all text-xl flex items-center gap-4"
      >
        <i className="fa-solid fa-arrow-left-long"></i>
        <span>Go Home</span>
      </Link>
    </div>
  </div>
);
