// Write your code here
import './index.css'

const SuggestionItem = prop => {
  const {eachItem, selectSuggestionItem} = prop

  const selectItem = () => {
    selectSuggestionItem(eachItem.suggestion)
  }

  return (
    <li>
      <p>{eachItem.suggestion}</p>
      <button type="button" onClick={selectItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
