import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Besho3.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-12 md:mt-16 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-20 -mt-4 md:-mt-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left -mt-4 md:-mt-6 md:pl-0 lg:pl-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Mohamed Ayman
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#22c55e] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#22c55e]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 mt-6 leading-[2.5] max-w-2xl whitespace-pre-line">
            I am a full-stack developer with over 2 years of experience in building scalable web applications.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1tcduE3y126N3vieHAcs7XVlLUgoyUvPR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-6 rounded-full mt-4 text-base font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #22c55e, #16a34a)',
              boxShadow: '0 0 2px #22c55e, 0 0 2px #22c55e, 0 0 40px #22c55e',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:pr-20 lg:pr-24 -mt-4 md:-mt-6">
          <div className="relative right-0 md:right-[-6rem] lg:right-[-8rem] xl:right-[-10rem]">
            <Tilt
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-[24rem] md:h-[24rem] border-4 border-green-700 rounded-full transform translate-x-0 md:translate-x-12 lg:translate-x-16"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Mohamed Ayman"
                className="w-full h-full rounded-full object-cover object-center drop-shadow-[0_10px_20px_rgba(34,197,94,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
