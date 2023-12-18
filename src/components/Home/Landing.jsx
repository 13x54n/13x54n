const features = [
  {
    name: "Web Applications",
    description:
      "My first and most powerful superpower is modeling the web as I want it to be. Still trying to get into each corner of possibilities that web tools can provide.",
    icon: "🕸️",
  },
  {
    name: "Blockchain",
    description:
      "Confident enough to provide services, build products (DeFi, Tokens, NFTs, etc.) but I'm still searching for a perfect planet to land cause it's an universe on itself.",
    icon: "📦",
  },
];

export default function Landing() {
  return (
    <div className="overflow-hidden bg-white py-11 sm:py-19.5 border-b-2 sm:pb-19.8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div data-aos="fade-up">
            <div className="lg:max-w-lg">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Available
              </span>

              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Building more open web, one block at a time.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I believe solving the human needs are just tweaks of the
                technologies. And trying to learn this language that machine
                communicates with (<i>Combinations of 0's & 1's</i>).
              </p>
              <dl className="mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.icon}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            data-aos="fade-up"
            src="https://ik.imagekit.io/13x54r/Landing.jpg?updatedAt=1702890691354"
            alt="Portfolio"
            className="w-[23rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
