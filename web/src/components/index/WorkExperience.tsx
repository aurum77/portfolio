function WorkExperience() {
  return (
    <>
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
    </>
  );
}

export default WorkExperience;
