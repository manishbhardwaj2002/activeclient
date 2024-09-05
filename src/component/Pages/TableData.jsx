import { React, useState } from "react";
import { Box } from "@mui/system";
import "../style/tabledata.css";
import { Link } from "react-router-dom";
import ClientModal from "../Modal/ClientModal";
import { Button } from "@mui/material";
import Cards from "../Cards/Cards";
import Total from "../Total/Total";
// import {EditIcon} from '@mui/icons-material';

// import { NoEncryption } from "@mui/icons-material";
// import Axios from 'axios';

const TableData = () => {
  const [tableDatamview, setTableDatamview] = useState([
    {
      id: 1,
      segment: "FAQ",
      Utilized: "Utilized",
      utilized: "61,000",
      Pending: "Pending",
      pending: "61,000",
      Available: "Available",
      available: "61,000",
    },
    {
      id: 2,
      segment: "CM",
      Utilized: "Utilized",
      utilized: "61,000",
      Pending: "Pending",
      pending: "61,000",
      Available: "Available",
      available: "61,000",
    },
    {
      id: 3,
      segment: "CD",
      Utilized: "Utilized",
      utilized: "61,000",
      Pending: "Pending",
      pending: "61,000",
      Available: "Available",
      available: "61,000",
      // icon: EditIcon
    },
    {
      id: 4,
      segment: "MCX",
      Utilized: "Utilized",
      utilized: "61,000",
      Pending: "Pending",
      pending: "61,000",
      Available: "Available",
      available: "61,000",
    },
    {
      id: 5,
      segment: "NCDEX",
      Utilized: "Utilized",
      utilized: "61,000",
      Pending: "Pending",
      pending: "61,000",
      Available: "Available",
      available: "61,000",
    },

  ]);

  const [HistoryModal, setHistoryModal] = useState(false);

  const handleShow = () => {
    setHistoryModal(true);
  };

  return (
    <>
      <div className="tabledata">
        <div className="history">
          <Button
            variant="text"
            onClick={handleShow}
            sx={{
              color: "#5679F5",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                background: "none",
              },
            }}
          >
            Submited History
          </Button>
        </div>
        <div className="tablecontainer">
          <table className="segmentdetail">
            <tr className="thead">
              <th align="left" className="dataleft">
                Segment
              </th>
              <th align="left">Allocated</th>
              <th align="left">Pending</th>
              <th align="left" className="dataright">
              Avail Limit 
              </th>
            </tr>
            <tr className="whitebg">
              <td>F&O</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
            <tr className="greybg">
              <td>CM</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
            <tr className="whitebg">
              <td>CD</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
            <tr className="greybg">
              <td>MCX</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
            <tr className="whitebg">
              <td>NCDEX</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
            <tr className="greybg">
              <td>BSE Comm</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
            <tr className="whitebg">
              <td>NSE Comm</td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
              <td>
                <input type="text" id="" name="" value="" />
              </td>
            </tr>
       
      
     
         

            <tr className="tbottom">
              <td align="left" className="dataleft">
                Total
              </td>
              <td align="left">61,000</td>
              <td align="left">0</td>
              <td align="left" className="dataright">
                31,500
              </td>
            </tr>
          </table>

          <div className="tabledatamview">
            <div className="hisorymview">
              {/* <Button variant="text">Submitted History</Button> */}
              <Link to="ClientHistoryView" variant="text">
                Submitted History
              </Link>
            </div>
            {tableDatamview.map((tableDatamview) => {
              return (
                <>
                  {" "}
                  <Box sx={{ margin: "0 auto", width: "90vw" }}>
                    <Cards
                      key={tableDatamview.id}
                      id={tableDatamview.id}
                      Utilized={tableDatamview.Utilized}
                      segment={tableDatamview.segment}
                      utilized={tableDatamview.utilized}
                      pending={tableDatamview.pending}
                      available={tableDatamview.available}
                      Pending={tableDatamview.Pending}
                      Available={tableDatamview.Available}
                      icon={tableDatamview.icon}
                    />
                  </Box>
                </>
              );
            })}

            <Box sx={{ margin: "0 auto", width: "90vw" }}>
              <Total
                sxc={{
                  display: "flex",
                  justifyContent: "space-between",
                  altignItems: "center",
                }}
              />
            </Box>

            <Box sx={{ margin: "0 auto", width: "90vw", marginTop: "10px" }}>
              <Button
                sx={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
        <div className="btnbox">
          <button className="submitbtn" type="button">
            Submit
          </button>
        </div>
      </div>
      {HistoryModal && (
        <ClientModal
          setHistoryModal={setHistoryModal}
          HistoryModal={HistoryModal}
        />
      )}
    </>
  );
};

export default TableData;
