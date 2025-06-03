const Projects = () => {
  const projecten = [
    {
      title: "Project ",
      image: "/images/Schermafbeelding 2025-06-01 171744.png",
      description: "MVC toepassen in een groepswerk.",
      learning: "Ik leerde werken met componenten, dark mode via Tailwind en het structureren van een responsive layout.",
      quote: "“Design is intelligence made visible.” – Alina Wheeler",
    },
    {
      title: "Startspeler",
      image: "/images/Schermafbeelding 2024-04-27 202236.png",
      description: "Een eenvoudige takenlijst app met React.",
      learning: "Hier oefende ik met useState en props. Ik leerde hoe state het gedrag van een component bepaalt.",
      quote: "“Great things are not done by impulse, but by a series of small things brought together.” – Vincent van Gogh",
    },
    {
      title: "Webshop Mockup",
      image: "/images/webshop.png",
      description: "Een statische webshop gebouwd met HTML & CSS.",
      learning: "Ik kreeg inzicht in hoe e-commerce pagina’s opgebouwd worden en oefende met flexbox en grid.",
      quote: "“Learning never exhausts the mind.” – Leonardo da Vinci",
    },
  ];

  return (
    <div className="min-h-screen p-8 dark:bg-black dark:text-white space-y-10">
      {/* Titel en inleiding */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Mijn groei als programmeur</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          In elk project probeerde ik iets nieuws bij te leren – van eenvoudige HTML tot React componenten en state management.
        </p>
        <p className="italic text-gray-500 dark:text-gray-400">
          "Je stopt nooit met leren, je leert alleen steeds beter hoe te leren."
        </p>
      </div>

      {/* Projecten */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projecten.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 border dark:border-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

            {/* Wat leerde ik hieruit */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <h3 className="text-lg font-medium">Wat ik hieruit leerde</h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">{project.learning}</p>
            </div>

            {/* Inspirerende quote */}
            <p className="italic text-sm text-gray-500 dark:text-gray-400 border-l-4 pl-3 border-gray-400 dark:border-gray-500">
              {project.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

