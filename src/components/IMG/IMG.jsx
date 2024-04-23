const IMG = ({ src, alt='image' }) => {
  return (
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  )
}

export { IMG };
