import { ReactNode } from 'react';

export default function ScreenContainer({
  children,
}: {
  children?: [ReactNode] | ReactNode;
}) {
  return (
    <div className="rounded-xl border-[1px] border-off-black bg-white font-fira-code drop-shadow-xl">
      <div className="flex h-full flex-col justify-stretch rounded-xl border-4 border-[#f1f1f1]">
        <div className="bg-[#f1f1f1] p-4">
          <span className="mr-2 inline-block h-5 w-5 rounded-full border-[1px] border-off-black bg-[#bbbbbb]"></span>
          <span className="mr-2 inline-block h-5 w-5 rounded-full border-[1px] border-off-black bg-[#bbbbbb]"></span>
          <span className="inline-block h-5 w-5 rounded-full border-[1px] border-off-black bg-[#bbbbbb]"></span>
        </div>
        <div className="border-top-[1px] flex h-full flex-col items-center justify-center rounded border-[1px] border-off-black bg-white p-10 font-fira-code">
          {children}
        </div>
      </div>
    </div>
  );
}
