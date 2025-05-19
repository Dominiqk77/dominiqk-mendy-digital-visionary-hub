
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Scatter,
} from 'recharts';

export type ChartProps = {
  type: 'line' | 'area' | 'bar' | 'pie' | 'radar' | 'composed' | 'scatter' | 'donut';
  data?: Array<any>;
  series?: Array<any>;
  options?: any;
  width?: number | string;
  height?: number | string;
};

export const Chart = ({
  type,
  data,
  series,
  options,
  width = '100%',
  height = '100%',
}: ChartProps) => {
  if (!data && !series) {
    return <div>No data provided</div>;
  }

  const chartData = data || [];
  const chartSeries = series || [];
  const colors = options?.colors || ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

  // Extract commonly used options
  const showGrid = options?.grid?.show !== false;
  const showLegend = options?.legend?.show !== false;
  const showTooltip = options?.tooltip?.show !== false;
  const xAxisDataKey = options?.xaxis?.dataKey || 'name';
  const gridStyle = { strokeDasharray: '3 3', stroke: options?.grid?.color || '#e0e0e0' };

  // Common props for most charts
  const commonProps = {
    width: typeof width === 'number' ? width : '100%',
    height: typeof height === 'number' ? height : 300,
    margin: options?.chart?.margin || { top: 10, right: 30, left: 0, bottom: 0 },
  };

  switch (type) {
    case 'line':
      return (
        <ResponsiveContainer width={width} height={height}>
          <LineChart data={chartData} {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {chartSeries.map((item: any, index: number) => (
              <Line
                key={index}
                type="monotone"
                dataKey={item.dataKey || item.name}
                name={item.name}
                stroke={item.color || colors[index % colors.length]}
                strokeWidth={item.strokeWidth || 2}
                dot={item.dot !== false}
                activeDot={item.activeDot !== false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );

    case 'area':
      return (
        <ResponsiveContainer width={width} height={height}>
          <AreaChart data={chartData} {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {chartSeries.map((item: any, index: number) => (
              <Area
                key={index}
                type="monotone"
                dataKey={item.dataKey || item.name}
                name={item.name}
                fill={item.color || colors[index % colors.length]}
                stroke={item.stroke || item.color || colors[index % colors.length]}
                fillOpacity={item.fillOpacity || 0.3}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      );

    case 'bar':
      return (
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={chartData} {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {chartSeries.map((item: any, index: number) => (
              <Bar
                key={index}
                dataKey={item.dataKey || item.name}
                name={item.name}
                fill={item.color || colors[index % colors.length]}
                radius={item.radius || [0, 0, 0, 0]}
                barSize={item.barSize || options?.plotOptions?.bar?.barSize || 20}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      );

    case 'pie':
    case 'donut':
      const outerRadius = type === 'donut' ? '80%' : '60%';
      const innerRadius = type === 'donut' ? '60%' : '0';
      return (
        <ResponsiveContainer width={width} height={height}>
          <PieChart {...commonProps}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={options?.dataLabels?.enabled !== false}
              label={options?.dataLabels?.enabled !== false}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              dataKey={options?.dataKey || 'value'}
              nameKey={options?.nameKey || 'name'}
            >
              {chartData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
              ))}
            </Pie>
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
          </PieChart>
        </ResponsiveContainer>
      );

    case 'radar':
      return (
        <ResponsiveContainer width={width} height={height}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData} {...commonProps}>
            <PolarGrid />
            <PolarAngleAxis dataKey={xAxisDataKey} />
            <PolarRadiusAxis />
            {chartSeries.map((item: any, index: number) => (
              <Radar
                key={index}
                name={item.name}
                dataKey={item.dataKey || item.name}
                stroke={item.color || colors[index % colors.length]}
                fill={item.color || colors[index % colors.length]}
                fillOpacity={0.6}
              />
            ))}
            {showLegend && <Legend />}
            {showTooltip && <Tooltip />}
          </RadarChart>
        </ResponsiveContainer>
      );

    case 'composed':
      return (
        <ResponsiveContainer width={width} height={height}>
          <ComposedChart data={chartData} {...commonProps}>
            {showGrid && <CartesianGrid stroke="#f5f5f5" />}
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {chartSeries.map((item: any, index: number) => {
              switch (item.type) {
                case 'bar':
                  return (
                    <Bar
                      key={index}
                      dataKey={item.dataKey}
                      name={item.name}
                      fill={item.color || colors[index % colors.length]}
                      barSize={item.barSize || 20}
                    />
                  );
                case 'line':
                  return (
                    <Line
                      key={index}
                      type="monotone"
                      dataKey={item.dataKey}
                      name={item.name}
                      stroke={item.color || colors[index % colors.length]}
                    />
                  );
                case 'area':
                  return (
                    <Area
                      key={index}
                      type="monotone"
                      dataKey={item.dataKey}
                      name={item.name}
                      fill={item.color || colors[index % colors.length]}
                      stroke={item.color || colors[index % colors.length]}
                    />
                  );
                default:
                  return null;
              }
            })}
          </ComposedChart>
        </ResponsiveContainer>
      );

    case 'scatter':
      return (
        <ResponsiveContainer width={width} height={height}>
          <ScatterChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey="x" name={options?.xaxis?.name || 'x'} />
            <YAxis dataKey="y" name={options?.yaxis?.name || 'y'} />
            {showTooltip && <Tooltip cursor={{ strokeDasharray: '3 3' }} />}
            {showLegend && <Legend />}
            {chartSeries.map((item: any, index: number) => (
              <Scatter
                key={index}
                name={item.name}
                data={item.data || chartData}
                fill={item.color || colors[index % colors.length]}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      );

    default:
      return <div>Unsupported chart type</div>;
  }
};

export default Chart;
