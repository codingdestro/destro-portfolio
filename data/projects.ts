export type ProjectsType = {
  name: string;
  desc: string;
  link: string;
  pic: string;
  points: string[];
};
const projects: ProjectsType[] = [
  {
    name: "GadgetWeb",
    desc: "e-comm web app",
    link: "/",
    pic: "/gadgetweb.png",
    points: [
      "created in React.js and Node.js",
      "Home, Cart and Order Pages",
      "User Auth",
    ],
  },
  {
    name: "PDF-Editor",
    desc: "App for extracting and merging the pdfs",
    link: "/",
    pic: "/pdf-editor.png",
    points: ["extract & delete pages", "merge two PDFs", "resize the pdf"],
  },
];

export default projects;
