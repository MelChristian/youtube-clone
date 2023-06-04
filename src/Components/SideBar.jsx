import React from "react";
import { Stack, buttonBaseClasses, colors } from "@mui/material";
import { categories } from "../utils/constants";
const SideBar = ({ selectedCatergory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <>
            <button
              onClick={() => setSelectedCategory(category.name)}
              className="category-btn"
              style={{
                background: category.name === selectedCatergory && "#fc1503",
                color: "white",
              }}
            >
              <span
                style={{
                  color: category.name === selectedCatergory ? "white" : "red",
                  marginRight: "15px",
                }}
              >
                {category.icon}
              </span>
              <span
                style={{
                  opacity: category.name === selectedCatergory ? "1" : "0.8",
                }}
              >
                {category.name}
              </span>
            </button>
          </>
        );
      })}
    </Stack>
  );
};

export default SideBar;
