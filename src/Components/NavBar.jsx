import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", path: "/navbar", current: true },
  { name: "Team", path: "/team", current: false },
  { name: "Projects", path: "/projects", current: false },
  { name: "Calendar", path: "/calendar", current: false },
  { name: "Products", path: "/productslist", current: false },
  { name: "signup", path: "/", current: false },
];

const userNavigation = [
  { name: "Your profile", path: "/profile" },
  { name: "Settings", path: "/settings" },
  { name: "Sign out", path: "/signout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center">
              <div className="shrink-0">
                <Link to="/navbar">
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="size-8"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={classNames(
                        item.current
                          ? "bg-gray-950/50 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white"
                >
                  <BellIcon className="size-6" />
                </button>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="relative flex items-center rounded-full">
                    <img
                      src={user.imageUrl}
                      alt=""
                      className="size-8 rounded-full outline outline-white/10"
                    />
                  </MenuButton>

                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-gray-800 py-1">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                <Bars3Icon className="size-6" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-3 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}