import ScreenContainer from '@/components/ScreenContainer';

export default function About() {
  return (
    <section
      id="About"
      className="grid min-h-screen place-content-center bg-[#FAFBFF] p-10 text-off-black lg:p-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="mb-6 font-archivo text-5xl uppercase tracking-tight">
          About Me
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

        <h3 className="mb-6 mt-12 border-b-2 border-off-black font-archivo text-3xl uppercase tracking-tight">
          Work Experience
        </h3>

        <ScreenContainer alignment="left">
          <h4 className="mb-2 font-archivo text-xl tracking-tight">
            Full Stack Developer - Shopify
          </h4>
          <ul className="text-md list-outside list-disc pl-6 font-fira-code">
            <li className="mb-4">
              Developed and maintained features on large-scale Ruby on Rails
              applications with millions of users worldwide, using best
              practices in software development and working closely with
              cross-functional teams to deliver high-quality code on tight
              timelines.
            </li>
            <li className="mb-4">
              Developed new front-end components using React and improving
              existing ones to create scalable, reusable, and accessible user
              interfaces.
            </li>
            <li className="mb-4">
              Led the back-end development effort for the Shopify Partners
              homepage dashboard. Scoped out all required data and built
              operational logic in Ruby to access it. Created new fields on the
              GraphQL Rails API and wrote queries and mutations to fetch the
              data using Apollo Client. Leveraged Apollo Client features to
              delay execution of the queries until needed, reducing any
              unnecessary API calls. Implemented Lodash debouncing to prevent
              multiple API calls for the same data within a short period of time
              resulting in a faster, optimized dashboard and improved overall
              user experience.
            </li>
            <li className="mb-4">
              Developed and maintained comprehensive test suites using Jest and
              RSpec to ensure code quality on the front-end and back-end of
              applications. Utilized various testing frameworks and tools, such
              as Factory Bot and Faker, to generate test data and streamline the
              testing process.
            </li>
            <li className="mb-4">
              Championed the build phase of the Shopify Partners directory to
              provide Shopify merchants a way to connect with qualified industry
              professionals. Collaborated with product managers and designers to
              scope the work required while managing stakeholder expectations in
              order to identify, prioritize and ship by the deadline.
            </li>
            <li className="mb-4">
              Onboarded new team members by providing guidance and training on
              development processes, code standards, and business context.
            </li>
            <li className="mb-4">
              Participated in thorough code reviews, providing constructive
              feedback and identifying potential issues early on in the
              development process, leading to higher quality code and fewer bugs
              in production.
            </li>
            <li className="mb-4">
              Improved the efficiency and scalability of the platform by
              implementing optimizations, refactoring code, and improving
              reliability through effective testing and monitoring with Datadog
              as well as Bugsnag to monitor the application and quickly identify
              and resolve issues before users were impacted.
            </li>
          </ul>
        </ScreenContainer>
      </div>
    </section>
  );
}
