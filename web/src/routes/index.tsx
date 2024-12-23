import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  WorkExperience,
  Education,
  Skills,
} from "../components/index.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="about" className="flex flex-col max-w-3xl w-full break-words p-4">
      <About />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
}
