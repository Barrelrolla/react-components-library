import { SVGProps } from "react";

// https://phosphoricons.com/

export type SVGIconProps = {} & SVGProps<SVGSVGElement>;

export function SunIcon({ strokeWidth = 16, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      strokeWidth={strokeWidth}
      height={"1em"}
      width={"1em"}
      {...rest}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M128 40V16"
      />
      <circle
        cx="128"
        cy="128"
        r="56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M64 64 48 48m16 144-16 16M192 64l16-16m-16 144 16 16M40 128H16m112 88v24m88-112h24"
      />
    </svg>
  );
}

export function MoonIcon({ strokeWidth = 16, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      strokeWidth={strokeWidth}
      height={"1em"}
      width={"1em"}
      {...rest}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M108.11 28.11a96.09 96.09 0 0 0 119.78 119.78A96 96 0 1 1 108.11 28.11"
      />
    </svg>
  );
}

export function ComputerIcon({ strokeWidth = 16, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      strokeWidth={strokeWidth}
      height={"1em"}
      width={"1em"}
      {...rest}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <rect
        width="192"
        height="144"
        x="32"
        y="48"
        fill="none"
        stroke="currentColor"
        rx="16"
        transform="rotate(180 128 120)"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M160 224H96m-64-72h192m-96 40v32"
      />
    </svg>
  );
}

export function Spinner({ strokeWidth = 20, ...rest }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      strokeWidth={strokeWidth}
      height={"1em"}
      width={"1em"}
      {...rest}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M168 40a97 97 0 0 1 56 88 96 96 0 0 1-192 0 97 97 0 0 1 56-88"
      />
    </svg>
  );
}
