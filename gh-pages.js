const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/sazzledazzle/job-listings-with-filtering.git",
    user: {
      name: "Sarah",
      email: "",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
