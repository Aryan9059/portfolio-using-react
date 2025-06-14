import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/assets/pass.png',
    title: 'hype.pass',
    tags: ['Kotlin', 'Room', 'Compose', 'Coroutines'],
    projectLink: 'https://github.com/Aryan9059/hype.pass',
  },
  {
    imgSrc: '/assets/huddle.png',
    title: 'Huddle',
    tags: ['Kotlin', 'XML', 'Firestore', "OpenCode '24"],
    projectLink: 'https://github.com/Aryan9059/Huddle',
  },
  {
    imgSrc: '/assets/work/fizanto_fuzz.png',
    title: 'Fizanto Fuzz',
    tags: ['YouTube API', 'Java/XML','Firebase','Material UI'],
    projectLink: 'https://github.com/Aryan9059/fizanto-fuzz',
  },
  {
    imgSrc: '/assets/work/fsc.jpg',
    title: 'FSC App',
    tags: ['Java/XML', 'Firebase', 'Database Management', 'Clean UI'],
    projectLink: 'https://github.com/Aryan9059/FSC',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Projects</h2>
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
