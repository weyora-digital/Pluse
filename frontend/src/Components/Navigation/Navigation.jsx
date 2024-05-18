import * as React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Untitled-1.png";
// import logo from '/Users/vihidun/MyFolder/Development/pulse/frontend/src/image2vector.svg'
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    localStorage.clear();
    console.log("logout");
    navigate('/login');
  };
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   console.log("logout");
  //   handleClose();
  // };
  return (
    <div className="h-screen sticky top-0 bg-gray-100 px-3 my-3 -mx-4 rounded-3xl" >
      <div>
        <div className="flex items-center space-x-2 py-5">
          <img src={logo} alt="" width={48} height={48} />
          <h1 className="text-2xl font-sans font-bold	text-amber-600">PLUSE</h1>
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 
                item-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#da7e3c",
              color: "white",
              border: "solid #da7e3c",
              "&:hover": {
                bgcolor: "white",
                color: "#da7e3c",
                border: " solid #da7e3c",
              },
            }}
            // variant="contained"
            type="submit"
          >
            Hit
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/218416521_1976539102511297_7685615858323385982_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhnGToPZB0M0_THZb8gpu_h-RF-pWFaOKH5EX6lYVo4vZvVgIzjStm-RrGmn9JYAG8WTLsJg7Z-8DSkFE2wraj&_nc_ohc=yIqooFDgj-YQ7kNvgFhjqLH&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfCtHPKrYZOeaQbLFZgA2nplN3h91uh1dnghSJj9jRB4ag&oe=663C9CD7"
          />
          <div>
            <span>Oh_itz Dulanjaya</span>
            <span className="opacity-70">@dulanjaya</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              // width: "100%",
              // borderRadius: "20px",
              // paddingY: "8px",
              // paddingX: "20px",
              // bgcolor: "#da7e3c",
              color: "#FF8645",
            }}
          >
            {/* Dashboard */}
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
