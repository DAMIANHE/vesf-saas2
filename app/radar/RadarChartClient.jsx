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
    <div
      style={{
        width: "100%",
        height: 420,
        background: "linear-gradient(180deg, #0b1220 0%, #0f172a 100%)",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 0 40px rgba(56,189,248,0.15)"
      }}
    >
      <ResponsiveContainer>
        <RadarChart data={data}>
          <defs>
            <linearGradient id="vefsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.85} />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.55} />
            </linearGradient>
          </defs>

          <PolarGrid stroke="#334155" />
          <PolarAngleAxis
            dataKey="variable"
            tick={{ fill: "#e5e7eb", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#94a3b8", fontSize: 10 }}
          />

          <Radar
            dataKey="valor"
            stroke="#38bdf8"
            fill="url(#vefsGradient)"
            fillOpacity={0.7}
            strokeWidth={2}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #38bdf8",
              borderRadius: 8,
              color: "#e5e7eb"
            }}
            cursor={{ stroke: "#38bdf8", strokeDasharray: "3 3" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
