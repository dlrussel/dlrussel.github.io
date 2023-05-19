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
            I take pride in prioritizing code quality, maintaining thorough test
            coverage, and embracing an iterative development approach. I am
            committed making accessibility an integral part of the development
            process and never treating it as an afterthought. I am passionate
            about the craft of software development, fostering a culture of
            constant learning and knowledge sharing within teams. I am always an
            advocate for the importance of addressing technical debt and
            dedicating time the to ensure long-term stability and scalability of
            the things that I build.
          </p>
        </ScreenContainer>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <ScreenContainer alignment="left">
            <h2 className="mb-3 text-left font-archivo text-xl tracking-tight">
              Transactional Notifications
            </h2>
            <p>
              Built a transactional notifications system to programatically send
              targeted notifications with user specific information to partners
              based on their data and activity. This allowed us to surface
              important information to partners from within the partners
              dashboard enabled timely, customizable and relevant communication
              for Shopify partners regarding their business.
            </p>
          </ScreenContainer>
          <ScreenContainer alignment="left">
            <h2 className="mb-3 text-left font-archivo text-xl tracking-tight">
              Shopify Partners Dashboard Homepage
            </h2>
            <p>
              Built the Shopify Partners Dashboard Homepage to create a
              streamlined experience for partners to access important
              information about their business. Created components that allow
              partners to easily carry out key actions to increase productivity
              and surface relevant insignhts to help them grow their business.
            </p>
          </ScreenContainer>
        </div>
      </div>
    </section>
  );
}
