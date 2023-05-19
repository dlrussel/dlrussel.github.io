import { ReactNode } from 'react';
import classNames from 'classnames';

export default function ScreenContainer({
  alignment = 'center',
  children,
}: {
  alignment?: 'center' | 'left';
  children?: [ReactNode] | ReactNode;
}) {
  const alignmentClass =
    alignment === 'center' ? 'items-center' : 'items-start';
  return (
    <div className="rounded-xl border-[1px] border-off-black bg-white font-fira-code drop-shadow-xl">
      <div className="flex h-full flex-col justify-stretch rounded-xl border-4 border-[#f1f1f1]">
        <div className="bg-[#f1f1f1] p-4">
          <span className="mr-2 inline-block h-5 w-5 rounded-full border-[1px] border-off-black bg-[#bbbbbb]"></span>
          <span className="mr-2 inline-block h-5 w-5 rounded-full border-[1px] border-off-black bg-[#bbbbbb]"></span>
          <span className="inline-block h-5 w-5 rounded-full border-[1px] border-off-black bg-[#bbbbbb]"></span>
        </div>
        <div
          className={classNames(
            'border-top-[1px] flex h-full flex-col justify-center rounded border-[1px] border-off-black bg-white p-5 font-fira-code sm:p-10',
            alignmentClass,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
