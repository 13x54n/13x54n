const features = [
  {
    name: "Core JavaScript",
    description:
      "Started JavaScript since 2015, first I got amazed that I could change the background color of screen using CSS or JavaScript.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  },
  {
    name: "EVM Compatible Programming",
    description:
      "Before EVM Compatible Programming I had access to Java, and C thus it went seamless transition. I contributed to few but still need to conquer.",
    icon: "https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--600.png",
  },
  {
    name: "JS based framework",
    description:
      "My first choice is always a React.js, but later as per project requirements I started with Next.js and Handlebars since 2017.",
    icon: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
  },
  {
    name: "SQL & No-SQL Database",
    description:
      "Started with SQL simultaneouly with API using Java since 2016, and then shifted to MongoDB for MERN Stack mastering at 2017.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&usqp=CAU",
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-14 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Skills & Tools
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ingredients & Wand for Magic
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If I have to cook solutions for a problem that falls under my
            domain. My goto ingredients and spells would be following with
            former experiences.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:mt-12 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
            {features.map((feature, index) => (
              <div
                data-aos="fade-up"
                key={feature.name}
                className="relative pl-16"
                data-aos-delay={index*100}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                    <img
                      draggable="false"
                      src={feature.icon}
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
