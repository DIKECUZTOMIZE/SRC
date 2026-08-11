import React from "react";
import { Check } from "lucide-react";
import decorationCardToken from "../../../styles/decorationCardToken";

const DecorationCard = ({
  image,
  title,
  description,
  price,
  selected,
  onSelect,
}) => {

    console.log('ram')
  return (
    <div
      onClick={onSelect}
      className={`
        ${decorationCardToken.card}
        ${selected ? decorationCardToken.selected : decorationCardToken.normal}
      `}
    >
      <div className={decorationCardToken.imageWrapper}>
        {image ? (
          <img src={image} alt={title} className={decorationCardToken.image} />
        ) : (
          <div className={decorationCardToken.noImage}>No Image</div>
        )}
      </div>

      <div className={decorationCardToken.content}>
        <div className={decorationCardToken.header}>
          <h3 className={decorationCardToken.title}>{title || "Decoration"}</h3>

          {selected && (
            <span className={decorationCardToken.check}>
              <Check size={15} />
            </span>
          )}
        </div>

        <p className={decorationCardToken.description}>
          {description || "Custom Decoration"}
        </p>

        {price > 0 && <p className={decorationCardToken.price}>₹{price}</p>}
      </div>
    </div>
  );
};

export default React.memo(DecorationCard);
