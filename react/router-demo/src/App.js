import {
  createBrowserRouter,
  //createRoutesFromElements,
  //Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { RootLayout } from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

/*
const routeDef = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>,
);

const router = createBrowserRouter(routeDef);
*/

export const App = () => {
  return <RouterProvider router={router} />;
};
