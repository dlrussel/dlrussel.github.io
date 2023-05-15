import { Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

import { ReactComponent as Code } from '../assets/images/code.svg';
import { ReactComponent as GithubLogo } from '../assets/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/linkedin-logo.svg';

export default function Root() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-pink px-8 py-8 text-off-black">
        <nav className="rounded-3xl border-[1px] border-off-black bg-white px-7 py-3 font-fira-code font-bold drop-shadow-xl">
          {/* mobile */}
          <div className="block sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
            >
              <svg
                className={`h-3 w-3 fill-current ${
                  isOpen ? 'hidden' : 'block'
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
              <svg
                className={`h-3 w-3 fill-current ${
                  isOpen ? 'block' : 'hidden'
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
              </svg>
            </button>
          </div>
          <div
            className={`flex flex-col sm:hidden ${isOpen ? 'block' : 'hidden'}`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(
                  'mt-4',
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
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                classNames(
                  'my-4',
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
              About
            </NavLink>
          </div>

          <div className="hidden w-full items-center justify-between sm:flex ">
            <div className="tems-center flex">
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
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
