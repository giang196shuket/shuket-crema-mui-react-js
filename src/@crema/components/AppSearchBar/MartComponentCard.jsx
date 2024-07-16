import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import AppScrollbar from "../AppScrollbar";
import Box from "@mui/material/Box";
import AppAnimate from "../AppAnimate";

const MartComponentCard = ({
  title,
  maxHeight,
  description,
  component: Component,
  noScrollbar,
}) => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box sx={{ width: 300, }}>
        <Box>
          {noScrollbar ? (
            <Box>
              <Component />
            </Box>
          ) : (
            <AppScrollbar
              sx={{
                maxHeight: maxHeight,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Component />
              </Box>
            </AppScrollbar>
          )}
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default MartComponentCard;

MartComponentCard.defaultProps = {
  description: "",
  maxHeight: 500,
};

MartComponentCard.propTypes = {
  title: PropTypes.node.isRequired,
  maxHeight: PropTypes.number,
  description: PropTypes.node,
  component: PropTypes.any.isRequired,
  noScrollbar: PropTypes.bool,
};
