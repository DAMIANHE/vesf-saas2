"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { variable: "Inflación", valor: 72 },
  { variable: "Morosidad", valor: 68 },
  { variable: "Fondeo", valor: 55 },
  { variable: "Crecimiento", valor: 61 },
  { variable: "Liquidez", valor: 58 },
  { variable: "Capital", valor: 64 },
  { variable: "Digitalización", valor: 49 },
  { variable: "Productividad", valor: 57 },
  { variable: "Confianza", valor: 66 },
  { variable: "Regulación", valor: 53 }
];

export default function RadarChartClient() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="variable" stroke="#e5e7eb" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            dataKey="valor"
            stroke="#38bdf8"
            fill="#38bdf8"
            fillOpacity={0.4}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
