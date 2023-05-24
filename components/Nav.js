/**
 * nav component who will appear in every page of this appliaction
 */
import Link from "next/link";

const Nav = () => (
  <nav className="bg-gray-800">
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex space-x-4">
          <Link legacyBehavior href="/">
            <a
              className="bg-gray-900 text-white rounded-md px-5 py-2 text-sm font-medium"
              aria-current="page"
            >
              Index
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-sm font-medium">
              About
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link legacyBehavior href="/">
          <a
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Index
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            About
          </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
