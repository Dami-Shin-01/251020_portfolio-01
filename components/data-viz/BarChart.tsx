'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { cn } from '@/lib/utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      values: number[];
      color?: string;
    }[];
  };
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  stacked?: boolean;
  title?: string;
}

/**
 * BarChart 컴포넌트
 * Chart.js 기반 막대 차트 (수직/수평, 단일/다중 데이터셋)
 */
export function BarChart({
  data,
  className,
  orientation = 'vertical',
  stacked = false,
  title,
}: BarChartProps) {
  const defaultColors = [
    '#00a0a0', // primary-500
    '#0073e6', // secondary-500
    '#4dc4c4', // primary-300
    '#4da6ff', // secondary-300
    '#006666', // primary-700
  ];

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.values,
      backgroundColor: dataset.color || defaultColors[index % defaultColors.length],
      borderRadius: 8,
      borderSkipped: false,
    })),
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: orientation === 'horizontal' ? 'y' : 'x',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Pretendard Variable, sans-serif',
            size: 12,
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: title
        ? {
            display: true,
            text: title,
            font: {
              family: 'Pretendard Variable, sans-serif',
              size: 16,
              weight: 'bold',
            },
            padding: { bottom: 20 },
          }
        : undefined,
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: 'Pretendard Variable, sans-serif',
          size: 14,
        },
        bodyFont: {
          family: 'Pretendard Variable, sans-serif',
          size: 12,
        },
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        stacked: stacked,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Pretendard Variable, sans-serif',
            size: 11,
          },
        },
      },
      y: {
        stacked: stacked,
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            family: 'Pretendard Variable, sans-serif',
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className={cn('w-full', className)}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
