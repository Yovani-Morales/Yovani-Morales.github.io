const Article = ({ children, className }) => {
  return (
    <article className={"rounded-[50px] bg-[#1d1c2043] border border-color-gray "+className}>{children}</article>
  )
}

export { Article };
