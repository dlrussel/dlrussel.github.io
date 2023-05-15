import SystemsImage from '../components/SystemsImage';

export default function Home() {
  return (
    <section
      id="Home"
      className="flex min-h-[calc(100vh-118px)] flex-col items-center justify-center bg-pink
        px-10 pb-10 text-red sm:min-h-[calc(100vh-132px)]"
    >
      <h1 className="mb-6 font-archivo text-6xl uppercase tracking-tight">
        Hi, I&apos;m Diane Russel
      </h1>
      <p className="text-md font-fira-code uppercase">
        and I&apos;m full stack developer with a passion for making complex
        things simple.
      </p>

      <button
        type="button"
        className="my-6 rounded-2xl border-2 border-off-black bg-white px-8 py-3 font-fira-code font-bold uppercase text-off-black drop-shadow-[3px_3px_rgba(52,43,50,1)] transition-all hover:text-[#ae0000]"
        onClick={(e) => {
          window.location.href = 'mailto:dianerussel2142@gmail.com';
          e.preventDefault();
        }}
      >
        Get in touch
      </button>
      <SystemsImage />
    </section>
  );
}
