import { BrowserRouter, Route, Routes } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Pages
import Layout from "./Layouts";

import Home from "./pages/Home";
import GetData from "./pages/GetData";
import List from "./pages/List";
import TodoList from "./pages/TodoList";

import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import ErrorNotFound from "./pages/404";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:group" element={<List />} />
            <Route path="/todo/:group" element={<TodoList />} />
          </Route>
          
          {/* Other pages */}
          <Route
            path="/"
            element={<Layout breadcrumb={{ show: true, type: "general" }} />}
          >
            <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
          </Route>

          {/* Handle Error */}
          <Route
            path="/"
            element={
              <Layout
                header={false}
                footer={false}
                breadcrumb={{ show: false }}
              />
            }
          >
            <Route path="/get" element={<GetData />} />
            <Route path="/404" element={<ErrorNotFound />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
