import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line react/prop-types
const ImageComponent = ({ src, alt }) => {
  return (
    <>
      <LazyLoadImage alt={alt} src={src} />;
    </>
  );
};

export default ImageComponent;
