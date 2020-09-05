type Props = {
  src: string;
};

const PhotoProfile = (props: Props) => {
  return <img className="object-cover h-8 w-8 rounded-full cursor-pointer" src={props.src} />;
};

export default PhotoProfile;
