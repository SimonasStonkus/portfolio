"use client";
import {
  Button,
  Stack,
  Title,
  Text,
  Group,
  Container,
  Flex,
  Box,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { LinkedinLogo, GithubLogo, ReadCvLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "shredvision",
    title: "ShredVision",
    description:
      "An app that enables easy 1-on-1 coaching sessions for skiing and snowboarding. Once the user pays for the coaching session, the coach will review the users performance and leave feedback. The platform includes a 1-on-1 chat between users and coaches, so that all communication is maintained in platform",
    image: "/shredvision.webp",
    href: "",
    code: "",
    isMobileImage: true,
  },
  {
    id: "bizcrunch",
    title: "BizCrunch",
    description:
      "A platform for enabling the merger and acquisition process for both buyers and sellers. It helps prospective buyers find businesses that fit their criteria through a complicated set of filters and algorithms. Company owners interested in selling their business can get accurate valuations and connect with potential buyers.",
    image: "/bizcrunch.webp",
    href: "htts://bizcrunch.co",
    code: "",
    isMobileImage: false,
  },
  {
    id: "voxmail",
    title: "VoxMail",
    description:
      "A voice message based customer support widget for websites. Users can leave voice messages which get transcribed (and optionally translated) to text. The messages are then sent to the company email address.",
    image: "/voxmail.webp",
    href: "https://vox-mail.com",
    code: "",
    isMobileImage: false,
  },
  {
    id: "charactercrucible",
    title: "Character Crucible",
    description:
      "An AI powered character creation tool for tabletop roleplaying games. Describe your character in as much or as little detail as you want and the AI will generate a character sheet that is ready to play in minutes.",
    image: "/charactercrucible.webp",
    href: "https://charactercrucible.com",
    code: "",
    isMobileImage: false,
  },
  {
    id: "feedback",
    title: "Trinity Survey Feedback App",
    description:
      "An app made for the School of Chemistry in Trinity College. This was made in order to reduce monthly running costs of using a pre-existing service that provides many features that are not needed by the School of Chemistry. The app contains a basic survey interface, an admin dashboard, and the ability to store feedback locally while the browser is offline, which is uploaded once the browser regains connection.",
    image: "/feedback.webp",
    href: "https://trinity-feedback-app.vercel.app/",
    code: "",
    isMobileImage: false,
  },
  {
    id: "timezones",
    title: "Longitudinally accurate timezones",
    description:
      "Website to calculate what your timezone would be if you used your longitudinal position. Utilizes inbuilt locator API for getting location data from the user. Includes a game on guessing longitudinally accurate timezones of the 1000 most populous cities in the world.",
    image: "/timezones.webp",
    href: "https://timezones.stonkus.dev/",
    code: "https://github.com/SimonasStonkus/more-accurate-timezones",
    isMobileImage: false,
  },
  {
    id: "discordbot",
    title: "Steam Inventory Evaluator",
    description:
      "Built using the Steam Community API. After providing your steamid64, the bot fetches the contents of the inventory and then queries the market api to get values for each of the items, storing the total value for comparison over time.",
    image: "/discordBot.webp",
    href: "https://github.com/SimonasStonkus/Disc-Bot",
    code: "",
    isMobileImage: false,
  },
  {
    id: "posture",
    title: "Posture/Hydration Check",
    description:
      "Set an interval and press Play, to have a couple of beeps play every now and then to remind you to sit straight and drink water.",
    image: "/posture.webp",
    href: "https://https://posture-check.stonkus.dev/",
    code: "https://github.com/SimonasStonkus/posture-check",
    isMobileImage: false,
  },
];
const skills = [
  "Javascript/Typescript",
  "React.js",
  "Node.js",
  "Next.js",
  "Git",
  "HTML",
  "CSS",
  "SQL",
  "Python",
  "Java",
  "Kotlin",
  "C++",
];
export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 800);
    let viewedContainers: string[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !viewedContainers.includes(entry.target.id)
          ) {
            viewedContainers = [...viewedContainers, entry.target.id];

            if (viewedContainers.length % 2 === 0) {
              entry.target.classList.add("motion-preset-slide-up-left-lg");
            } else {
              entry.target.classList.add("motion-preset-slide-up-right-lg");
            }
            entry.target.classList.add("motion-opacity-in-100");
            entry.target.classList.add("[&&]:!opacity-100");
          }
        });
      },
      { threshold: 0.5 }
    );

    let viewedSkills: string[] = [];
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !viewedSkills.includes(entry.target.id)) {
            viewedSkills = [...viewedSkills, entry.target.id];
            setTimeout(() => {
              if (viewedSkills.length % 2 === 0) {
                entry.target.classList.add("motion-preset-slide-up-lg");
              } else {
                entry.target.classList.add("motion-preset-slide-up-lg");
              }
              entry.target.classList.add("motion-opacity-in-100");
              entry.target.classList.add("[&&]:!opacity-100");
            }, 100 * viewedSkills.length);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".projectContainer");
    const skills = document.querySelectorAll(".skillsContainer");

    items.forEach((item) => observer.observe(item));
    skills.forEach((skill) => skillsObserver.observe(skill));

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 800);
    });
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 69);
    });
    return () => {
      items.forEach((item) => observer.unobserve(item));
      skills.forEach((skill) => skillsObserver.unobserve(skill));
    };
  }, []);

  return (
    <Container
      className={`p-0 w-full ${isMobile ? "overflow-x-hidden" : ""} scroll`}
    >
      <Stack justify="center" align="center" className="p-6 pt-14 gap-8">
        <div className="navbar" id="navbar">
          <Text className="navbarText text-[12px]">
            <a href="#about">About</a>
          </Text>

          <Text className="navbarText text-[12px]">
            <a href="#projects">Projects</a>
          </Text>

          <Text className="navbarText text-[12px]">
            <a href="#skills">Skills</a>
          </Text>

          <Text className="navbarText text-[12px]">
            <a href="#contact">Contact Me</a>
          </Text>
        </div>

        <Stack
          justify="center"
          align="center"
          className="relative text-[1.5rem] font-[600] text-[#333] text-center"
        >
          <Image
            src="/profile.webp"
            alt="Simonas Stonkus"
            width={"250"}
            height={"250"}
            quality={100}
            style={{
              backgroundImage: "url(/profile.webp)",
              borderRadius: "50%",
              boxShadow: "0 0 35px 2px #b6e1e7",
              aspectRatio: "1/1",
            }}
          ></Image>

          <Title order={3} className="min-w-[300px] max-w-[600px] text-lg p-1">
            Hi! I&apos;m Simonas Stonkus, a software engineer with a background
            in Astrophysics and Relativity. I am currently working as a full
            stack engineer at Koduu, working on multiple projects primarily in
            Typescript, React and Node.js.
          </Title>
        </Stack>

        <Group className="w-full justify-center gap-2 flex-wrap">
          <Button
            component={Link}
            href="/download/Simonas_Stonkus_Resume.pdf"
            leftSection={<ReadCvLogo color="white" size={24} />}
            target="_blank"
            color="black"
            style={{ color: "white" }}
            radius="md"
          >
            Resume
          </Button>

          <Button
            component={Link}
            href="https://github.com/SimonasStonkus"
            leftSection={<GithubLogo color="white" size={24} />}
            target="_blank"
            color="black"
            style={{ color: "white" }}
            radius="md"
          >
            Github
          </Button>

          <Button
            component={Link}
            href="https://www.linkedin.com/in/simonas-stonkus/"
            target="_blank"
            leftSection={<LinkedinLogo color="white" size={24} />}
            color="black"
            style={{ color: "white" }}
            radius="md"
          >
            LinkedIn
          </Button>
        </Group>

        <Stack
          justify="center"
          align="center"
          className="gap-1 p-2 relative text-[#333] text-center"
        >
          <Title order={3} id="about" className="text-lg">
            About me
          </Title>
          <Text className="m-4 font-normal min-w-[300px] max-w-[600px] text-base p-1">
            My undergraduate and postgraduate studies provided me with strong
            baseline programming knowledge. Through assignments, research
            projects and personal work I primarily focused on working with data.
            Following the completion of my postgraduate degree, I began my
            pursuit of software engineering as a career. I began by expanding my
            overall knowledge through courses on programming languages such as
            Java, Kotlin and C++. I then started to focus on web development,
            learning Javascript and React. Since January of 2024, I have been
            working as a full stack software engineer at Koduu, working on
            multiple internal and external projects.
          </Text>
        </Stack>

        <Stack className="gap-6 p-2 text-[#333] text-center" id="projects">
          <Title order={4} className="text-2xl font-medium">
            Projects
          </Title>
          {projects.map((project) => {
            return (
              <Flex
                direction={isMobile ? "column" : "row"}
                gap={8}
                className={`opacity-0 bg-[#e7e2d1] border-[2px] border-[#b6e1e7] rounded-lg justify-between items-center projectContainer w-full min-w-[325px] max-w-fit p-2 ${
                  !isMobile && projects.indexOf(project) % 2 !== 0
                    ? "!flex-row-reverse"
                    : ""
                }`}
                key={project.id}
                id={project.id}
              >
                <Text
                  component={"span"}
                  className={`${
                    isMobile ? "max-w-full" : "max-w-[50%]"
                  } flex flex-col gap-2 justify-center items-center`}
                >
                  <Text className="text-base font-bold">{project.title}</Text>
                  <Text className="text-xs">{project.description}</Text>

                  <Button
                    color="#b6e1e7"
                    radius="md"
                    disabled={!project.href}
                    component={Link}
                    href={project.href}
                    className="max-w-fit"
                  >
                    {project.href ? "Visit the website" : "Coming soon"}
                  </Button>
                </Text>

                <Container
                  className="rounded-lg object-contain w-fit"
                  p={0}
                  m={0}
                  style={{
                    overflow: "hidden",
                    maxHeight:
                      project.isMobileImage && isMobile ? "500px" : "380px",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.id}
                    width={350}
                    height={project.isMobileImage && isMobile ? 500 : 380}
                    className="!w-full rounded-lg object-cover bg-clip-content"
                  />
                </Container>
              </Flex>
            );
          })}
        </Stack>
        <Title order={3} className="text-2xl font-medium">
          Skills
        </Title>
        <Group
          className="gap-1 w-full max-w-[600px] justify-center"
          id="skills"
        >
          {skills.map((skill) => {
            return (
              <Box
                m={0}
                className="opacity-0 text-base p-2 bg-[#e7e2d1] border-[2px] border-[#b6e1e7] rounded-lg min-w-4 skillsContainer"
                key={skill}
                id={skill}
              >
                {skill}
              </Box>
            );
          })}
        </Group>

        <Stack
          justify="center"
          align="center"
          className="gap-6 p-2 text-[#333] text-center"
          id="contact"
        >
          <Title order={3} className="text-2xl font-medium">
            Contact me on LinkedIn
          </Title>
        </Stack>
        <div
          className={`backtotop p-2 ${
            scrolled ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <a href="#">Back to top</a>
        </div>
      </Stack>
    </Container>
  );
}
