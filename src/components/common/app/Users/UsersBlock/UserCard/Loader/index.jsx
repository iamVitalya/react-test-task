import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={272}
    height={450}
    viewBox="0 0 272 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="280" rx="5" ry="5" width="220" height="16" /> 
    <rect x="0" y="315" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="74" cy="214" r="20" /> 
    <rect x="0" y="0" rx="10" ry="10" width="256" height="256" /> 
    <rect x="0" y="335" rx="3" ry="3" width="178" height="6" /> 
    <rect x="0" y="355" rx="3" ry="3" width="178" height="6" /> 
    <rect x="0" y="395" rx="10" ry="10" width="140" height="40" /> 
    <rect x="150" y="395" rx="10" ry="10" width="100" height="40" />
  </ContentLoader>
)

export default Loader