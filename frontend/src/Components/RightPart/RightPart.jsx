import { MoreHoriz, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const RightPart = () => {
  return (
    <div className="py-3 px-2 sticky top bg-gray-100 my-3 -mx-4 rounded-3xl">
      <div className="relative flex items-center border-solid border-2 rounded-3xl focus-within:border-amber-600">
        <input
          type="text"
          className="py-3 rounded-full text-grey-500 w-full pl-12 focus:outline-none focus:border-amber-600"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3 ">
          <Search className="text-grey-500" />
        </div>
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Features</h1>
        <Button
          veriant="contained"
          sx={{
            paddding: "10px",
            paddingX: "20px",
            borderRadius: "25px",
            bgcolor: "#da7e3c",
            color: "white",
            border: "solid",
            "&:hover": {
                bgcolor: "white",
                color: "#da7e3c",
                border: "solid #da7e3c",
              },
          }}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's happening</h1>
        <div>
          <p className="text-sm">FIFA Women's World Cup - LIVE</p>
          <p className="font-bold">Philippines vs Switzerland</p>
        </div>
        {[1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Personal Fitness - Trending</p>
              <p className="font-bold">#PersonalFitness</p>
              <p>34.3k Tweets</p>
            </div>
            <MoreHoriz />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightPart;
