import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-green-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-green-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-green-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {projects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block text-white py-2 px-6 rounded-full text-base font-bold transition duration-300 transform hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #22c55e, #16a34a)',
              boxShadow: '0 0 2px #22c55e, 0 0 2px #22c55e, 0 0 40px #22c55e',
            }}
          >
            {showAll ? "SEE LESS" : "SEE MORE"}
          </button>
        </div>
      )}

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full sm:w-[90%] md:w-[80%] max-w-3xl max-h-[90vh] overflow-y-auto relative scrollbar-hide">
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur flex justify-end p-4 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-green-500 transition-colors leading-none"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col px-4 pb-6 sm:px-8 sm:pb-8">
              <div className="w-full flex justify-center mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-green-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 sm:flex-row flex-col w-full">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gray-800 hover:bg-green-800 text-gray-300 hover:text-white px-6 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition-colors"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
