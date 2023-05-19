import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
        >
          <svg
            className={`h-3 w-3 fill-current ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
          <svg
            className={`h-3 w-3 fill-current ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
          </svg>
        </button>
      </div>
      <div className={`flex flex-col sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <NavLink
          to="/"
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
          Home
        </NavLink>
        {[
          { label: 'About', path: '/about' },
          { label: 'Work', path: '/work' },
        ].map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              classNames(
                'mb-4',
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
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
