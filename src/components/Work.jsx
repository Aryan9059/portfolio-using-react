import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/assets/work/pass.jpg',
    title: 'Password Manager App',
    tags: ['Biometrics', 'Security', 'offline','App PIN'],
    projectLink: 'https://github.com/Aryan9059/hype.pass',
  },
  {
    imgSrc: '/assets/work/fizanto_fuzz.jpg',
    title: 'Fizanto Fuzz App',
    tags: ['Entertainment', 'Streaming','Content Sharing','User Interaction'],
    projectLink: 'https://github.com/Aryan9059/fizanto-fuzz',
  },
  {
    imgSrc: '/assets/work/fsc.jpg',
    title: 'The FSC App',
    tags: ['Sports App', 'Leaderboard', 'Live Scores', 'Player-Stats'],
    projectLink: 'https://github.com/Aryan9059/FSC',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
