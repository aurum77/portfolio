import kurabiye from "../../assets/images/kurabiye_pfp.jpg";

function About() {
  return (
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
  );
}

export default About;
