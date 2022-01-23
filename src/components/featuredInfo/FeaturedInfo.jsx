import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
  <div className="body">
  
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">TODAYS MONEY</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate  featuredIcon negative" >
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
        
          </span>
       <p className="dolar"><span style={{fontSize:"30px", color:"white",alignItems:"center", display:"flex", alignItems:"center", justifyContent:"center"}}>$</span></p>
        </div>
        
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">NEW PROJECTS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate featuredIcon">
            -11.4 <ArrowUpward  className="featuredIcon"/>
          </span>
          <p className="dolar"><span style={{fontSize:"30px", color:"white",alignItems:"center", display:"flex", alignItems:"center", justifyContent:"center"}}>$</span></p>
        </div>
        
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">SYSTEM HEALTH</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate featuredIcon negative">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
          <p className="dolar"><span style={{fontSize:"30px", color:"white",alignItems:"center", display:"flex", alignItems:"center", justifyContent:"center"}}>$</span></p>
        </div>
        
       
      </div>
      <div className="featuredItem" style={{backgroundColor:"#4851bd"}}>
        <span className="featuredTitle">ROI PER USER</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate featuredIcon">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
          <p className="dolar" style={{backgroundColor:"white"}}><span style={{fontSize:"30px", color:"#4851bd",alignItems:"center", display:"flex", alignItems:"center", justifyContent:"center"}}>$</span></p>
        </div>
      
      </div>
    </div>
    </div>
  );
}
