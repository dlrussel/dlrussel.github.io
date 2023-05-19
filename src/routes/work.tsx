import ScreenContainer from '../components/ScreenContainer';

export default function Work() {
  return (
    <section
      id="Work"
      className="grid min-h-[calc(100vh-118px)] place-content-center bg-pink px-5 pb-10 text-off-black sm:min-h-[calc(100vh-132px)] sm:px-10 sm:pb-16 md:px-20"
    >
      <div className="mt-8 max-w-screen-lg">
        <h2 className="mb-6 font-archivo text-5xl uppercase tracking-tighter">
          How I Work
        </h2>
        <ScreenContainer>
          <p className="text-md">
            I did my formal education at the University of Waterloo in user
            experience design before realizing that my true passion is making
            computers do my bidding and transitioning into software development.
            When I&apos;m not staring at a screen, you can either find me
            running for hours just to end up in the same place I started, or
            trying to convince my cat that I&apos;m in charge. I can&apos;t
            resist a challenge and when it comes to code I believe in creating
            maintainable, performant, accessible and secure solutions that are
            not just functional, but also elegant in their simplicity.
          </p>
        </ScreenContainer>

        <div className="mt-5 grid grid-cols-2 gap-5">
          <ScreenContainer>
            <h2 className="font-archivo text-xl tracking-tight">Project</h2>
          </ScreenContainer>
          <ScreenContainer>
            <h2 className="font-archivo text-xl tracking-tight">Project</h2>
          </ScreenContainer>
          <ScreenContainer>
            <h2 className="font-archivo text-xl tracking-tight">Project</h2>
          </ScreenContainer>
        </div>
      </div>
    </section>
  );
}
