import code from './assets/images/code.svg';
import githubLogo from './assets/images/github-logo.svg';
import linkedinLogo from './assets/images/linkedin-logo.svg';
import systemsImage from './assets/images/systems-image.svg';

const App = () => {
  return (
    <div className="bg-[#FFDEF6] px-8 py-8">
      <header className="flex items-center justify-between">
        <img src={code} className="w-24" alt="code tag logo" />
        <div className="flex">
          <a
            href="https://github.com/dlrussel"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <img src={githubLogo} className="w-10" alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/diane-russel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} className="w-10" alt="linkedin icon" />
          </a>
        </div>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-center text-[#E60000]">
        <h1 className="mb-6 font-archivo text-6xl uppercase tracking-tight">
          Hi, I&apos;m Diane Russel
        </h1>
        <p className="text-md font-firaCode uppercase">
          and I&apos;m full stack developer with a passion for making complex
          things simple.
        </p>

        <button
          type="button"
          className="my-6 rounded-lg border-2 border-[#E60000] bg-white px-5 py-3 font-rubikMono uppercase transition-all hover:bg-white/70"
          onClick={(e) => {
            window.location.href = 'mailto:dianerussel@rogers.com';
            e.preventDefault();
          }}
        >
          Get in touch
        </button>
        <img src={systemsImage} alt="design graphic" />
      </div>
    </div>
  );
};

export default App;
