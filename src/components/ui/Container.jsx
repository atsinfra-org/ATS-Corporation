export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
