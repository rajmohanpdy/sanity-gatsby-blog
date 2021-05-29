export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b1b93d45107bbbefeca1d8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-64jcfmw5",
                  apiId: "5d779579-5789-4981-9dce-21bec5fb3463",
                },
                {
                  buildHookId: "60b1b93d45107bcbd4eca005",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-m81ca54i",
                  apiId: "1aef558c-3884-413f-b669-6f88d087fbe4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rajmohanpdy/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-m81ca54i.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
