/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Users, Fuel, Snowflake, Gauge, Heart, Star } from "lucide-react";

 
import Button from "./Button";
import Card from "./Card";
import Image from "./Image";
import { cx } from "../../utils/cn";
import { vehicleCardToken } from "../../styles";
import Badge from "./Badge";

const VehicleCard = ({
  vehicle,
  children,
  onBookNow,

  actionVariant = "primary",
  showAction = true,
  favorite = false,
  actionLabel = "Book Now",
  onFavorite,
  editClass,
}) => {
  if (!vehicle) return null;

  const {
    brand = "",
    model = "",
    image: vehicleImage = "",

    status = "Available",
    rating = 4.8,
    totalReviews = 0,

    seats = 0,
    fuel,
    transmission,
    ac = false,
  } = vehicle;

  const image = vehicleImage?.startsWith("http")
    ? vehicleImage
    : `http://localhost:3000${vehicleImage}`;

  const vehicleName = `${brand} ${model}`;

  return (
    <Card className={vehicleCardToken.card}>
      {/* Image Section */}
      <Image
        src={image}
        alt={`${brand} ${model}`}
        wrapperClassName={vehicleCardToken.imageWrapper}
        className={vehicleCardToken.image}
      >
        {/* Status */}
        <Badge
          variant={status === "Available" ? "success" : "danger"}
          dot
          className={vehicleCardToken.statusBadge}
        >
          {status}
        </Badge>

        {/* Rating */}
        {/* <Badge variant="warning" className={vehicleCardToken.rating}>
          <Star size={12} fill="currentColor" />

          <span>{rating}</span>

          {totalReviews > 0 && (
            <span className="opacity-80">({totalReviews})</span>
          )}
        </Badge> */}

        {/* Favorite */}
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={onFavorite}
          className={vehicleCardToken.favoriteBtn}
          aria-label="Add to favorite"
        >
          <Heart
            size={16}
            className={favorite ? "fill-red-500 text-red-500" : ""}
          />
        </Button> */}
      </Image>

      {/* Body */}
      <Card.Body className={vehicleCardToken.content}>
        {/* Header */}
        <div className={vehicleCardToken.header}>
          <div className={vehicleCardToken.titleGroup}>
            <Card.Title className={vehicleCardToken.title}>
              {brand} {model}
            </Card.Title>
          </div>
        </div>

        {/* Specs */}
        <div className={cx(vehicleCardToken.specs, editClass)}>
          <Spec icon={Users} text={`${seats} Seats`} />

          <Spec icon={Fuel} text={fuel} />

          <Spec icon={Snowflake} text={ac ? "AC" : "Non AC"} />

          <Spec icon={Gauge} text={transmission} />
        </div>

        {/* Service Section */}
        {children}

        {/* Footer */}
        {showAction && (
          <Card.Footer className={vehicleCardToken.footer}>
            <Button
              variant={actionVariant}
              className={vehicleCardToken.primaryButton}
              onClick={() => onBookNow?.(vehicle)}
            >
              {actionLabel}
            </Button>
          </Card.Footer>
        )}
      </Card.Body>
    </Card>
  );
};

// Sub-component for individual specifications
const Spec = ({ icon: Icon, text }) => (
  <div className={vehicleCardToken.specItem}>
    <Icon className={vehicleCardToken.specIcon} size={14} />
    <span className="truncate">{text}</span>
  </div>
);

export default React.memo(VehicleCard);
