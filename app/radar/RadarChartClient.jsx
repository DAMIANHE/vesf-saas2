"use client";

import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const baseData = [
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

const conservativeData = [
  { variable: "Inflación", valor: 60 },
  { variable: "Morosidad", valor: 55 },
  { variable: "Fondeo", valor: 50 },
  { variable: "Crecimiento", valor: 58 },
  { variable: "Liquidez", valor: 62 },
  { variable: "Capital", valor: 70 },
  { variable: "Digitalización", valor: 55 },
  { variable: "Productividad", valor: 60 },
  { variable: "Confianza", valor: 72 },
  { variable: "Regulación", valor: 50 }
];

const stressData = [
  { variable: "Inflación", valor: 85 },
  { variable: "Morosidad", valor: 80 },
  { variable: "Fondeo", valor: 72 },
  { variable: "Crecimiento", valor: 55 },
  { variable: "Liquidez", valor: 48 },
  { variable: "Capital", valor: 52 },
  { variable: "Digitalización", valor: 45 },
  { variable: "Productividad", valor: 50 },
  { variable: "Confianza", valor: 58 },
  { variable: "Regulación", valor: 65 }
];

export default function RadarChartClient() {
  const [scenario, setScenario] = useState("base");

  const scenarioData =
    scenario === "conservative"
      ? conservativeData
      : scenario === "stress"
      ? stressData
      : baseData;

  return (
    <>
      {/* Selector de escenario */}
      <div style={{ marginBottom: 16 }}>
        <strong>Escenario:</strong>{" "}
        <button onClick={() => setScenario("conservative")}>
          Conservador
        </button>{" "}
        <button onClick={() => setScenario("base")}>
          Base
        </button>{" "}
        <button onClick={() => setScenario("stress")}>
          Tensión
        </button>
      </div>

      {/* Radar */}
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
          <RadarChart data={scenarioData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis
              dataKey="variable"
              tick={{ fill: "#e5e7eb", fontSize: 12 }}
            />
            <PolarRadiusAxis domain={[0, 100]} />
            <Radar
              dataKey="valor"
              stroke="#38bdf8"
              fill="#38bdf8"
              fillOpacity={0.6}
              strokeWidth={2}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
