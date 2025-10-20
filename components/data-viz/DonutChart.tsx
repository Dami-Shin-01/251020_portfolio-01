'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { cn } from '@/lib/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: {
    labels: string[];
    values: number[];
    colors?: string[];
  };
  className?: string;
  size?: number;
}

/**
 * DonutChart 컴포넌트
 * 도넛 차트
 */
export function DonutChart({ data, className, size = 300 }: DonutChartProps) {
  const defaultColors = [
    '#00a0a0', // primary-500
    '#0073e6', // secondary-500
    '#4dc4c4', // primary-300
    '#4da6ff', // secondary-300
    '#006666', // primary-700
    '#004080', // secondary-700
  ];

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors || defaultColors.slice(0, data.values.length),
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
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
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: '65%',
  };

  return (
    <div className={cn('flex items-center justify-center', className)} style={{ width: size, height: size }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
