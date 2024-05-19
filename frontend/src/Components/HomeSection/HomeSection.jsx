import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import TweetCard from "./TweetCard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GradingIcon from "@mui/icons-material/Grading";
import MealPlanModel from "./MealPlanModel";
import MealPlanCard from "./MealPlanCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setuploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [openMealPlanModel, setOpenMealPlanModel] = useState(false);
  const handleOpenMealPlanModel = () => setOpenMealPlanModel(true);
  const handleCloseMealPlanModel = () => setOpenMealPlanModel(false);
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setuploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setuploadingImage(false);
  };
  return (
    <div className="space-y-5 ">
      <section>
        <h1 className="pt-5 text-xl font-bold opacity-90">Home</h1>
        <p className="font-light text-sm">Shape Your Body 🏋, Share Your Journey</p>
      </section>
      <React.Fragment>
        <section className={"pb-10"}>
          <div className="flex space-x-5 bg-gray-100 px-3 py-4 -mx-3 rounded-3xl">
            <Avatar
              alt="username"
              src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/218416521_1976539102511297_7685615858323385982_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhnGToPZB0M0_THZb8gpu_h-RF-pWFaOKH5EX6lYVo4vZvVgIzjStm-RrGmn9JYAG8WTLsJg7Z-8DSkFE2wraj&_nc_ohc=yIqooFDgj-YQ7kNvgFhjqLH&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfCtHPKrYZOeaQbLFZgA2nplN3h91uh1dnghSJj9jRB4ag&oe=663C9CD7"
            />
            <div className="w-full">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="content"
                    placeholder="what is happening"
                    className={
                      "border-none outline-none text-xl bg-transparent"
                    }
                    {...formik.getFieldProps("content")}
                  />
                  {formik.errors.content && formik.touched.content && (
                    <span className="text-red-500">
                      {formik.errors.content}
                    </span>
                  )}
                </div>
                {/* <div>
                <img src="" alt="" />
              </div> */}
                <div className="flex justify-between items-center mt-5">
                  <div className="flex space-x-5 items-center">
                    <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                      <ImageIcon className="text-[#da7e3c]" />
                      <input
                        type="file"
                        name="imageFile"
                        className="hidden"
                        onChange={handleSelectImage}
                      />
                    </label>
                    <RestaurantIcon
                      className="text-[#da7e3c]"
                      onClick={handleOpenMealPlanModel}
                    />
                    <FitnessCenterIcon className="text-[#da7e3c]" />
                    <GradingIcon className="text-[#da7e3c]" />
                  </div>
                  <div>
                    <Button
                      sx={{
                        width: "100%",
                        borderRadius: "20px",
                        paddingY: "8px",
                        paddingX: "20px",
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
              </form>
            </div>
          </div>
        </section>
        <section>
          <MealPlanModel open={openMealPlanModel} handleClose={handleCloseMealPlanModel}/>
        </section>
      </React.Fragment>
      <section>
        <MealPlanCard />
      </section>
      <section>
        {[1, 1, 1, 1].map((item) => (
          <TweetCard />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
