import code from './assets/images/code.svg';

const App = () => {
  return (
    <div className="bg-[#FFDEF6]">
      <header className="flex min-h-screen flex-col items-center justify-center text-[#E60000]">
        <img src={code} className="mb-6 w-20" alt="code tag" />
        <h1 className="mb-8 font-heading text-6xl">
          Hi, I&apos;m Diane Russel
        </h1>
        <p className="text-md">
          and I&apos;m full stack developer with a passion for making complex
          things simple.
        </p>

        <button
          type="button"
          className="my-6 rounded border-2 border-[#E60000] bg-white px-2 py-2 transition-all hover:bg-white/70"
          onClick={(e) => {
            window.location.href = 'mailto:dianerussel@rogers.com';
            e.preventDefault();
          }}
        >
          Get in touch
        </button>
      </header>
    </div>
  );
};

export default App;
