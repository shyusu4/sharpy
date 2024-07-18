import Link from 'next/link';
import { sharpy } from '@/assets/index';
import { Button } from '@/components/index';

const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-4">
      <nav className="navbar font-semibold text-primary flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <a href="/">
            <img src={sharpy.src} alt="Sharpy" className="h-9 w-auto" />
          </a>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <details>
                  <summary>All Pages</summary>
                  <ul className="p-2 bg-offBlack text-white z-10 flex w-max">
                    <ul>
                      <li>
                        <a>Homepage</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Pricing</a>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a>Case Study</a>
                      </li>
                      <li>
                        <a>Case Study Details</a>
                      </li>
                      <li>
                        <a>Blog</a>
                      </li>
                      <li>
                        <a>Blog Details</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a>Terms</a>
                      </li>
                      <li>
                        <a>Privacy</a>
                      </li>
                      <li>
                        <a>Changelog</a>
                      </li>
                      <li>
                        <a>404</a>
                      </li>
                    </ul>
                  </ul>
                </details>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex">
            <Button intent="secondary">Get Started</Button>
          </div>
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="relative h-full w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke='var(--token-f3c1508e-13fd-445e-92d5-b83015015a44, rgb(8, 10, 71)) /* {"name":"Neutral 04"} */'
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu bg-offBlack text-white dropdown-content w-96 rounded-box -left-[22rem] z-10 my-5"
            >
              <li>
                <details open>
                  <summary>All Pages</summary>
                  <ul>
                    <li>
                      <a>Homepage</a>
                    </li>
                    <li>
                      <a>About</a>
                    </li>
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
