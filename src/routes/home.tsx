import SystemsImage from '../components/SystemsImage';

export default function Home() {
  return (
    <section
      id="Home"
      className="flex min-h-screen flex-col items-center justify-center
        bg-pink p-10 text-red"
    >
      <h1 className="mb-6 font-archivo text-6xl uppercase tracking-tight">
        Hi, I&apos;m Diane Russel
      </h1>
      <p className="text-md font-firaCode uppercase">
        and I&apos;m full stack developer with a passion for making complex
        things simple.
      </p>

      <button
        type="button"
        className="my-6 rounded-lg border-2 border-red bg-white px-5 py-3 font-rubikMono uppercase transition-all hover:border-[#ae0000] hover:bg-white/70 hover:text-[#ae0000]"
        onClick={(e) => {
          window.location.href = 'mailto:dianerussel@rogers.com';
          e.preventDefault();
        }}
      >
        Get in touch
      </button>
      <SystemsImage />
    </section>
  );
}
