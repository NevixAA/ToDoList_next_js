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
        </div>
      </div>
    </div>

  </nav>
);

export default Nav;
