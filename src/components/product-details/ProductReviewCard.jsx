import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Grid } from "@mui/material";

const ProductReviewCard = ({item}) => {
  const [value, setValue] = React.useState(4.5);
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt="user"
              src=""
            >
              rating
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">sri</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <div>
            

              <Rating
                
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
             
            </div>
            <p>
             Lorem ipsum, dolor sit amet 
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
