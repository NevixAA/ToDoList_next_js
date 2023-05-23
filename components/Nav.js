import Link from "next/link";

const Nav = () => (
  <nav class="bg-gray-800">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex space-x-4">
          <Link legacyBehavior href="/">
            <a
              class="bg-gray-900 text-white rounded-md px-5 py-2 text-sm font-medium"
              aria-current="page"
            >
              Index
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-sm font-medium">
              About
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <Link legacyBehavior href="/">
          <a
            class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Index
          </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            About
          </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
