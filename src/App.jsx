import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as MenuLoader } from "./Features/Menu/Menu";
import Cart from "./Features/Cart/Cart";
import CreateOrder, {
  action as CreateOrderAction,
} from "./Features/Order/CreateOrder";
import { action as OrderAction } from "./Features/Order/UpdateOrder";
import Order, { loader as OrderLoader } from "./Features/Order/Order";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <NotFound />,
        action: OrderAction,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
