import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { OutlinedInput } from "@mui/material";

const Total = () => {
  return (
    <>
      <Card sx={{ mt: 3, background: "#041425", borderRadius: "8px" }}>
        <CardContent>
          <Box>
            <Typography
              sx={{ color: "#FBAF5D", fontSize: "13px", lineHeight: "14px" }}
            >
              Total
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
               <Box sx={{display:'flex', flexDirection:'column', width:'33%',}}>
               <Typography
              sx={{ fontSize: "12px", lineHeight: "14px", color: "#808080" }}
            >
              Utilized
            </Typography>
            <OutlinedInput
              placeholder="61,000"
              size="small"
              mr={1}
            
              sx={{
                fontSize: "12px",
                textAlign: "center",
                color: "#FFFFFF",
                marginTop:'5px',
               
              }}
            />
 </Box>

 <Box sx={{display:'flex', flexDirection:'column', width:'33%',}}>

           
            <Typography
              sx={{ fontSize: "12px", lineHeight: "14px", color: "#808080" }}
            >
              Pending
            </Typography>
            <OutlinedInput
              placeholder="0"
              size="small"
              mr={1}
              sx={{
                fontSize: "12px",
                textAlign: "center",
                color: "#FFFFFF",
                marginTop:'5px',
              }}
            />
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', width:'33%',}}>
            <Typography
              sx={{ fontSize: "12px", lineHeight: "14px", color: "#808080" }}
            >
              Available
            </Typography>
            <OutlinedInput
              placeholder="31,500"
              size="small"
              mr={1}
              sx={{
                fontSize: "12px",
                textAlign: "center",
                color: "#FFFFFF",
                marginTop:'5px',
              }}/>


            </Box>
           
          </Box>
          <Box
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width:'99%', gap:'10px'
            }}
          >
           
            
          
           
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Total;
