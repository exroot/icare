const resizeImage = (imageURL, dimentions) => {
  let imagePath; let imgType;
  if (imageURL.includes("banner")) {
    imgType = "banner";
    imagePath = imageURL.split("/banner/")[1];
  } else {
    imgType = "avatar";
    imagePath = imageURL.split("/avatar/")[1];
  }
  const [width, height] = dimentions;
  const cloudFront = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
  return (
    `${cloudFront 
    }/${width !== 200 && width !== 851 ? 200 : width}x${
      height !== 200 && height !== 315 ? 200 : height
    }` +
    `/${imgType}/${ 
    imagePath}`
  );
};

export default resizeImage;
