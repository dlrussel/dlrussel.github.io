import SystemsImage from '../components/SystemsImage';

export default function Home() {
  return (
    <section
      id="Home"
      className="grid min-h-[calc(100vh-118px)] bg-pink px-5 pb-10 text-red sm:min-h-[calc(100vh-132px)]
         sm:px-10 sm:pb-16 md:px-20"
    >
      <div className="flex h-full flex-col items-center justify-center rounded-xl border-4 border-off-black bg-white p-10 font-fira-code drop-shadow-[5px_5px_rgba(52,43,50,1)] sm:p-14 sm:drop-shadow-[15px_15px_rgba(52,43,50,1)] lg:py-24">
        <h1 className="mb-6 font-archivo text-6xl uppercase tracking-tighter">
          Hi, I&apos;m Diane Russel
        </h1>
        <p className="text-md font-fira-code uppercase">
          and I&apos;m full stack developer with a passion for making complex
          things simple.
        </p>

        <button
          type="button"
          className="my-6 rounded-3xl border-[1px] border-off-black bg-white px-8 py-3 font-fira-code font-bold uppercase text-off-black drop-shadow-[1px_2px_rgba(52,43,50,1)] duration-200 hover:-translate-y-1 hover:drop-shadow-[1px_7px_rgba(52,43,50,1)] hover:ease-[cubic-bezier(0.5,2.3,0.7,0.7)]"
          onClick={(e) => {
            window.location.href = 'mailto:dianerussel2142@gmail.com';
            e.preventDefault();
          }}
        >
          Get in touch
        </button>
        <SystemsImage />
      </div>
    </section>
  );
}
