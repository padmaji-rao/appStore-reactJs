import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props
  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-head">{appName}</p>
    </li>
  )
}
export default AppItem
