import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

// to change onClick
type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  noHover?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    noHover,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined} // because there's collision with onClick on button
    />
  );

  // if clickable === true => wrap icon in button
  if (clickable) {
    // here we use props.onClick because we don't have onClick inside NonClickableIcon
    return (
      <button
        className={classNames(cls.button, { [cls.noHover]: noHover }, [])}
        type="button"
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
