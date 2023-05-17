import { ReactNode } from 'react';

export default function ScreenContainer({
  children,
}: {
  children?: [ReactNode];
}) {
  return (
    <div className="flex flex-col justify-stretch rounded-xl border-4 border-[#f1f1f1] bg-white font-fira-code drop-shadow-2xl">
      <div className="bg-[#f1f1f1] p-4">
        <span className="mr-2 inline-block h-5 w-5 rounded-full bg-[#bbbbbb]"></span>
        <span className="mr-2 inline-block h-5 w-5 rounded-full bg-[#bbbbbb]"></span>
        <span className="inline-block h-5 w-5 rounded-full bg-[#bbbbbb]"></span>
      </div>
      <div className="flex h-full flex-col items-center justify-center bg-white p-10 font-fira-code">
        {children}
      </div>
      ;
    </div>
  );
}
