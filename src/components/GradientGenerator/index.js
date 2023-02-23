import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
  }

  generateColors = () => {
    const {
      firstColorInput,
      secondColorInput,
      activeGradientDirection,
    } = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  changeGradinetDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  changeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  changeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  render() {
    const {
      gradientValue,
      firstColorInput,
      secondColorInput,
      activeGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                changeTheGradientDirection={this.changeGradinetDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{firstColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.changeFirstColor}
                value={firstColorInput}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{secondColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.changeSecondColor}
                value={secondColorInput}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.generateColors}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
