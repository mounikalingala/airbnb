import Image from "./Image.jsx";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'w-full h-full object-cover block';
  }
  return (
    <Image className={className} src={`${baseUrl}` + place.photos[index]} alt="" />
  );
}