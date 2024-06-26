import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

// Components
import AddCategory from "../components/modals/AddCategory";
import CategoryItem from "../components/partials/CategoryItem";

export default function Home() {
  const { categories } = useSelector((s) => s.categories);

  const [createCategory, setCreateCategory] = useState(false);
  const createCategoryRef = useRef(null);

  const shopping = categories?.filter((c) => !c.todoMode);
  const todo = categories?.filter((c) => c.todoMode);

  return (
    <div className="my-4 relative">
      <div className="flex justify-between">
        <div className="tracking-wide">
          <h2 className="text-xl sm:text-3xl font-bold text-primary">
            Categories
          </h2>
          <p className="text-lg mt-2 text-text/80">Browse all categories</p>
        </div>
        <div className="text-xl font-medium">
          <button
            onClick={() => setCreateCategory((prev) => !prev)}
            ref={createCategoryRef}
            className="px-6 py-1.5 tracking-wide bg-secondary/70 hover:bg-secondary/90 flex items-center gap-2.5 rounded-full transition-all"
          >
            <i className="fa-solid fa-plus text-base"></i>
            <span>Create</span>
          </button>
        </div>
      </div>
      <div className="py-6">
        {categories.length < 1 ? (
          <div className="mt-20 sm:mt-32">
            <div className="mt-2 text-xl text-center text-text/50">
              <span className="tracking-wider">
                Start by creating new category <br />
                to start making list.
              </span>
              <button
                onClick={() => createCategoryRef.current.click()}
                className="ml-2 font-mono text-accent hover:text-accent/80 transition-all"
              >
                Click Here
              </button>
            </div>
          </div>
        ) : (
          <div className="md:flexgap-6">
            {shopping?.length > 0 && (
              <div className="mb-10">
                <h3 className="text-3xl mb-6 font-medium tracking-wide">
                  Shopping
                </h3>
                <div className="grid grid-cols-3 max-[400px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {shopping?.map((c) => (
                    <CategoryItem key={c.id} {...c} />
                  ))}
                </div>
              </div>
            )}
            {todo?.length > 0 && (
              <div>
                <h3 className="text-3xl mb-4 font-medium tracking-wide">
                  Todo
                </h3>
                <div className="grid grid-cols-3 max-[400px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {todo
                    ?.filter((c) => c.todoMode)
                    ?.map((c) => (
                      <CategoryItem key={c.id} {...c} />
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {createCategory && <AddCategory close={setCreateCategory} />}
    </div>
  );
}

/*
<button
                onClick={() => createCategoryRef.current.click()}
                className="hidden p-4 py-5 border border-text hover:bg-text/10 rounded transition-all"
              >
                <div className="flex flex-col items-center justify-center gap-2 text-text/50">
                  <i className="fa-solid fa-plus text-xl"></i>
                  <span className="font-medium tracking-wide text-wrap max-w-20 text-lg">
                    Create
                  </span>
                </div>
              </button>

 */
