"use client";

import * as React from "react";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, ResponsiveContainer, 
         XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";

import { cn } from "@/lib/utils";

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[];
}

const chartColors = {
  primary: "var(--chart-primary, hsl(252 100% 69%))",
  secondary: "var(--chart-secondary, hsl(215 20% 65%))",
  tertiary: "var(--chart-tertiary, hsl(216 12% 84%))",
  muted: "var(--chart-muted, hsl(215 16% 47%))",
};

const tooltipStyles = {
  border: "none",
  borderRadius: "6px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  background: "rgba(3, 7, 18, 0.8)",
  backdropFilter: "blur(8px)",
  padding: "8px 12px",
  color: "white",
};

export function LineChartComponent({
  data,
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 16% 47% / 0.2)" />
          <XAxis dataKey="name" stroke="hsl(215 16% 47%)" />
          <YAxis stroke="hsl(215 16% 47%)" />
          <Tooltip 
            contentStyle={tooltipStyles}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={chartColors.primary}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke={chartColors.secondary} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarChartComponent({
  data,
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 16% 47% / 0.2)" />
          <XAxis dataKey="name" stroke="hsl(215 16% 47%)" />
          <YAxis stroke="hsl(215 16% 47%)" />
          <Tooltip
            contentStyle={tooltipStyles}
          />
          <Legend />
          <Bar dataKey="pv" fill={chartColors.primary} radius={[4, 4, 0, 0]} />
          <Bar dataKey="uv" fill={chartColors.secondary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AreaChartComponent({
  data,
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 16% 47% / 0.2)" />
          <XAxis dataKey="name" stroke="hsl(215 16% 47%)" />
          <YAxis stroke="hsl(215 16% 47%)" />
          <Tooltip
            contentStyle={tooltipStyles}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke={chartColors.primary}
            fill={chartColors.primary}
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke={chartColors.secondary}
            fill={chartColors.secondary}
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke={chartColors.tertiary}
            fill={chartColors.tertiary}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RadarChartComponent({
  data,
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {/* This is a placeholder for RadarChart which is not included in this implementation */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Radar Chart (not implemented)
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export function PieChartComponent({
  data,
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || chartColors.primary} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyles} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RadialBarChartComponent({
  data,
  className,
  ...props
}: ChartProps) {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {/* This is a placeholder for RadialBarChart which is not included in this implementation */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Radial Bar Chart (not implemented)
        </div>
      </ResponsiveContainer>
    </div>
  );
}

// Export a single Chart component with a default type
export function Chart({
  type = "bar",
  ...props
}: ChartProps & { type?: "line" | "bar" | "area" | "radar" | "pie" | "radialBar" }) {
  switch (type) {
    case "line":
      return <LineChartComponent {...props} />;
    case "area":
      return <AreaChartComponent {...props} />;
    case "radar":
      return <RadarChartComponent {...props} />;
    case "pie":
      return <PieChartComponent {...props} />;
    case "radialBar":
      return <RadialBarChartComponent {...props} />;
    case "bar":
    default:
      return <BarChartComponent {...props} />;
  }
}
