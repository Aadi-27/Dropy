import React from "react";

import { useDropy } from "./useDropy";

import PropTypes from "prop-types";

import "./dropyStyles.css";
import "./index.css";

const Dropy = ({ getFiles }) => {
  const data = useDropy();
  getFiles(data);

  return (
    <div className="App" id="drop-area">
      <div id="drop-zone" />
    </div>
  );
};

Dropy.propTypes = {
  getFiles: PropTypes.func.isRequired,
};

Dropy.defaultProps = {
  getFiles: (data) => [],
};

export default Dropy;
