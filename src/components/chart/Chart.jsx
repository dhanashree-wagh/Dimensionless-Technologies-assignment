import ChartMap from "../map/ChartMap"
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


  
export default function Chart({  data, dataKey,}) {

  return (
    <div className="body">
      <div className="map">
       
    <ChartMap />
      </div>
    <div className="chart">
      <h3 className="chartTitle">Performance over Time</h3><hr />
      <ResponsiveContainer width="100%" aspect={4 / 2}>
        <LineChart data={data}>
       
          <XAxis dataKey="name" stroke="#151516"  />
          <Line type="monotone" dataKey={dataKey} stroke="#100b6d" 
        fill="#5550bd" 
      
      />
        
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}
