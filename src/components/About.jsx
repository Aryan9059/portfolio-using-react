const About = () => {
    const aboutItems = [
      {
        label: 'Projects Done',
        number: 6
      },
      {
        label: 'Years of Experience',
        number: 3
      }
    ];
  
    return (
      <section
        id="about"
        className="section"
      >
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Welcome! I&apos;m Aryan Srivastava, a novice Android Developer currently pursuing my studies from India Institute of Information Technology, Allahabad. With a knack for creating user-friendly mobile applications, I specialize in Kotlin and Jetpack Compose, and I&apos;m always eager to explore innovative ways to enhance app design and functionality.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-violet-400 font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))}
              <img
                src="../../assets/quote.png"
                alt="cute flame"
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  