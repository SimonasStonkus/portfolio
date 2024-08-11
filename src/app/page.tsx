import { Button } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
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
        <Image
          src="/profile.jpg"
          alt="Simonas Stonkus"
          width={"250"}
          height={"250"}
          style={{
            backgroundImage: "url(/profile.jpg)",
            borderRadius: "50%",
            boxShadow: "0 0 35px 2px cornflowerblue",
            aspectRatio: "1/1",
          }}
        ></Image>

        <h3
          style={{
            minWidth: "400px",
            width: "40vw",
            fontSize: "1.2rem",
            padding: "0 3vw 0 3vw",
          }}
        >
          Hi! I&apos;m Simonas Stonkus, a software engineer with a background in
          Astrophysics and Relativity. I am currently working as a full stack
          engineer at Koduu, working on multiple projects primarily in
          Typescript, React and Node.js.
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
        <h3 id="about" style={{ fontSize: "1.5rem", marginBlockEnd: "0px" }}>
          About me
        </h3>
        <p
          style={{
            margin: "15px",
            fontWeight: "normal",
            minWidth: "400px",
            width: "40vw",
            fontSize: "1rem",
            left: "50%",
            padding: "0 3vw 0 3vw",
          }}
        >
          My undergraduate and postgraduate studies provided me with strong
          baseline programming knowledge. Through assignments, research projects
          and personal work I primarily focused on working with data. Following
          the completion of my postgraduate degree, I began my pursuit of
          software engineering as a career. I began by expanding my overall
          knowledge through courses on programming languages such as Java,
          Kotlin and C++. I then began to focus on web development, learning
          Javascript and React. I have since worked on multiple projects, both
          personal and professional, to further develop my skills in these
          areas. As of January 2024, I have been working at Koduu as a full
          stack software engineer.
        </p>
      </section>

      <div className="projects" id="projects">
        <h3 style={{ fontSize: "1.5rem" }}>Projects</h3>
        <div className="projectContainer">
          <span style={{ marginBottom: "5px" }}>
            <p
              style={{
                margin: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              BizCrunch
            </p>
            <p
              style={{
                margin: "15px",
                fontSize: "0.8rem",
                maxWidth: "40rem",
                left: "50%",
              }}
            >
              A platform for enabling the merger and acquisition process for
              both buyers and sellers. It helps prospective buyers find
              businesses that fit their criteria through a complicated set of
              filters and algorithms. Company owners interested in selling their
              business can get accurate valuations and connect with potential
              buyers.
            </p>
            <Link href="https://bizcrunch.co" target="_blank">
              <Button color="cornflowerblue" radius="md">
                Visit the website
              </Button>
            </Link>
          </span>
          <Image
            src="/bizcrunch.png"
            alt="bizcrunch"
            height={337.5}
            width={412.5}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>
        <div className="projectContainer">
          <span style={{ marginBottom: "5px" }}>
            <p
              style={{
                margin: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              VoxMail
            </p>
            <p
              style={{
                margin: "15px",
                fontSize: "0.8rem",
                maxWidth: "40rem",
                left: "50%",
              }}
            >
              A voice message based customer support widget for websites. Users
              can leave voice messages which get transcribed (and optionally
              translated) to text. The messages are then sent to the company
              email address.
            </p>
            <Link href="https://vox-mail.com" target="_blank">
              <Button color="cornflowerblue" radius="md">
                Visit the website
              </Button>
            </Link>
          </span>
          <Image
            src="/voxmail.png"
            alt="voxmail"
            height={337.5}
            width={412.5}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>

        <div className="projectContainer">
          <span style={{ marginBottom: "5px" }}>
            <p
              style={{
                margin: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Character Crucible
            </p>
            <p
              style={{
                margin: "15px",
                fontSize: "0.8rem",
                maxWidth: "40rem",
                left: "50%",
              }}
            >
              An AI powered character creation tool for tabletop roleplaying
              games. Describe your character in as much or as little detail as
              you want and the AI will generate a character sheet that is ready
              to play in minutes.
            </p>
            <Link href="https://charactercrucible.com" target="_blank">
              {""}
              <Button color="cornflowerblue" radius="md">
                Visit the website
              </Button>
            </Link>
          </span>
          <Image
            src="/charactercrucible.png"
            alt="charactercrucible"
            height={337.5}
            width={412.5}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>
        <div className="projectContainer">
          <span style={{ marginBottom: "5px" }}>
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
          <Image
            src="/timezones.png"
            alt="timezones"
            height={337.5}
            width={412.5}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>

        <div className="projectContainer">
          <span style={{ marginBottom: "5px" }}>
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
          <Image
            src="/discordBot.png"
            alt="discordBot"
            height={337.5}
            width={412.5}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>

        <div className="projectContainer">
          <span style={{ marginBottom: "5px" }}>
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
          <Image
            src="/posture.png"
            alt="posture"
            height={337.5}
            width={412.5}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>
      </div>
      <h3 style={{ fontSize: "1.5rem" }}>Skills</h3>
      <div className="skills" id="skills">
        <div className="skillsContainer">Javascript/Typescript</div>
        <div className="skillsContainer">React.js</div>
        <div className="skillsContainer">Node.js</div>
        <div className="skillsContainer">Next.js</div>
        <div className="skillsContainer">Git</div>
        <div className="skillsContainer">HTML</div>
        <div className="skillsContainer">CSS</div>
        <div className="skillsContainer">SQL</div>
        <div className="skillsContainer">Python</div>
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
