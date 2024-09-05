import { React, useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Cards = (props) => {
  const inputRef = useRef();

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleClick = (e) => {
    setDisable(false);
  };

  return (
    <>
      <Card sx={{ mt: 1, background: "#041425", borderRadius: "8px" }}>
        <CardContent>
         
          <Box>
         
            <Typography
              sx={{ color: "#FBAF5D", fontSize: "13px", lineHeight: "14px" }}
            >
              {props.segment}
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
             <Box sx={{display:'flex', flexDirection:'column',}}>
             <Typography
              sx={{ fontSize: "12px", lineHeight: "14px", color: "#808080",}}
            >
              {props.Utilized}
            </Typography>
            <Typography
              sx={{ fontSize: "11px", lineHeight: "13px", color: "#FFFFFF;", marginTop:'8px', }}
            >
              {props.utilized}
            </Typography>

             </Box>
             <Box sx={{display:'flex', flexDirection:'column',}}>
            <Typography
              sx={{ fontSize: "12px", lineHeight: "14px", color: "#808080" }}
            >
              {props.Pending}
            </Typography>
            <Typography
              sx={{ fontSize: "11px", lineHeight: "13px", color: "#FFFFFF;", marginTop:'8px',  }}
            >
              {props.pending}
            </Typography>

            </Box>
            <Box>

            <Typography
              sx={{ fontSize: "12px", lineHeight: "14px", color: "#808080" }}
            >
              {props.Available}
              <EditIcon
                onClick={handleClick}
                sx={{ width: "11px", marginTop: "-10px" }}
              />
            </Typography>
            <Box
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
          
        
            <input
              type="text"
              id=""
              name=""
              value=""
              ref={inputRef}
              disabled={disable}
              style={{ background: "none", width: "60px" }}
            />
          </Box>

            </Box>
          
          </Box>
         
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
