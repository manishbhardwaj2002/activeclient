import React from "react";

import "../style/cardbody.css";
import TableData from "./TableData";

const CardBody = () => {
  return (
    <>
      <div className="cardbody">
        <div className="datacenter">
          <div className="databox">
            <div className="head"> Total Available</div>
            <table>
              <tr className="bg">
                <td className="left">Carry Forward</td>
                <td className="right">80,000</td>
              </tr>
              <tr>
                <td> &nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="bg">
                <td className="left">Intra-Day</td>
                <td className="right">92,000</td>
              </tr>
            </table>
          </div>

          <div className="databox">
            <div className="head">Allocated</div>
            <table>
              <tr className="bg">
                <td class="left">Carry Forward</td>
                <td className="right">80,000</td>
              </tr>
              <tr>
                <td> &nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="bg">
                <td class="left">Intra-Day</td>
                <td className="right">92,000</td>
              </tr>
            </table>
          </div>

          <div className="databox">
            <div className="head">Free Limit</div>
            <table>
              <tr className="bg">
                <td className="left">Carry Forward</td>
                <td className="right">80,000</td>
              </tr>
              <tr>
                <td> &nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="bg">
                <td className="left">Intra-Day</td>
                <td className="right">92,000</td>
              </tr>
            </table>
          </div>
          <div className="clr"></div>
        </div>

        <div className="datacentermview">
          <div className="headbox">
            <div className="leftinfo"></div>
            <div className="info">Carry Forward</div>
            <div className="info">Intra-Day</div>
          </div>
          <div className="databox">
            <div className="leftinfo"> Total Available</div>
            <div className="info">80,000</div>
            <div className="info">92,000</div>
          </div>
          <div className="databox">
            <div className="leftinfo">Allocated</div>
            <div className="info">80,000</div>
            <div className="info">92,000</div>
          </div>
          <div className="databox">
            <div className="leftinfo">Free Limit</div>
            <div className="info">80,000</div>
            <div className="info">92,000</div>
          </div>
        </div>
      </div>
      <TableData />
    </>
  );
};

export default CardBody;
