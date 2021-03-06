import React, { Component } from 'react'
import { View } from 'react-native'
import { handleAddingCard } from '../actions'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  Title, InputField, CreateGrid,
} from '../styled'
import { BG_COLOR, PLACEHOLDER_COLOR, } from '../utils/colors'
import ButtonChoice from './ButtonChoice'

class NewCard extends Component {

  state = {
    question: '',
    answer:''
  }

  updateState = (text, category) => {
    this.setState((prevState) => ({
      ...prevState,
      [category]: text
    }))
  }

  handleSubmit = () => {
    let { addCard, goBack } = this.props
    let card = {
      question: this.state.question,
      answer: this.state.answer
    }

    addCard(card)
      .then(goBack)
  }

  render() {
    let { question, answer } = this.state
    return (
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: BG_COLOR }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={ false }
          extraHeight={200}
        >
          <CreateGrid>
            <Title>Please fill out fields to create this card</Title>
            <View>
              <InputField
                onChangeText={(text) => this.updateState(text, 'question')}
                value={question}
                placeholder='Question'
                placeholderTextColor={PLACEHOLDER_COLOR}
              />
              <InputField
                onChangeText={(text) => this.updateState(text, 'answer')}
                value={answer}
                placeholder='Answer'
                placeholderTextColor={PLACEHOLDER_COLOR}
              />
            </View>
            <ButtonChoice text={'Create Card'} shouldEnable={ (question.trim().length > 1) && (answer.trim().length > 1) } onClicking={this.handleSubmit} />
          </CreateGrid>
        </KeyboardAwareScrollView>
    )
  }
}


function mapStateToProps() { return {} } // even if empty, need it to insert before mapDispatchToProps

function mapDispatchToProps(dispatch, { navigation }) {
  const id = navigation.getParam('id', 'No ID')
  return {
    addCard: (card) => {
      return dispatch(handleAddingCard(id, card))
    },
    goBack: () => navigation.navigate('IndividualDeck', {
      id,
      createdNewCard: true, // bool to show notification about new card back in IndividualDeck
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCard)
