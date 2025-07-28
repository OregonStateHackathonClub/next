export const StepTwo = () => {
  return (
    <div className="pt-60 px-8 max-w-2xl mx-auto w-full">
      <h2 className="text-white-3xl font-bold mb-2 text-left">
        2 → Enter your project information
      </h2>
      <p className="text-gray-600 mb-8 pl-8 text-left">Title and Description</p>
      {/* Form Title and Description */}
      <form className="text-white-600 mb-8 pl-8 text-left">
        <div>
          <label
            for="projectName"
            class="block mb-2 text-white-3xl font-bold dark:text-white"
          >
            Project Title
          </label>
          <input
            type="text"
            id="projectTitle"
            class="block w-half p-2 text-gray-600 border border-gray-300 rounded-lg bg-gray-50
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Title..."
          />
        </div>
        <br />
        <div>
          <label
            for="projectDescription"
            class="block mb-2 text-white-3xl font-bold dark:text-white"
          >
            Project Desciption
          </label>
          <input
            type="text"
            id="projectDescription"
            class="block w-full p-4 text-gray-600 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Description..."
          />
        </div>
      </form>
    </div>
  );
};
