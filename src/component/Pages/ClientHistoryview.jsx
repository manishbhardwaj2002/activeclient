import React from "react";
import "../style/clienthistoryview.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

const ClientHistoryView = () => {
  return (
    <>
      <div className="clienthistoryview">
        <Box sx={{ margin: "0 auto", width: "95vw", paddingTop: "25px" }}>
          <Link to="/">
            <KeyboardBackspaceIcon mt={4} sx={{ color: "#fff" }} />
          </Link>
        </Box>
        <Box sx={{ margin: "0 auto", width: "95vw", paddingTop: "5px" }}>
          <Card sx={{ mt: 0, background: "#041425", borderRadius: "8px" }}>
            <CardContent>
              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#404C59",
                  padding: "10px 5px",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontSize: "13px", lineHeight: "14px" }}
                >
                  Submission
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontSize: "13px", lineHeight: "14px" }}
                >
                  Amount Allocation (₹)
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontSize: "13px", lineHeight: "14px" }}
                >
                  Status
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
                  
                  sx={{ fontSize: "14px", lineHeight: "14px", color: "#fff" }}
                >
                  Submission 1
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#BDBDBD;",
                     marginTop:'5px',
                  }}
                >
                  24-01-2022 - 22:21:42
                </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "14px",
                    color: "#CACACA",
                  }}
                >
                  61,000
                </Typography>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#ECB035", borderRadius: "2px", width:'85px', textTransform:'capitalize', fontSize:'13px', marginRight:'5px', lineHeight: '2.0', }}
                >
                  Pending
                </Button>
              </Box>
            

              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#404C59",
                  padding: "10px 5px",
                  borderRadius: "5px",
                }}
              >
               <Box sx={{display:'flex', flexDirection:'column',}}>
               <Typography
                  
                  sx={{ fontSize: "14px", lineHeight: "14px", color: "#fff" }}
                >
                  Submission 2
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#BDBDBD;",
                  }}
                >
                  24-01-2022 - 22:21:42
                </Typography>
                </Box>
                <Typography
                  sx={{ color: "#fff", fontSize: "13px", lineHeight: "14px" }}
                >
                  61,000
                </Typography>
                <Button
                    variant="contained"
                    size="small"
                    sx={{ background: "#0CA750", borderRadius: "2px",  textTransform:'capitalize', fontSize:'13px',  padding:'6px 10px', }}
                  >
           
                  Completed
                </Button>
                
              </Box>
              <Box
                mt={3}
              
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft:'6px;'
                }}
              >
                 <Box sx={{display:'flex', flexDirection:'column',}}>
                 <Typography
                  
                  sx={{ fontSize: "14px", lineHeight: "14px", color: "#fff", }}
                >
                  Submission 3
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#BDBDBD;",
                  }}
                >
                  24-01-2022 - 22:21:42
                </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "14px",
                    color: "#CACACA",
                  }}
                >
                  61,000
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#ECB035", borderRadius: "2px", width:'85px', textTransform:'capitalize', fontSize:'13px', marginRight:'5px', lineHeight: '2.0', }}
                >
                  Pending
                </Button>
              </Box>
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
             
              </Box>

              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#404C59",
                  padding: "10px 5px",
                  borderRadius: "5px",
                }}
              >
                     <Box sx={{display:'flex', flexDirection:'column',}}>
                     <Typography
                  
                  sx={{ fontSize: "14px", lineHeight: "14px", color: "#fff" }}
                >
                  Submission 4
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#BDBDBD;",
                  }}
                >
                  24-01-2022 - 22:21:42
                </Typography>

                </Box>

                <Typography
                  sx={{ color: "#fff", fontSize: "13px", lineHeight: "14px" }}
                >
                  61,000
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontSize: "13px", lineHeight: "14px" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ background: "#0CA750", borderRadius: "2px",  textTransform:'capitalize', fontSize:'13px',  padding:'6px 10px', }}
                  >
                    Completed
                  </Button>
                </Typography>
              
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default ClientHistoryView;
