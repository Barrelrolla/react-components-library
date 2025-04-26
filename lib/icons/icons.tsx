import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

// https://phosphoricons.com/

export type SVGIconProps = {} & SVGProps<SVGSVGElement>;

export function SunIcon({ strokeWidth = 10, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M124 40V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0m64 88a60 60 0 1 1-60-60a60.07 60.07 0 0 1 60 60m-8 0a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52M61.17 66.83a4 4 0 0 0 5.66-5.66l-16-16a4 4 0 0 0-5.66 5.66Zm0 122.34l-16 16a4 4 0 0 0 5.66 5.66l16-16a4 4 0 0 0-5.66-5.66M192 68a4 4 0 0 0 2.83-1.17l16-16a4 4 0 1 0-5.66-5.66l-16 16A4 4 0 0 0 192 68m2.83 121.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66-5.66ZM40 124H16a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m88 88a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-24a4 4 0 0 0-4-4m112-88h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8"
        strokeWidth={strokeWidth}
        stroke="currentColor"
      ></path>
    </svg>
  );
}

export function MoonIcon({ strokeWidth = 10, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M230.72 145.06a4 4 0 0 0-4-1A92.08 92.08 0 0 1 111.94 29.27a4 4 0 0 0-5-5a100.78 100.78 0 0 0-50.86 35.61a100 100 0 0 0 140 140a100.78 100.78 0 0 0 35.59-50.87a4 4 0 0 0-.95-3.95m-39.42 48.47A92 92 0 0 1 62.47 64.7a93 93 0 0 1 39.88-30.35a100.09 100.09 0 0 0 119.3 119.3a93 93 0 0 1-30.35 39.88"
        strokeWidth={strokeWidth}
        stroke="currentColor"
      ></path>
    </svg>
  );
}

export function ComputerIcon({ strokeWidth = 10, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12"
        strokeWidth={strokeWidth}
        stroke="currentColor"
      ></path>
    </svg>
  );
}

export function Spinner({
  strokeWidth = 16,
  className,
  ...rest
}: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className={twMerge("animate-spin", className)}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M228 128a100 100 0 0 1-200 0c0-39.4 22.9-75.37 58.33-91.63a4 4 0 1 1 3.34 7.27C57.07 58.6 36 91.71 36 128a92 92 0 0 0 184 0c0-36.29-21.07-69.4-53.67-84.36a4 4 0 1 1 3.34-7.27C205.1 52.63 228 88.6 228 128"
        strokeWidth={strokeWidth}
        stroke="currentColor"
      ></path>
    </svg>
  );
}
