import { IconContext, IconType, IconBaseProps } from 'react-icons';

interface IReactIconsProps extends IconBaseProps {
  Icon: IconType;
  className?: string;
  style?: any;
}

const ReactIcons = ({ Icon, className, ...props }: IReactIconsProps) => {
  return (
    <IconContext.Provider value={{ className }}>
      <Icon {...props} />
    </IconContext.Provider>
  );
};

export default ReactIcons;
