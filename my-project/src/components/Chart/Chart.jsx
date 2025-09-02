import { LineChart, Line, XAxis, YAxis } from "recharts";

const Chart = () => {
  const gymData = [
    { id: 1, month: "Jan", newMembers: 15, activeMembers: 120, revenue: 1800 },
    { id: 2, month: "Feb", newMembers: 20, activeMembers: 135, revenue: 2100 },
    { id: 3, month: "Mar", newMembers: 25, activeMembers: 150, revenue: 2400 },
    { id: 4, month: "Apr", newMembers: 18, activeMembers: 160, revenue: 2500 },
    { id: 5, month: "May", newMembers: 30, activeMembers: 185, revenue: 2900 },
    { id: 6, month: "Jun", newMembers: 22, activeMembers: 190, revenue: 3000 },
    { id: 7, month: "Jul", newMembers: 28, activeMembers: 210, revenue: 3400 },
    { id: 8, month: "Aug", newMembers: 35, activeMembers: 240, revenue: 3900 },
    { id: 9, month: "Sep", newMembers: 40, activeMembers: 270, revenue: 4500 },
    { id: 10, month: "Oct", newMembers: 38, activeMembers: 290, revenue: 4800 },
    { id: 11, month: "Nov", newMembers: 32, activeMembers: 300, revenue: 5000 },
    { id: 12, month: "Dec", newMembers: 45, activeMembers: 340, revenue: 5600 }
  ];

  return (
    <div className="w-3/4 mx-auto bg-white">
      <LineChart width={800} height={400} data={gymData}>
           <XAxis dataKey={'month'}></XAxis>
         
           <Line dataKey={'revenue'}></Line>
           <Line dataKey={'newMembers'} stroke="red"></Line>
           <Line dataKey={'activeMembers'} stroke="blue"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
