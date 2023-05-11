import { Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as Code } from '../assets/images/code.svg';
import { ReactComponent as GithubLogo } from '../assets/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/linkedin-logo.svg';

export default function Root() {
  return (
    <>
      <header className="flex items-center justify-between bg-pink px-8 py-8 text-red">
        <nav className="flex items-center font-bold">
          <Code className="mr-7 w-16 md:w-20" />

          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames('mr-5', 'border-b-4', 'hover:text-[#ae0000]', {
                'border-transparent': !isActive,
                'border-[#ae0000]': isActive,
                'text-[#ae0000]': isActive,
              })
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              classNames('border-b-4', 'hover:text-[#ae0000]', {
                'border-transparent': !isActive,
                'border-[#ae0000]': isActive,
                'text-[#ae0000]': isActive,
              })
            }
          >
            About
          </NavLink>
        </nav>
        <div className="flex">
          <a
            href="https://github.com/dlrussel"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <GithubLogo className="h-10 w-10 fill-red hover:fill-[#ae0000]" />
          </a>
          <a
            href="https://www.linkedin.com/in/diane-russel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo className="h-10 w-10 fill-red hover:fill-[#ae0000]" />
          </a>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
