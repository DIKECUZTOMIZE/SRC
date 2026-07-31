import React from "react";
import { blankStateToken } from "../../styles";

const BlankState = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}) => {
  return (
    <div className={`${blankStateToken.container} ${className || ""}`}>
      {Icon && (
        <Icon
          size={40}
          className={`${blankStateToken.icon} ${iconClassName || ""}`}
        />
      )}

      <h3 className={blankStateToken.title}>{title}</h3>

      {description && (
        <p className={blankStateToken.description}>{description}</p>
      )}
    </div>
  );
};

export default React.memo(BlankState);
