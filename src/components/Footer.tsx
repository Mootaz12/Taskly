import React from "react";

function Footer() {
  return (
    <footer className="text-center bg-gray-100 py-2 ">
      <p>&copy; {new Date().getFullYear()} Taskly. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
