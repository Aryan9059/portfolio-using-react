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
          <div className="bg-[#271e1a] p-7 rounded-3xl md:p-12 ring-1 ring-inset ring-[#322824]">
            <p className="text-[#f1dfd9] md:mb-5 mb-3 md:text-3xl font-medium text-xl md:max-w-[60ch]">Experience</p>
            <p className="text-[#d8c2bb] mb-6 md:mb-8 md:text-lg md:max-w-[60ch]">
              <span className="text-[#f1dfd9] font-medium md:text-lg">Figma Designer</span><br />
              <span className="text-[#d8c2bb] font-light">Bitance Labs</span> <br />
              <span className="text-[#d8c2bb] font">Mar. 2025 - Present</span>
            </p>
            <p className="text-[#d8c2bb] mb-6 md:mb-8 md:text-lg md:max-w-[60ch]">
              <span className="text-[#f1dfd9] font-medium md:text-lg">Member @ App Development Wing</span><br />
              <span className="text-[#d8c2bb] font-light">Club of Professionals, IIIT Allahabad</span> <br />
              <span className="text-[#d8c2bb] font">Jan. 2025 - Present</span>
            </p>
            <p className="text-[#d8c2bb] mb-6 md:mb-8 md:text-lg md:max-w-[60ch]">
              <span className="text-[#f1dfd9] font-medium md:text-lg">Member @ Design Wing</span><br />
              <span className="text-[#d8c2bb] font-light">Entrepreneurship Cell, IIIT Allahabad</span> <br />
              <span className="text-[#d8c2bb] font">Dec. 2024 - Present</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl text-[#ffb59a] font-semibold md:text-4xl">{number}</span>
                    <span className="text-[#d5c78e] font-semibold md:text-3xl">+</span>
                  </div>
                  <p className="text-sm text-[#d8c2bb]">{label}</p>
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
  