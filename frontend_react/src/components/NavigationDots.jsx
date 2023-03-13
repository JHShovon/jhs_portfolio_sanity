import React from "react";

const Navigation = ({ active }) => {
  const navLinks = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];
  return (
    <div className="app__navigation">
      {navLinks.map((item, index) => (
        <a
          href={`#${item}`}
          // onClick={() => setToggle(false)}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#323bac" } : {}}
        />
      ))}
    </div>
  );
};

export default Navigation;
