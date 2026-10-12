import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

export const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            element: <HomePage />,
            children: [
                { index: true, element: <></> },
                { path: "section/:sectionId", element: <></> }
            ]
        },
        {
            path: "product",
            element: <ProductPage />
        }
    ]
}