// Write your code here

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, changeTheGradientDirection, isActive} = props
  const {displayText, value} = gradientDirectionDetails

  const clickToChangeDirectionItem = () => {
    changeTheGradientDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={clickToChangeDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
