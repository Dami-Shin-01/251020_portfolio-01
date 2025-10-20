'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { cn } from '@/lib/utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      values: number[];
      color?: string;
      fill?: boolean;
    }[];
  };
  className?: string;
  curved?: boolean;
  title?: string;
  showGrid?: boolean;
}

/**
 * LineChart 컴포넌트
 * Chart.js 기반 선형 차트 (단일/다중 라인, 영역 채우기 옵션)
 */
export function LineChart({
  data,
  className,
  curved = true,
  title,
  showGrid = true,
}: LineChartProps) {
  const defaultColors = [
    '#00a0a0', // primary-500
    '#0073e6', // secondary-500
    '#4dc4c4', // primary-300
    '#4da6ff', // secondary-300
  ];

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => {
      const color = dataset.color || defaultColors[index % defaultColors.length];
      return {
        label: dataset.label,
        data: dataset.values,
        borderColor: color,
        backgroundColor: dataset.fill
          ? color.replace(')', ', 0.1)').replace('rgb', 'rgba')
          : 'transparent',
        fill: dataset.fill || false,
        tension: curved ? 0.4 : 0,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        borderWidth: 3,
      };
    }),
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
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
        grid: {
          display: showGrid,
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            family: 'Pretendard Variable, sans-serif',
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: showGrid,
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
      <Line data={chartData} options={options} />
    </div>
  );
}
