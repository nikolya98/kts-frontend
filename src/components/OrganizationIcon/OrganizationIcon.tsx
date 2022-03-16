import { IconProps } from "@shared/types/IconProps";

const OrganizationIcon: React.FC<IconProps> = ({
  className = "",
  fill = "#4B6A9B",
  width = "20",
  height = "20",
}): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="001-office-building">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8583 1.55835L1.7 0.166681C1.275 0.100014 0.841666 0.216681 0.516666 0.491681C0.191666 0.775014 0 1.18335 0 1.60835V19.1667C0 19.625 0.375 20 0.833333 20H3.54166V15.625C3.54166 14.8167 4.19166 14.1667 5 14.1667H7.08333C7.89166 14.1667 8.54166 14.8167 8.54166 15.625V20H12.0833V3.00001C12.0833 2.28335 11.5667 1.67501 10.8583 1.55835ZM4.58333 12.2917H3.33333C2.98833 12.2917 2.70833 12.0117 2.70833 11.6667C2.70833 11.3217 2.98833 11.0417 3.33333 11.0417H4.58333C4.92833 11.0417 5.20833 11.3217 5.20833 11.6667C5.20833 12.0117 4.92833 12.2917 4.58333 12.2917ZM3.33333 9.79167H4.58333C4.92833 9.79167 5.20833 9.51167 5.20833 9.16667C5.20833 8.82167 4.92833 8.54167 4.58333 8.54167H3.33333C2.98833 8.54167 2.70833 8.82167 2.70833 9.16667C2.70833 9.51167 2.98833 9.79167 3.33333 9.79167ZM4.58333 7.29167H3.33333C2.98833 7.29167 2.70833 7.01167 2.70833 6.66667C2.70833 6.32167 2.98833 6.04168 3.33333 6.04168H4.58333C4.92833 6.04168 5.20833 6.32167 5.20833 6.66667C5.20833 7.01167 4.92833 7.29167 4.58333 7.29167ZM3.33333 4.79168H4.58333C4.92833 4.79168 5.20833 4.51168 5.20833 4.16668C5.20833 3.82168 4.92833 3.54168 4.58333 3.54168H3.33333C2.98833 3.54168 2.70833 3.82168 2.70833 4.16668C2.70833 4.51168 2.98833 4.79168 3.33333 4.79168ZM8.74999 12.2917H7.49999C7.15499 12.2917 6.87499 12.0117 6.87499 11.6667C6.87499 11.3217 7.15499 11.0417 7.49999 11.0417H8.74999C9.09499 11.0417 9.37499 11.3217 9.37499 11.6667C9.37499 12.0117 9.09499 12.2917 8.74999 12.2917ZM7.49999 9.79167H8.74999C9.09499 9.79167 9.37499 9.51167 9.37499 9.16667C9.37499 8.82167 9.09499 8.54167 8.74999 8.54167H7.49999C7.15499 8.54167 6.87499 8.82167 6.87499 9.16667C6.87499 9.51167 7.15499 9.79167 7.49999 9.79167ZM8.74999 7.29167H7.49999C7.15499 7.29167 6.87499 7.01167 6.87499 6.66667C6.87499 6.32167 7.15499 6.04168 7.49999 6.04168H8.74999C9.09499 6.04168 9.37499 6.32167 9.37499 6.66667C9.37499 7.01167 9.09499 7.29167 8.74999 7.29167ZM7.49999 4.79168H8.74999C9.09499 4.79168 9.37499 4.51168 9.37499 4.16668C9.37499 3.82168 9.09499 3.54168 8.74999 3.54168H7.49999C7.15499 3.54168 6.87499 3.82168 6.87499 4.16668C6.87499 4.51168 7.15499 4.79168 7.49999 4.79168Z"
          fill={fill}
        />
        <path
          id="Shape_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9166 7.79251L18.85 9.03501C19.5308 9.18584 20 9.77168 20 10.46V18.5417C20 19.3458 19.3458 20 18.5416 20H12.9166V7.79251ZM15.625 17.5H16.875C17.22 17.5 17.5 17.22 17.5 16.875C17.5 16.53 17.22 16.25 16.875 16.25H15.625C15.28 16.25 15 16.53 15 16.875C15 17.22 15.28 17.5 15.625 17.5ZM16.875 15H15.625C15.28 15 15 14.72 15 14.375C15 14.03 15.28 13.75 15.625 13.75H16.875C17.22 13.75 17.5 14.03 17.5 14.375C17.5 14.72 17.22 15 16.875 15ZM15.625 12.5H16.875C17.22 12.5 17.5 12.22 17.5 11.875C17.5 11.53 17.22 11.25 16.875 11.25H15.625C15.28 11.25 15 11.53 15 11.875C15 12.22 15.28 12.5 15.625 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default OrganizationIcon;
