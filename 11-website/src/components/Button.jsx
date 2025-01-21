import React from 'react'

function Button({
    children,
    type="button",
    textColour="text-white",
    className="",
    ...props
}) {
  return (
    <Button  className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</Button>
)}

export default Button