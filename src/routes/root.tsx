import { Outlet, NavLink } from 'react-router-dom';

import { ReactComponent as Code } from '../assets/images/code.svg';
import { ReactComponent as GithubLogo } from '../assets/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/linkedin-logo.svg';

export default function Root() {
  return (
    <>
      <header className="flex items-center justify-between bg-[#FFDEF6] px-8 py-8 text-red">
        <nav className="flex items-center">
          <Code className="w-16 pr-5 md:w-24" />
          <NavLink
            to="/"
            className="pr-5 font-bold"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : 'none',
                color: isActive ? '#ae0000' : '#e60000',
              };
            }}
            end
          >
            Home
          </NavLink>
          <NavLink
            className="font-bold"
            to="/about"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : 'none',
                color: isActive ? '#ae0000' : '#e60000',
              };
            }}
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
