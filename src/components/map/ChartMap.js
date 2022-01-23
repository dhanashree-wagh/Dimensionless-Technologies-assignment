import React from "react";
import { __DATA__ } from "./data";

import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
} from "./Mapstyles";

export default function App() {
  return (
    <Container>
      <div
        className="text"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h6 style={{ fontWeight: "600", margin: "9px 0px 1px 5px" }}>
          Active Users{" "}
        </h6>
        <p
          style={{
            fontWeight: "400",
            color: "gray",
            margin: "0px 0px 1px 5px",
          }}
        >
          page viewer per second
          <span
            style={{
             marginLeft:"7px",
              fontWeight: "700",
              fontSize: "30px",
              color: "black",
    
            }}
          >109
          </span>
        </p>
      </div>
      <MainContainer>
        {__DATA__.map(({ distance, colors }, i) => {
          return (
            <BarChartContainer key={i}>
              <Number color={colors[1]}>{distance} km</Number>
              <MakeBar height={distance * 2} colors={colors} />
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine>
          <hr />
        <div style={{display:"flex", justifyContent:"space-between", margin:'0px 10px', height:"5%"}}>
         <p> /app/projects</p> <span style={{color:"black", fontWeight:"400"}}>24</span>
        </div>
        <hr />
        <div style={{display:"flex", justifyContent:"space-between", margin:'0px 10px', height:"5%"}}>
         <p> /app/projects</p> <span style={{color:"black", fontWeight:"400"}}>21</span>
        </div>
        <hr />
        <div style={{display:"flex", justifyContent:"space-between", margin:'0px 10px', height:"5%"}}>
         <p> /app/projects</p> <span style={{ color:"black", fontWeight:"400"}}>15</span>
        </div>
        <hr />
        <div style={{display:"flex", justifyContent:"space-between", margin:'0px 10px', height:"5%"}}>
         <p> /app/projects</p> <span style={{color:"black", fontWeight:"400"}}>56</span>
        </div>
      
       

      </BlackLine>
    </Container>
  );
}
