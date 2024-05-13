import React, {useState} from "react";
import { defaultLocale } from "yup";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import image from "../../Assets/gym.jpeg";
import {
  ChatBubbleOutline,
  FileUpload,
  BarChart,
  Favorite,
  FavoriteOutlined,
} from "@mui/icons-material";
import ReplyModel from "./ReplyModel";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyModel, setOpenReplyModel] = useState(false)
    const handleOpenReplyModel = () => setOpenReplyModel(true);
  const handleCloseReplyModel = () => setOpenReplyModel(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  };



  const handleCreateRetweet = () => {
    console.log("retweet");
  };

  const handleLiketweet = () => {
    console.log("handle like tweet");
  };
  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
            <RepeatIcon />
            <p>You Retweet</p>
        </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/218416521_1976539102511297_7685615858323385982_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhnGToPZB0M0_THZb8gpu_h-RF-pWFaOKH5EX6lYVo4vZvVgIzjStm-RrGmn9JYAG8WTLsJg7Z-8DSkFE2wraj&_nc_ohc=yIqooFDgj-YQ7kNvgFhjqLH&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfCtHPKrYZOeaQbLFZgA2nplN3h91uh1dnghSJj9jRB4ag&oe=663C9CD7"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Dulanjaya Premarathna</span>
              <span className="text-grey-600">@dulanjaya . 2m</span>
            </div>
            <div>
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
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/twit/${3}`)}
            >
              <p className="mb-2 p-0">
                "The real workout starts when you want to stop."
              </p>
              <img
                className="w-[28rem] border border-gray-400 rounded-md"
                src={image}
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items center text-grey-600">
                <ChatBubbleOutline
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-grey-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  onClick={handleCreateRetweet}
                  className="cursor-pointer"
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-grey-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <Favorite
                    onClick={handleCreateRetweet}
                    className="cursor-pointer"
                  />
                ) : (
                  <FavoriteOutlined
                    onClick={handleLiketweet}
                    className="cursor-pointer"
                  />
                )}
                <p>549</p>
              </div>
              <div className="space-x-3 flex items center text-grey-600">
                <BarChart
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>4540</p>
              </div>
              <div className="space-x-3 flex items center text-grey-600">
                <FileUpload
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModel}/>
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
