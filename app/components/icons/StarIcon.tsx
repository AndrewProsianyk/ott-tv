"use client";

type StarIconProps = {
  variant?: "empty" | "half" | "full";
};

export default function StarIcon({ variant = "empty" }: StarIconProps) {
  const fillId =
    variant === "full"
      ? "solid-orange"
      : variant === "half"
      ? "half-orange"
      : "none";
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="solid-orange" x1="0" x2="12" y1="0" y2="0">
          <stop offset="0%" stopColor="#F2994A" />
          <stop offset="100%" stopColor="#F2994A" />
        </linearGradient>

        <linearGradient id="half-orange" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#F2994A" />
          <stop offset="49.9%" stopColor="#F2994A" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <path
        d="M5.12079 0.735273C5.45493 -0.105761 6.64533 -0.105761 6.97947 0.735273L7.80161 2.80462C7.94127 3.15614 8.26731 3.39878 8.64413 3.43162L10.8556 3.62435C11.7248 3.7001 12.0869 4.77472 11.4409 5.36107L9.68358 6.95598C9.41724 7.19771 9.30123 7.56386 9.37978 7.91486L9.89868 10.2336C10.0937 11.1051 9.13559 11.7757 8.38357 11.2942L6.58937 10.1453C6.26068 9.93483 5.83957 9.93483 5.51088 10.1453L3.71668 11.2942C2.96466 11.7757 2.00656 11.1051 2.20157 10.2336L2.72047 7.91486C2.79902 7.56385 2.68301 7.19771 2.41667 6.95598L0.659373 5.36107C0.0133336 4.77472 0.375467 3.7001 1.24462 3.62435L3.45612 3.43162C3.83294 3.39878 4.15898 3.15614 4.29864 2.80462L5.12079 0.735273Z"
        fill={fillId === "none" ? "#fff" : `url(#${fillId})`}
        fillOpacity={fillId === "none" ? 0.2 : 1}
      />
    </svg>
  );
}
