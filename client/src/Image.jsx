const baseUrl = import.meta.env.VITE_API_BASE_URL;
export default function Image({ src, ...rest }) {
  src = src && src.includes('https://')
    ? src : `${baseUrl}/uploads/${src}`;
  return (
    <img {...rest} src={src} alt={''} />
  );
}