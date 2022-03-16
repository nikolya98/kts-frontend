import { IconProps } from "@shared/types/IconProps";

const MailIcon: React.FC<IconProps> = ({
  className = "",
  fill = "#4B6A9B",
  width = "20",
  height = "20",
}): JSX.Element => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g id="mail-icon">
        <path
          d="M16.9452,16.9174c-0.8297,0.5332,-1.7241,0.9331,-2.6835,1.1997c-0.9594,0.2666,-2.0055,0.3999,-3.1379,0.3999c-1.1326,0,-2.1965,-0.1732,-3.192,-0.5193c-0.9955,-0.3464,-1.8649,-0.857,-2.6077,-1.5321c-0.743,-0.6752,-1.3292,-1.5078,-1.7583,-2.4981c-0.4293,-0.9903,-0.6438,-2.1328,-0.6438,-3.4278c0,-1.1772,0.2092,-2.2592,0.6276,-3.246c0.4183,-0.9868,0.9864,-1.835,1.7042,-2.5449c0.7177,-0.7098,1.5527,-1.2621,2.5049,-1.6568C8.7109,2.6974,9.7243,2.5,10.7992,2.5c0.6276,0,1.2389,0.0607,1.834,0.1818c0.5952,0.1213,1.1578,0.3012,1.688,0.5402c0.5302,0.2389,1.0188,0.5401,1.4662,0.9037c0.4472,0.3636,0.8313,0.7912,1.1524,1.2828c0.3208,0.4918,0.5715,1.0457,0.7519,1.662c0.1803,0.6165,0.2706,1.295,0.2706,2.0359c0,0.7618,-0.1012,1.449,-0.3029,2.0618c-0.2021,0.6128,-0.4761,1.1358,-0.8224,1.5685c-0.3462,0.4328,-0.7484,0.767,-1.2065,1.0024c-0.4581,0.2355,-0.9431,0.3531,-1.4553,0.3531c-0.3752,0,-0.6889,-0.0571,-0.9413,-0.1713c-0.2526,-0.1143,-0.4491,-0.2753,-0.5897,-0.4831c-0.1407,-0.2077,-0.2291,-0.457,-0.2652,-0.7479c-0.0362,-0.2908,-0.0215,-0.6734,0.0291,-1.0267c-0.3679,0.7964,-0.8316,1.4405,-1.3762,1.8109c-0.5448,0.3705,-1.1416,0.5557,-1.7908,0.5557c-0.3824,0,-0.7106,-0.0639,-0.9847,-0.1921c-0.2742,-0.1281,-0.5032,-0.3013,-0.6871,-0.5194c-0.184,-0.2181,-0.3192,-0.4741,-0.4058,-0.7686c-0.0866,-0.2942,-0.1299,-0.6111,-0.1299,-0.9504c0,-0.3878,0.0522,-0.7807,0.1569,-1.179c0.1045,-0.3981,0.2578,-0.779,0.4599,-1.1426c0.2019,-0.3636,0.4507,-0.7045,0.7466,-1.0231c0.2957,-0.3185,0.6311,-0.5937,1.0063,-0.8258c0.375,-0.2319,0.7899,-0.4155,1.2444,-0.5505c0.4544,-0.135,0.9449,-0.2026,1.4716,-0.2026c0.2958,0,0.5969,0.026,0.9035,0.0779c0.3066,0.0519,0.5681,0.1298,0.7844,0.2337l-1.3991,4.6759"
          fill="none"
          stroke={fill}
        />
      </g>
    </svg>
  );
};

export default MailIcon;