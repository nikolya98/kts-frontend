export type AvatarProps = {
  className?: string;
  imgUrl: string;
  alt?: string;
  width?: number;
  height?: number;
};

const Avatar: React.FC<AvatarProps> = ({
  className = "",
  imgUrl,
  alt = "",
  width = 80,
  height = 80,
}) => {
  return (
    <img
      className={className}
      src={imgUrl}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Avatar;
