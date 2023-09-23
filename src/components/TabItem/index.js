import './index.css'

const TabItem = props => {
  const {displayText, tabId, onClickTabItem, isActive} = props
  console.log(tabId)
  const activeClassName = isActive ? 'active' : ''
  console.log(activeClassName)

  const onButtonClicked = () => {
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-container">
      <button
        type="button"
        className={`tab-button ${activeClassName}`}
        onClick={onButtonClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
