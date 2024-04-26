const Button = ({ children, url, color='#6127d1' }) => {
  return (
    <a style={{background: color}} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 outline outline-2 outline-color-purple" href={url} target="_blank">{children}</a>
  )
}

export { Button };
