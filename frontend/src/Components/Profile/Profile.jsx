import {
  BusinessCenter,
  CalendarMonth,
  KeyboardBackspace,
  LocationOn,
} from "@mui/icons-material";
import { Avatar, Button, Box, Tabs, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const navigate = useNavigate();
  const [openProfileModel, setOpenProfileModel] = useState(false);
  const handleOpenProfileModel = () => setOpenProfileModel(true);
  const handleClose = () => setOpenProfileModel(false);

  const handleBack = () => navigate(-1);
  //   const handleOpenProfileModel = () => {
  //     console.log("open profile model");
  //   };

  const handleFollowUser = () => {
    console.log("follow user");
  };

  const [tabValue, setTabValue] = React.useState("1");
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) {
      console.log("likes twit");
    } else if (newValue === 1) {
      console.log("users twits");
    }
  };
  return (
    <div>
      <section
        className={"bg-white z-50 flex items-center sticky top-0 bg-opacity-95"}
      >
        <KeyboardBackspace className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
        Dulanjaya Premarathna
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h=[15rem] object-cover"
          src="https://timelinecovers.pro/facebook-cover/download/gym-one-more-facebook-cover.jpg"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-20"
            alt="Dulanjaya Premarathna"
            src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/218416521_1976539102511297_7685615858323385982_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhnGToPZB0M0_THZb8gpu_h-RF-pWFaOKH5EX6lYVo4vZvVgIzjStm-RrGmn9JYAG8WTLsJg7Z-8DSkFE2wraj&_nc_ohc=yIqooFDgj-YQ7kNvgFhjqLH&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfCtHPKrYZOeaQbLFZgA2nplN3h91uh1dnghSJj9jRB4ag&oe=663C9CD7"
            sx={{
              width: "8rem",
              height: "8rem",
              border: "4px solid white",
            }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{
                borderRadius: "20px",
                bgcolor: "#da7e3c",
                color: "white",
                border: "solid #da7e3c",
                "&:hover": {
                  bgcolor: "white",
                  color: "#da7e3c",
                  border: "solid #da7e3c",
                },
              }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Dulanjaya Premarathna</h1>
          </div>
          <h1 className="text-gray-500">@dulanjaya</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sit corporis quisquam ducimus! Praesentium quos recusandae placeat
            ipsum nulla dolores earum molestias, illo nobis ducimus et
            accusantium, perspiciatis unde delectus?
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenter />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOn />
              <p className="ml-2">Sri Lanka</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonth />
              <p className="ml-2">Joined Jun 2024</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>90</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                sx={{
                  // color: "#FF8645",
                  "&.MuiTab-root": {
                    color: "#FF8645",
                  },
                  "& .Mui-selected": {
                    // Styles for the selected tab
                    color: "#FF8645", // Text color for selected tab
                    borderBottom: "2px solid #FF8645", // Orange bottom border for selected tab
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#FF8645", // Indicator color for selected tab
                  },
                }}
              >
                <Tab label="TWEETS" value="1" />
                <Tab label="REPLIES" value="2" />
                <Tab label="MEDIA" value="3" />
                <Tab label="LIKES" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1, 1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">users replies</TabPanel>
            <TabPanel value="3">media</TabPanel>
            <TabPanel value="4">likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModel} />
      </section>
    </div>
  );
};

export default Profile;
