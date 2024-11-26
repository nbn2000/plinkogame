const Loading = (props) => {
  const { width = 200, height = 200, color = "#F136A7" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid"
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "transparent",
      }}
      viewBox="0 0 100 100"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={35}
        fill="none"
        stroke={color}
        strokeDasharray="164.93361431346415 56.97787143782138"
        strokeWidth={10}
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
};

export default Loading;
