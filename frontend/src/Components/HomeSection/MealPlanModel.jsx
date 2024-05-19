import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/gym.jpeg";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GradingIcon from "@mui/icons-material/Grading";
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Close } from "@mui/icons-material";
import DragAndDropUpload from "./DragAndDropUpload";
import { mealplancreate } from "../../Helper/helper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function MealPlanModel({ handleClose, open }) {
  const navigate = useNavigate();

  //   const validationSchema = Yup.object().shape({
  //     content: Yup.string().required("Tweet text is required"),
  //   });

  const [uploadingImage, setuploadingImage] = useState(false);
  // const [selectedImage, setSelectedImage] = useState("");

  const handleSubmit = async (values) => {
    setuploadingImage(true);

    const formData = new FormData();

    formData.append("file", values.image);
  

    // Assuming `values` contains the rest of the form data
    formData.append(
      "mealPlanJson",
      JSON.stringify({
        title: values.title,
        description: values.description,
        dietType: values.dietType,
        recipes: values.recipes,
        nutritionalInfo: values.nutritionalInfo,
        portionSizes: values.portionSizes,
      })
    );

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const data = await mealplancreate(formData);
      console.log("Meal plan created successfully", data);
      alert("Meal plan created successfully")
      // navigate("/some-path"); // Redirect on success
    } catch (error) {
      console.error("Failed to create meal plan", error);
      // Handle error (e.g., show error message)
    } finally {
      setuploadingImage(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      dietType: "keto",
      recipes: "",
      nutritionalInfo: "",
      portionSizes: "",
      MealId: 4,
    },
    onSubmit: handleSubmit,
  });

  // const handleSelectImage = (event) => {
  //   setuploadingImage(true);
  //   const imgUrl = event.target.files[0];
  //   formik.setFieldValue("image", imgUrl);
  //   setSelectedImage(imgUrl);
  //   setuploadingImage(false);
  // };

  const handleFileAccepted = (file) => {
    formik.setFieldValue("image", file);
  };

  const handleDietChange = (diet) => {
    formik.setFieldValue("dietType", diet);
    // setAge(event.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div className="flex space-x-5">
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
              </div>

              <div className="mt-2">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/twit/${3}`)}
                >
                  <p className="mb-2 p-0">
                    "The real workout starts when you want to stop."
                  </p>
                </div>
              </div>
            </div>
          </div>{" "} */}
          <section className={"py-1"}>
            <div className="flex space-x-5">
              {/* <Avatar
                alt="username"
                src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/218416521_1976539102511297_7685615858323385982_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFhnGToPZB0M0_THZb8gpu_h-RF-pWFaOKH5EX6lYVo4vZvVgIzjStm-RrGmn9JYAG8WTLsJg7Z-8DSkFE2wraj&_nc_ohc=yIqooFDgj-YQ7kNvgFhjqLH&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfCtHPKrYZOeaQbLFZgA2nplN3h91uh1dnghSJj9jRB4ag&oe=663C9CD7"
              /> */}
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconButton onClick={handleClose} aria-label="delete">
                        <Close />
                      </IconButton>
                      <p className="text-sm">Meal Plan</p>
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
                          "&:hover": {
                            bgcolor: "#FB6514",
                          },
                        }}
                        variant="contained"
                        type="submit"
                      >
                        CREATE
                      </Button>
                    </div>
                  </div>
                  <div className="hideScrollBar overflow-y-scroll overflow-x-hidden h-[60vh]">
                    <div className="space-y-3 pt-5">
                      <DragAndDropUpload onFileAccepted={handleFileAccepted} />
                      <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="meal plan title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.title && Boolean(formik.errors.title)
                        }
                        helperText={formik.touched.title && formik.errors.title}
                      />

                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        id="description"
                        name="description"
                        label="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                      />
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="dietType">Dietary type</InputLabel>
                          <Select
                            labelId="dietType"
                            id="dietType"
                            value={formik.values.diet}
                            label="Dietary type"
                            onChange={formik.handleChange}
                          >
                            <MenuItem value={10}>Keto</MenuItem>
                            <MenuItem value={20}>Paleo</MenuItem>
                            <MenuItem value={30}>Vegan</MenuItem>
                            <MenuItem value={30}>Vegetarian</MenuItem>
                            <MenuItem value={30}>Mediterranean</MenuItem>
                            <MenuItem value={30}>Low-Carb</MenuItem>
                            <MenuItem value={30}>High-Protein</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>

                      <TextField
                        fullWidth
                        id="recipes"
                        name="recipes"
                        label="recipes"
                        value={formik.values.recipes}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.recipes &&
                          Boolean(formik.errors.recipes)
                        }
                        helperText={
                          formik.touched.recipes && formik.errors.recipes
                        }
                      />

                      <TextField
                        fullWidth
                        id="nutritionalInfo"
                        name="nutritionalInfo"
                        label="nutritional Information"
                        value={formik.values.nutritionalInfo}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.nutritionalInfo &&
                          Boolean(formik.errors.nutritionalInfo)
                        }
                        helperText={
                          formik.touched.nutritionalInfo &&
                          formik.errors.nutritionalInfo
                        }
                      />

                      <TextField
                        fullWidth
                        id="portionSizes"
                        name="portionSizes"
                        label="portion Size"
                        value={formik.values.portionSizes}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.portionSizes &&
                          Boolean(formik.errors.portionSizes)
                        }
                        helperText={
                          formik.touched.portionSizes &&
                          formik.errors.portionSizes
                        }
                      />
                    </div>
                  </div>
                  {/* <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="Post your reply"
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
                  </div> */}
                  {/* <div>
                <img src="" alt="" />
              </div> */}
                  {/* <div className="flex justify-between items-center mt-5">
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
                      <RestaurantIcon className="text-[#da7e3c]" />
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
                          "&:hover": {
                            bgcolor: "#FB6514",
                          },
                        }}
                        variant="contained"
                        type="submit"
                      >
                        CREATE
                      </Button>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
