import React, { useState } from "react";
import { ImageOff } from "lucide-react";

import { cx } from "../../utils/cn";
import { imageToken } from "../../styles";

const Image = React.memo(
  ({
    src,
    alt,
    className,
    wrapperClassName,
    fallback = "Image not available",
    loading = "lazy",
    children,
    ...props
  }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
      <div className={cx(imageToken.wrapper, wrapperClassName)}>
        {/* Loading Skeleton */}
        {!loaded && !error && <div className={imageToken.loading} />}

        {/* Image */}
        {!error ? (
          <img
            src={src}
            alt={alt}
            loading={loading}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setLoaded(true);
              setError(true);
            }}
            className={cx(
              imageToken.image,
              !loaded && "opacity-0",
              loaded && "opacity-100",
              className,
            )}
            {...props}
          />
        ) : (
          <div className={imageToken.error}>
            <div className="flex flex-col items-center gap-2">
              <ImageOff size={28} />
              <span>{fallback}</span>
            </div>
          </div>
        )}

        {/* Overlay Elements */}
        {children}
      </div>
    );
  },
);

Image.displayName = "Image";

export default Image;
