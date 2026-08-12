import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

// https://phosphoricons.com/

export type SVGIconProps = {} & SVGProps<SVGSVGElement>;
const defaultStrokeWidth = 8;

export function SunIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M124 40V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0m64 88a60 60 0 1 1-60-60a60.07 60.07 0 0 1 60 60m-8 0a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52M61.17 66.83a4 4 0 0 0 5.66-5.66l-16-16a4 4 0 0 0-5.66 5.66Zm0 122.34l-16 16a4 4 0 0 0 5.66 5.66l16-16a4 4 0 0 0-5.66-5.66M192 68a4 4 0 0 0 2.83-1.17l16-16a4 4 0 1 0-5.66-5.66l-16 16A4 4 0 0 0 192 68m2.83 121.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66-5.66ZM40 124H16a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m88 88a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-24a4 4 0 0 0-4-4m112-88h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8"
      ></path>
    </svg>
  );
}

export function MoonIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M230.72 145.06a4 4 0 0 0-4-1A92.08 92.08 0 0 1 111.94 29.27a4 4 0 0 0-5-5a100.78 100.78 0 0 0-50.86 35.61a100 100 0 0 0 140 140a100.78 100.78 0 0 0 35.59-50.87a4 4 0 0 0-.95-3.95m-39.42 48.47A92 92 0 0 1 62.47 64.7a93 93 0 0 1 39.88-30.35a100.09 100.09 0 0 0 119.3 119.3a93 93 0 0 1-30.35 39.88"
      ></path>
    </svg>
  );
}

export function ComputerIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12"
      ></path>
    </svg>
  );
}

export function EmtpySquareIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z"
      ></path>
    </svg>
  );
}

export function SquareCheckIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
      ></path>
    </svg>
  );
}

export function EmptyCircleIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"
      ></path>
    </svg>
  );
}

export function CircleCheckIcon({ strokeWidth = 0, ...rest }: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
      ></path>
    </svg>
  );
}

export function CaretDownIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"
      ></path>
    </svg>
  );
}

export function CheckMarkIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"
      ></path>
    </svg>
  );
}

export function PlusIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"
      ></path>
    </svg>
  );
}

export function MinusIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"
      ></path>
    </svg>
  );
}

export function CloseIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
      ></path>
    </svg>
  );
}

export function XIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
      ></path>
    </svg>
  );
}

export function OpenEyeIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
      ></path>
    </svg>
  );
}

export function ClosedEyeIcon({
  strokeWidth = defaultStrokeWidth,
  ...rest
}: SVGIconProps) {
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"
      ></path>
    </svg>
  );
}

export function Spinner({
  strokeWidth = 12,
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
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M228 128a100 100 0 0 1-200 0c0-39.4 22.9-75.37 58.33-91.63a4 4 0 1 1 3.34 7.27C57.07 58.6 36 91.71 36 128a92 92 0 0 0 184 0c0-36.29-21.07-69.4-53.67-84.36a4 4 0 1 1 3.34-7.27C205.1 52.63 228 88.6 228 128"
      ></path>
    </svg>
  );
}
