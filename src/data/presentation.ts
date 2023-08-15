type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "zenixas@protonmail.com",
  title: "Hi, I’m David 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *Full Stack Developer* currently studying at university. I am currently working on mobile app development using *React and Typescript*.",
  socials: [

    {
      label: "Github",
      link: "https://github.com/zenixas",
    },
  ],
};

export default presentation;
