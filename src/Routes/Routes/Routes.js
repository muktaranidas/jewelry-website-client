import Categories from "../../Pages/Home/Categories/Categories";
import About from "../../Pages/Home/Home/About/About";
import Contact from "../../Pages/Home/Home/Contact/Contact";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/categories/:categoryId",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-category/${params.categoryId}`),
        element: <Products></Products>,
      },
    ],
  },
]);
export default router;
