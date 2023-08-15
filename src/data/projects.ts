export type Project = {
  title: string;
  techs: string[];
  link: string;
  description?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    isComingSoon: true,
    title: "KET Mobile App",
    techs: ["React", "Typescript", "html/css"],
    link: "/",
    description: "KET (Kelių Eismo Taisyklės) application is specifically developed for mobile platforms, offering a free and comprehensive platform for practicing KET-related questions and acquiring theoretical knowledge."
  },
  {
    title: "ZMINER",
    techs: ["C/C++", "C#", "Javascript", "html/css"],
    link: "https://blissful-northcutt-5d222e.netlify.app/",
    description: "Zminer is an intuitive and user-friendly Windows application for simplified cryptocurrency mining, making it easily accessible to all users.",
  },
  {
    title: "NetRenamer",
    techs: ["C#"],
    link: "https://github.com/Zenixas/NetRenamer",
    description: "NET RENAMER is an open-source Windows application for renaming and obscuring various elements within a .NET module, including methods, fields, classes, and others"
  },
  {
    title: "Zenfuscator",
    techs: ["C#"],
    link: "https://github.com/Zenixas/ZenFuscator",
    description: "ZenFuscator is an open-source obfuscation tool to safeguard .NET assemblies from reverse engineering efforts."
  },
];

export default projects;
