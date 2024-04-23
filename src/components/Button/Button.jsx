const Button = ({ content, url, color='#6127d1' }) => {
  return (
    <a style={{background: color}} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4" href={url} target="_blank"><span>{content}</span></a>
  )
}

export { Button };
