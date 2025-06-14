import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes, Color }) => {
  return (
    <div
      className={`flex items-center gap-3  ring-2 ring-[#53433e] ring-opacity-30 ring-inset rounded-2xl p-3 hover:bg-[#271e1a] transition-colors group ${classes}`}
      style={{ borderColor: Color }}
    >
      <figure
        className="bg-[#271e1a] rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-[#1a110e] transition-colors"
        style={{ backgroundColor: "bg-purple-400" }}
      >
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>
      <div>
        <h3 className="text-[#f1dfd9]" style={{ color: Color }}>
          {label}
        </h3>
        <p className="text-[#d8c2bb] text-sm mt-1" style={{ color: `bg-purple-400` }}> {}
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

