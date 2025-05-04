import dummy from "@/Public/dummy.webp";
import discordPy from "@/Public/DiscordPy.webp";
import springLogo from "@/Public/Spring_boot_logo.webp";

const database = [
  {
    name: "EndpointAPI CRUD",
    image: springLogo,
    description:
      "Simple Spring Boot Web Application that provides RESTful API endpoints",
    languages: "Java, HTML, CSS",
    url: "https://github.com/Hansennico/EndpointAPICRUD",
  },
  {
    name: "Bulletin Board",
    image: springLogo,
    description:
      "Simple bulletin board web application using Spring Boot Web Framework",
    languages: "Java, HTML, CSS",
    url: "https://github.com/Hansennico/Bulletin-Implementation/tree/main",
  },
  {
    name: "WTIX",
    image: springLogo,
    description:
      "A simple web application for a movie ticketing system using Spring Boot Web Framework",
    languages: "Java, HTML, CSS",
    url: "",
  },
  {
    name: "Discord Bot Py",
    image: discordPy,
    description:
      "A simple discord bot using python, that can reply spesific message, and use command",
    languages: "Python",
    url: "https://github.com/Hansennico/Discord-Bot",
  },
  {
    name: "Dummy Project",
    image: dummy,
    description: "Lorem Ipsum",
    languages: "",
    url: "",
  },
];

export default database;
