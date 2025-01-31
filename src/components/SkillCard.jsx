import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes, Color }) => {
  return (
    <div
      className={`flex items-center gap-3  ring-2 ring-white ring-opacity-5 ring-inset rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ${classes}`}
      style={{ borderColor: Color }}
    >
      <figure
        className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"
        style={{ backgroundColor: "bg-purple-400" }}
      >
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>
      <div>
        <h3 className="text-zinc-100" style={{ color: Color }}>
          {label}
        </h3>
        <p className="text-zinc-400" style={{ color: `bg-purple-400` }}> {}
          {desc}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
  Color: PropTypes.string,
};

export default SkillCard;

