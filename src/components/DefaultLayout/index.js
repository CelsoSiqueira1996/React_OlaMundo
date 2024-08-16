const { Banner } = require("components/Banner")
const { Outlet } = require("react-router-dom")

export function DefaultLayout({ children }) {
    return (
        <main>
            <Banner />
            <Outlet />
            {children}
        </main>
    )
}