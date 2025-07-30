import Image from "./Image.jsx";
export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'w-full h-full object-cover block';
  }
  return (
    <Image className={className} src={place.photos[index]} alt="" />
  );
}