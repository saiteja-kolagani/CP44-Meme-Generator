// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
`
export const FormContainer = styled.form`
    padding: 30px;
`

export const Heading = styled.h1`
    font-size: 22px;
    color: #35469c;
`

export const InputFieldContainer = styled.div`
    margin-block: 15px;
`
export const LabelInput = styled.label`
    font-size: 12px;
    color: #7e858e;
`

export const InputFiled = styled.input`
    width: 300px;
    padding-inline: 12px;
    padding-block: 6px;
    font-size: 12px;
    margin-top: 4px;
    outline: none;
`

export const SelectTag = styled.select`
    width: 300px;
    padding-inline: 12px;
    padding-block: 6px;
    outline: none;
    margin-top: 4px;
    margin-bottom: 15px
`

export const OptionTag = styled.option`
    font-size: 12px;
`
export const SubmitButton = styled.button`
    padding-inline: 26px;
    padding-block: 10px;
    font-size: 12px;
    background-color: #0b69ff;
    color:  #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
`

export const MemeContainer = styled.div`
    background-image: url("${props => props.imageUrl}");
    background-size: cover;
    width: 600px;
    height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TopeAndBottomText = styled.p`
    color: #ffffff;
    font-size: ${props => props.fontSize}px;
`
