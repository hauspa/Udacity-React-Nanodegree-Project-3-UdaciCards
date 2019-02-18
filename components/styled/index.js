import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  background-color: orange;
  min-width: 200px;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`

export const DisabledButton = styled(Button)`
  opacity: 0.5;
  background-color: darkgreen;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
`

export const HeaderButton = styled.TouchableOpacity`
  margin-right: 14px;
`

export const InputField = styled.TextInput`
  padding: 10px;
  margin: 20px;
  background-color: red;
  font-size: 30px;
  border-radius: 10px;
  min-width: 200px;
  border: 0;
  background: transparent;
  border-bottom-width: 1px;
  border-bottom-color: black;
`

export const Title = styled.Text`
  font-size: 34px;
  margin: 10px;
  text-align: center;
`

export const CardDescription = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
`

export const Container = styled.View`
  flex: 1;
  background-color: #f26f28;
  color: #fff;
`

export const CenterView = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
  font-size: 80px;
`

export const BigText = styled.Text`
  font-size: 50px;
  color: white;
  text-align: center;
`
export const DeckBox = styled.TouchableOpacity`
background-color: #b71845;
margin: 20px;
padding: 20px;
border-radius: 10px;
align-items: center;
justify-content: center;
`