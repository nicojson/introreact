import React from "react"
import ContentLoader from "react-content-loader"

const TodoLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={250}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#293545"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="53" y="15" rx="6" ry="6" width="193" height="79" />
    <rect x="53" y="115" rx="6" ry="6" width="193" height="79" /> 
    <rect x="53" y="215" rx="6" ry="6" width="193" height="79" /> 
    <rect x="53" y="315" rx="6" ry="6" width="193" height="79" /> 
    <rect x="53" y="415" rx="6" ry="6" width="193" height="79" />
  </ContentLoader>
)

export { TodoLoader };

