import { ReactComponent as Code } from './assets/images/code.svg';
import { ReactComponent as GithubLogo } from './assets/images/github-logo.svg';
import { ReactComponent as LinkedinLogo } from './assets/images/linkedin-logo.svg';
import AboutSection from './components/AboutSection';

import SystemsImage from './components/SystemsImage';
const App = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-[#FFDEF6] px-8 py-8 text-[#E60000]">
        <Code className="h-15 w-24" />
        <div className="flex">
          <a
            href="https://github.com/dlrussel"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <GithubLogo className="h-10 w-10 fill-[#E60000] hover:fill-[#ae0000]" />
          </a>
          <a
            href="https://www.linkedin.com/in/diane-russel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo className="h-10 w-10 fill-[#E60000] hover:fill-[#ae0000]" />
          </a>
        </div>
      </header>
      <section
        id="Home"
        className="flex min-h-screen flex-col items-center justify-center
        bg-[#FFDEF6] p-10 text-[#E60000]"
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
          className="my-6 rounded-lg border-2 border-[#E60000] bg-white px-5 py-3 font-rubikMono uppercase transition-all hover:border-[#ae0000] hover:bg-white/70 hover:text-[#ae0000]"
          onClick={(e) => {
            window.location.href = 'mailto:dianerussel@rogers.com';
            e.preventDefault();
          }}
        >
          Get in touch
        </button>
        <SystemsImage />
      </section>
      <AboutSection />
    </>
  );
};

export default App;
