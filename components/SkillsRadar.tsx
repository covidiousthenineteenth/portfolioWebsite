import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Skill } from "@/lib/data";

interface Props {
  data: Skill[];
}

export default function SkillsRadar({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <Radar name="Level" dataKey="level" stroke="#ff00ff" fill="#ff00ff" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}