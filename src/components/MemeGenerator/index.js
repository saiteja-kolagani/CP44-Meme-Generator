import React, {Component} from 'react'

import {
  MainContainer,
  FormContainer,
  Heading,
  InputFieldContainer,
  LabelInput,
  InputFiled,
  SelectTag,
  OptionTag,
  SubmitButton,
  MemeContainer,
  TopeAndBottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {showMeme: false, submittedData: {}}

    this.imageUrlRef = React.createRef()
    this.topTextRef = React.createRef()
    this.bottomTextRef = React.createRef()
    this.fontSizeRef = React.createRef()
  }

  setInputValues = () => {
    this.imageUrlRef.current.value = ''
    this.topTextRef.current.value = ''
    this.bottomTextRef.current.value = ''
    this.fontSizeRef.current.value = fontSizesOptionsList[0].optionId
  }

  componentDidMount() {
    this.setInputValues()
  }

  onSubmitForm = event => {
    event.preventDefault()
    const submittedData = {
      imageUrl: this.imageUrlRef.current.value,
      topText: this.topTextRef.current.value,
      bottomText: this.bottomTextRef.current.value,
      fontSize: this.fontSizeRef.current.value,
    }
    this.setState({
      submittedData,
      showMeme: true,
    })
  }

  render() {
    const {showMeme, submittedData} = this.state
    return (
      <MainContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <InputFieldContainer>
            <LabelInput htmlFor="image-url">Image URL</LabelInput>
            <br />
            <InputFiled
              type="text"
              placeholder="Enter the Image URL"
              id="image-url"
              ref={this.imageUrlRef}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <LabelInput htmlFor="top-text">Top Text</LabelInput>
            <br />
            <InputFiled
              type="text"
              placeholder="Enter the Top Text"
              id="top-text"
              ref={this.topTextRef}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <LabelInput htmlFor="bottom-text">Bottom Text</LabelInput>
            <br />
            <InputFiled
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottom-text"
              ref={this.bottomTextRef}
            />
          </InputFieldContainer>
          <InputFieldContainer>
            <LabelInput htmlFor="font-size">Font Size</LabelInput>
            <br />
            <SelectTag id="font-size" ref={this.fontSizeRef}>
              {fontSizesOptionsList.map(each => (
                <OptionTag key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </OptionTag>
              ))}
            </SelectTag>
          </InputFieldContainer>
          <SubmitButton type="submit">Generate</SubmitButton>
        </FormContainer>
        {showMeme ? (
          <MemeContainer data-testid="meme" imageUrl={submittedData.imageUrl}>
            <TopeAndBottomText fontSize={submittedData.fontSize}>
              {submittedData.topText}
            </TopeAndBottomText>
            <TopeAndBottomText fontSize={submittedData.fontSize}>
              {submittedData.bottomText}
            </TopeAndBottomText>
          </MemeContainer>
        ) : (
          <div></div>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
