import { Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as Code } from '../assets/images/code.svg';
import { ReactComponent as GithubLogo } from '../assets/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/linkedin-logo.svg';

export default function Root() {
  return (
    <>
      <header className="flex items-center justify-between bg-pink px-8 py-8 text-off-black">
        <nav className="flex w-full items-center justify-between rounded-3xl border-[1px] border-off-black bg-white px-7 py-3 font-fira-code font-bold">
          <div className="flex items-center">
            <Code className="w-8 fill-off-black md:w-8" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(
                  'ml-5',
                  'border-[1px]',
                  'border-off-black',
                  'px-6',
                  'py-2',
                  'hover:drop-shadow-[3px_3px_rgba(52,43,50,1)]',
                  'rounded-2xl',
                  'bg-white',
                  {
                    'drop-shadow-[3px_3px_rgba(52,43,50,1)]': isActive,
                  },
                )
              }
              end
            >
              Diane Russel
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                classNames(
                  'mr-5',
                  'border-[1px]',
                  'border-off-black',
                  'px-6',
                  'py-2',
                  'hover:drop-shadow-[3px_3px_rgba(52,43,50,1)]',
                  'rounded-2xl',
                  'bg-white',
                  {
                    'drop-shadow-[3px_3px_rgba(52,43,50,1)]': isActive,
                  },
                )
              }
            >
              About
            </NavLink>
            <a
              href="https://github.com/dlrussel"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <GithubLogo className="h-8 w-8 fill-off-black hover:fill-[#ae0000]" />
            </a>
            <a
              href="https://www.linkedin.com/in/diane-russel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo className="h-8 w-8 fill-off-black hover:fill-[#ae0000]" />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
