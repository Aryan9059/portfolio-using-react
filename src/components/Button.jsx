import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target, label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes || ""}`}
      >
        {label}
        {icon && <span className="material-symbols-rounded">{icon}</span>}
      </a>
    );
  }
  return (
    <button className={`btn btn-primary ${classes || ""}`}>
      {label}
      {icon && <span className="material-symbols-rounded">{icon}</span>}
    </button>
  );
};

const ButtonOutline = ({ href, target, label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-outline ${classes || ""}`}
      >
        {label}
        {icon && <span className="material-symbols-rounded">{icon}</span>}
      </a>
    );
  }
  return (
    <button className={`btn btn-outline ${classes || ""}`}>
      {label}
      {icon && <span className="material-symbols-rounded">{icon}</span>}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };