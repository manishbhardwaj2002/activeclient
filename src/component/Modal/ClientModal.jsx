import {React} from "react";
import '../style/historymodal.css';
import {Button} from '@mui/material';




function ClientModal({setHistoryModal}){

    const handleClose=()=>{
      setHistoryModal(false);
        };
       
    return(
<>
<div className="modalBackground" >
   
      <div className="historymodal">

        
        <div className="btnbox">
        <button   className="xclose" onClick={handleClose}>
          {" "}
          X{" "}
        </button>
        </div>
     
        <div className="modalbody">
 <table>
<tr className="thead">
<th className="dataleft">Date/Time</th>
<th>Submission</th>
<th>Amount Allocation (₹)</th>
<th className="dataright">Status</th>
</tr>

<tr className="whitebg">
<td>24/01/2022 - 22:21:42</td>
<td>Submission 1</td>
<td>61,000</td>
<td> <Button variant="contained">Pending</Button></td>
</tr>

<tr className="greybg">
<td>24/01/2022 - 22:21:42</td>
<td>Submission 3</td>
<td>61,000</td>
<td> <Button variant="contained">Pending</Button></td>
</tr>

<tr className="whitebg">
<td>24/01/2022 - 22:21:42</td>
<td>Submission 1</td>
<td>61,000</td>
<td>  <Button variant="contained">Pending</Button></td>
</tr>

<tr className="greybg">
<td>24/01/2022 - 22:21:42</td>
<td>Submission 2</td>
<td>61,000</td>
<td>  <Button variant="contained">Pending</Button></td>
</tr>

 </table>


      
        </div>
      
      </div>


    </div> 
     
</>
    )
}

export default ClientModal;