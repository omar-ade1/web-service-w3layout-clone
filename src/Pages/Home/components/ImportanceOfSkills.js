import BarsImportanceOfskills from "./BarsImportanceOfskills";

function ImportanceOfSkills() {
  return (
    <div
      id="bars"
      className="Importance-of-skills py-[50px] bg-slate-200 dark:bg-[#222831]"
    >
      <div className="container mx-auto smT0:px-5 px-3 flex smT0:flex-col justify-between items-center">
        <BarsImportanceOfskills />
        <div className="image w-[45%] smT0:w-full smT0:mt-7 rounded-2xl overflow-hidden">
          <img src="./images/progress.jpg" alt="progress" />
        </div>
      </div>
    </div>
  );
}

export default ImportanceOfSkills;
