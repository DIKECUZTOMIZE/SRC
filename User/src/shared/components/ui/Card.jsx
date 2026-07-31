/* eslint-disable no-unused-vars */
import React from "react";
import cardTokens from "../../styles/cardTokens";

// Class merger utility
const cx = (...classes) => classes.filter(Boolean).join(" ");

// Main Card Component
const CardBase = React.memo(
  ({
    children,
    className,
    variant = "elevated",
    hoverEffect = false,
    ...props
  }) => {
    return (
      <div
        className={cx(
          cardTokens.base,
          cardTokens.variants?.[variant] || cardTokens.variants?.elevated,
          hoverEffect && cardTokens.hoverEffect,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardBase.displayName = "Card";

// Card Header Sub-component
const CardHeader = React.memo(({ children, className, ...props }) => (
  <div className={cx(cardTokens.header, className)} {...props}>
    {children}
  </div>
));
CardHeader.displayName = "Card.Header";

// Card Title Sub-component
const CardTitle = React.memo(
  ({ children, className, as: Component = "h3", ...props }) => (
    <Component className={cx(cardTokens.title, className)} {...props}>
      {children}
    </Component>
  ),
);
CardTitle.displayName = "Card.Title";

// Card Description Sub-component
const CardDescription = React.memo(({ children, className, ...props }) => (
  <p className={cx(cardTokens.description, className)} {...props}>
    {children}
  </p>
));
CardDescription.displayName = "Card.Description";

// Card Body Sub-component
const CardBody = React.memo(({ children, className, ...props }) => (
  <div className={cx(cardTokens.body, className)} {...props}>
    {children}
  </div>
));
CardBody.displayName = "Card.Body";

// Card Footer Sub-component
const CardFooter = React.memo(({ children, className, ...props }) => (
  <div className={cx(cardTokens.footer, className)} {...props}>
    {children}
  </div>
));
CardFooter.displayName = "Card.Footer";

// Attach Sub-components to Main Card
export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
