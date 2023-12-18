import { useEffect, useState } from "react";

const BLOGS_QUERY = `
query GetUserArticles($page: Int!) {
    user(username: "13x54n") {
        publication {
            posts(page: $page) {
                title
                brief
                coverImage
                slug
            }
        }
    }
}
`;

const urls = [
  "https://13x54n.com/lets-create-your-own-google-photos-with-javascript",
  "https://13x54n.com/get-user-geo-information-without-api-in-js",
  "https://13x54n.com/tech-founders-need-to-rethink-about-mvp",
];

async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    gql(BLOGS_QUERY, { page: 0 }).then((res) => {
      console.log(res.data.user.publication.posts);
      setBlogs(res?.data.user.publication.posts.splice(0, 3));
    });
  }, []);
  return (
    <div className="bg-white border-t py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 pb-10">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Blogs & Articles
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            All my blogs are hosted & served separately on Hashnode.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 place-items-start lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs &&
            blogs.map((post, index) => (
              <article
                key={index}
                className="flex max-w-xl flex-col items-start justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={urls[index]} target="_blank">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.brief}
                  </p>
                </div>
                <div className="relative mt-5 flex items-center gap-x-4">
                  <img
                    src="https://ik.imagekit.io/13x54r/lexysImage-1702270067083-31292941_4NLcUu3f2.jpeg?updatedAt=1702270067522"
                    alt=""
                    draggable="false"
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="https://13x54n.com/" target="_blank">
                        <span className="absolute inset-0" />
                        Laxman Rai
                      </a>
                    </p>
                    <p className="text-gray-600">Writer & Developer</p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
