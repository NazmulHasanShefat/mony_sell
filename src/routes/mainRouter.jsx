import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import EditProfileForm from "../pages/profile/EditProfileForm";
import ProfilePage from "../pages/profile/ProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpForm from "../pages/SignUpPage";

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
        },
        {
            path: "signin",
            element: <SignInPage />
        },
        {
            path: "signup",
            element: <SignUpForm />
        },
        {
            path: "profile",
            element: <ProfilePage />
        },
        {
            path: "profile/edit",
            element: <EditProfileForm />
        },
    ]
}