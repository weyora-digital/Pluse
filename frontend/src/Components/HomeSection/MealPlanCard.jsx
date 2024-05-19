import React, { useState, useEffect } from "react";
import { fetchMealPlans, loadImage } from "../../Helper/helper";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const MealPlanCard = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [images, setImages] = useState({});


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyModel, setOpenReplyModel] = useState(false);
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

  useEffect(() => {
    async function fetchData() {
        try {
            const mealPlansData = await fetchMealPlans();
            setMealPlans(mealPlansData);

            const imagesData = {};
            for (const mealPlan of mealPlansData) {
                const imageUrl = await loadImage(mealPlan.imageId);
                imagesData[mealPlan.imageId] = imageUrl;
            }
            setImages(imagesData);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }
    fetchData();
}, []);

  if (isLoading) return <p>Loading meal plans...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        {mealPlans.map((plan) => (
          <div key={plan.id} className="flex space-x-5">
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
                    <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                    <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                  </Menu>
                </div>
              </div>

              <img
                className="w-[28rem] border border-gray-400 rounded-md"
                // src="https://cdn.loveandlemons.com/wp-content/uploads/2019/09/dinner-ideas-2.jpg"
                src={images[plan.imageId]}
                alt={plan.title}
              />
              <p className="mb-2 text-gray-900 mt-1 font-semibold uppercase">
                {plan.title}
              </p>

              <div className="flex items-center mb-3">
                <div className="flex ">
                  <StarBorderIcon style={{ color: "#FF8645" }} />
                  <p className="pl-2"> 4.9 Rate</p>
                </div>
                <div className="flex ml-5">
                  <AccessTimeIcon style={{ color: "#9DDE8B" }} />
                  <p className="pl-2"> 10 Min</p>
                </div>
                <div className="flex ml-5">
                  <LocalFireDepartmentOutlinedIcon style={{ color: "#EE4E4E" }} />
                  <p className="pl-2"> {plan.nutritionalInfo} KCal</p>
                </div>
                <div className="flex ml-5">
                  <Person2OutlinedIcon style={{ color: "#AF8F6F" }} />
                  <p className="pl-2"> {plan.portionSizes} Serves</p>
                </div>
              </div>

              <p>{plan.description}</p>
              {/* You can add more details or formatting as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlanCard;
