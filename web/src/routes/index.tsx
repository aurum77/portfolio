import { createFileRoute } from "@tanstack/react-router";
import kurabiye from "../assets/images/kurabiye_pfp.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="about" className="flex flex-col max-w-3xl w-full break-words p-4">
      <div className="flex sm:flex-row justify-between gap-4 flex-col-reverse">
        <div>
          <h1>About</h1>
          <p>
            A diligent and curious feline software engineer specializing in
            debugging, system architecture (especially cat-hedral models), and
            team purrformance.
          </p>
        </div>
        <img
          className="block mt-0 sm:mt-4 w-36 sm:w-32 object-contain self-center"
          src={kurabiye}
        ></img>
      </div>
      <h1>Work Experience</h1>
      <div className="mb-2">
        <div className="flex flex-row items-start justify-between">
          <div className="mb-0">
            <h2 className="mt-0 mb-0">Litterbox Engineering</h2>
            <strong>Jr. Fullstack DevCat</strong>
          </div>
          <p>Jul 2023 - present</p>
        </div>
        <ul>
          <li>
            Enhanced codebase readability by introducing whitespace management
            tools.
          </li>
          <li>
            Led the "Catnap Integration" initiative, improving team morale by
            60%.
          </li>
          <li>Developed an AI-based tool to optimize snack delivery times.</li>
        </ul>
      </div>
      <div className="mb-2">
        <div className="flex flex-row items-start justify-between">
          <div className="mb-0">
            <h2 className="mt-0 mb-0">Litterbox Engineering</h2>
            <strong>Developer Cattern</strong>
          </div>
          <p>Nov 2022 - Jul 2023</p>
        </div>
        <ul>
          <li>Designed a scalable API for instant laser pointer tracking.</li>
          <li>
            Spearheaded the "9 lives Cloud" project, ensuring 99.99% uptime for
            critical cat services.
          </li>
          <li>
            Create caching mechanism called "Purrsistence Layer" for faster data
            access (e.g., favorite nap spots).
          </li>
        </ul>
      </div>
      <h1>Education</h1>
      <div className="mb-2">
        <div className="flex flex-row items-start justify-between">
          <div className="mb-0">
            <h2 className="mt-0 mb-0">Furman University</h2>
            <strong>BSc. in Computer Pawgramming</strong>
          </div>
          <p>Nov 2022 - Jul 2023</p>
        </div>
        <ul>
          <li>
            Capstone Project: "Machine Meowing: Using AI to Predict Snack Times"
          </li>
        </ul>
      </div>
      <h1>Certifications</h1>
      <div className="mb-2">
        <ul>
          <li>Certified Purrformance Optimizer</li>
          <li>Scrumcat Master</li>
          <li>Clawware Architect</li>
        </ul>
      </div>
      <h1>Skills</h1>
      <div className="mb-2">
        <p>
          C#, ASP.NET, React, Typescript, Tailwindcss, Go, Fiber, Dart, Flutter
        </p>
      </div>
    </div>
  );
}
