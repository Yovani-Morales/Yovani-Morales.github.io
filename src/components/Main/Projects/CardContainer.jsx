const CardContainer = ({ children, style }) => {
  return (
    <article className={"rounded-[60px] border border-color-gray bg-color-very-gray overflow-hidden "+style}>{children}</article>
  )
}

export { CardContainer };
