// mui
import { IconButton, Tooltip } from "@mui/material";

// mui - icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import MailIcon from "@mui/icons-material/Mail";

// react-scroll
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div
      className="fixed bottom-0 sm:bottom-12 w-full sm:w-fit left-1/2 -translate-x-1/2 bg-accent
  rounded-t-xl sm:rounded-full py-3 px-6 flex items-center justify-around sm:justify-center gap-12 z-30"
    >
      <Link to="home" smooth>
        <Tooltip title="Home" placement="top" arrow>
          <IconButton className="group">
            <HomeIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="about" smooth>
        <Tooltip title="About" placement="top" arrow>
          <IconButton className="group">
            <PersonIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="projects" smooth>
        <Tooltip title="Projects" placement="top" arrow>
          <IconButton className="group">
            <AppsIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to="contact" smooth>
        <Tooltip title="Contact" placement="top" arrow>
          <IconButton className="group">
            <MailIcon className="text-white group-hover:text-secondary" />
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  );
};

export default Menu;
