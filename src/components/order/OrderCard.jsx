import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";


const OrderCard = () => {

  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">men tshirt</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹323</p>
        </Grid>
        <Grid item xs={4}>
        {true && (
    <div>
      <p>
        <AdjustIcon  sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"/>
        <span>Delivered On Mar 03</span>
      </p>
      <p className="text-xs">Your Item Has Been Delivered</p>


      {false && (
        <span>Expected Delivery On Mar 03</span>
      )}
    </div>
  )}
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
