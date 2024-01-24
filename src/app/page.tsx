import { Button } from "@mantine/core";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileCv,
} from "@tabler/icons-react";

export default function Page() {
  return (
    <div className="container">
      <div className="navbar" id="navbar">
        <span className="navbarText">
          <a href="#about">About</a>
        </span>

        <span className="navbarText">
          <a href="#projects">Projects</a>
        </span>

        <span className="navbarText">
          <a href="#skills">Skills</a>
        </span>

        <span className="navbarText">
          <a href="#contact">Contact Me</a>
        </span>
      </div>

      <div className="title">
        <img
          src="/profile.jpg"
          alt="Simonas Stonkus"
          style={{
            backgroundImage: "url(/profile.jpg)",
            borderRadius: "50%",
            boxShadow: "0 0 35px 2px cornflowerblue",
            width: "10vw",
            minWidth: "10rem",
            aspectRatio: "1/1",
          }}
        ></img>

        <h3
          style={{
            minWidth: "300px",
            width: "40vw",
            fontSize: "1.2rem",
            padding: "0 3vw 0 3vw",
          }}
        >
          Hi! I&apos;m Simonas Stonkus, a recent Astrophysics and Relativity
          graduate that has switched to software engineering. My current focus
          is in web development using React, Next.Js and Typescript.
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <Button
          component={Link}
          href="/download/Simonas_Stonkus_Resume.pdf"
          leftSection={<IconFileCv color="white" />}
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
          leftSection={<IconBrandGithub color="white" />}
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
          leftSection={<IconBrandLinkedin color="white" />}
          color="black"
          style={{ color: "white" }}
          radius="md"
        >
          LinkedIn
        </Button>
      </div>

      <section className="about">
        <h3 id="about" style={{ fontSize: "1.5rem" }}>
          About me
        </h3>
        <p
          style={{
            margin: "15px",
            fontWeight: "normal",
            minWidth: "300px",
            width: "40vw",
            fontSize: "1rem",
            left: "50%",
            padding: "0 3vw 0 3vw",
          }}
        >
          During my undergraduate and postgraduate studies I worked extensively
          with Python. Through assignments, projects and personal work I mainly
          focused on data analysis and visualization. Following my studies, I
          decided to pursue software engineering as a career and have since
          expanded my skillset by taking courses on Java, Kotlin, C++ on top of
          learning more about data structures and algorithms. I have also been
          working on personal projects using React, and Next.Js.
        </p>
      </section>

      <div className="projects" id="projects">
        <h3 style={{ fontSize: "1.5rem" }}>Projects</h3>

        <div className="projectContainer">
          <span>
            <p
              style={{
                margin: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Longitudinally accurate timezones
            </p>
            <p
              style={{
                margin: "15px",
                fontSize: "0.8rem",
                maxWidth: "40rem",
                left: "50%",
              }}
            >
              Website to calculate what your timezone would be if you used your
              longitudinal position. Utilizes inbuilt locator API for getting
              location data from the user. Includes a game on guessing
              longitudinally accurate timezones of the 1000 most populous cities
              in the world.
            </p>

            <Link href="https://timezones.stonkus.dev/" target="_blank">
              {""}
              <Button color="cornflowerblue" radius="md">
                Visit the website
              </Button>
            </Link>

            <Link
              href="https://github.com/SimonasStonkus/more-accurate-timezones"
              target="_blank"
            >
              {" "}
              <Button color="cornflowerblue" radius="md">
                View the code
              </Button>
            </Link>
          </span>
          <img
            src="/timezones.png"
            alt="timezones"
            style={{
              objectFit: "cover",
              minWidth: "250px",
              maxWidth: "17vw",
              borderRadius: "0.5rem",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </div>

        <div className="projectContainer">
          <span>
            <p
              style={{
                margin: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Steam Inventory Evaluator
            </p>
            <p
              style={{
                margin: "15px",
                fontSize: "0.8rem",
                maxWidth: "40rem",
                left: "50%",
              }}
            >
              Built using the Steam Community API. After providing your
              steamid64, the bot fetches the contents of the inventory and then
              queries the market api to get values for each of the items,
              storing the total value for comparison over time.
            </p>
            <div className="projectButtonContainer">
              <Link
                href="https://github.com/SimonasStonkus/Disc-Bot"
                target="_blank"
              >
                {" "}
                <Button color="cornflowerblue" radius="md">
                  View the code
                </Button>
              </Link>
            </div>
          </span>
          <img
            src="/discordBot.png"
            alt="discordBot"
            style={{
              objectFit: "cover",
              minWidth: "250px",
              maxWidth: "17vw",
              borderRadius: "0.5rem",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </div>

        <div className="projectContainer">
          <span>
            <p
              style={{
                margin: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Posture/Hydration Check
            </p>
            <p
              style={{
                margin: "15px",
                fontSize: "0.8rem",
                maxWidth: "40rem",
                left: "50%",
              }}
            >
              Set an interval and press Play, to have a couple of beeps play
              every now and then to remind you to sit straight and drink water.
            </p>

            <Link
              href="https://https://posture-check.stonkus.dev/"
              target="_blank"
            >
              {""}
              <Button color="cornflowerblue" radius="md">
                Visit the website
              </Button>
            </Link>

            <Link
              href="https://github.com/SimonasStonkus/posture-check"
              target="_blank"
            >
              {" "}
              <Button color="cornflowerblue" radius="md">
                View the code
              </Button>
            </Link>
          </span>
          <img
            src="/posture.png"
            alt="posture"
            style={{
              objectFit: "cover",
              minWidth: "250px",
              maxWidth: "17vw",
              borderRadius: "0.5rem",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </div>
      </div>
      <h3 style={{ fontSize: "1.5rem" }}>Skills</h3>
      <div className="skills" id="skills">
        <div className="skillsContainer">Python</div>
        <div className="skillsContainer">Java/TypeScript</div>
        <div className="skillsContainer">Next.js</div>
        <div className="skillsContainer">Git</div>
        <div className="skillsContainer">HTML</div>
        <div className="skillsContainer">CSS</div>
        <div className="skillsContainer">SQL</div>
        <div className="skillsContainer">React</div>
        <div className="skillsContainer">Java</div>
        <div className="skillsContainer">Kotlin</div>
        <div className="skillsContainer">C++</div>
        <div className="skillsContainer">R</div>
      </div>

      <div className="contact" id="contact">
        <h3 style={{ fontSize: "1.5rem" }}>Contact me on LinkedIn</h3>
      </div>
      <div className="backtotop">
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}
