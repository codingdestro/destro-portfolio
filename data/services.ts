export interface service {
  title: string;
  subTitle: string;
  price: number;
  points: string[];
}
const services: service[] = [
  {
    title: "Basic",
    subTitle: "working with Html, Css and javascript",
    price: 5,
    points: [
      "working with javascript,html and css",
      "creating very basic designs",
      "fixing bugs",
      "optimizing javascript",
      "dd new feature in current project",
    ],
  },
  {
    title: "Moderate",
    subTitle: "build React webapp with typescript",
    price: 15,
    points: [
      "webapps using React.js + Typescript",
      "state management Redux/Zustand",
      "component designing",
      "code optimization",
      "project upgrade",
    ],
  },
  {
    title: "Advance",
    subTitle: "full-stack web development",
    price: 30,
    points: [
      "React.js + Next.js",
      "Node.js/bun.js",
      "database management ",
      "writing api's",
      "payment integration",
    ],
  },
];
export default services;
