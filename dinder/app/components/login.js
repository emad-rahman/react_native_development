import Reach, { Component } from 'react'
import {
    Button,
    InputGroup,
    Input,
    Icon,
    View,
    Spinner
} from 'native-base'
import { observer } from 'mobx-react/native'

@observer
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: null
        }
    }

    updateEmail(email) {
        this.setState({email})
    }

    updatePassowrd(password){
        this.setState({password})
    }

    signIn(){
        const { auth } = this.props.stores
        const { email, password} = this.state

        this.setState ({loading: true}, () => {
            auth.signIn({ email, password })
            .then(() => {
                this.props.navigator.replace({
                    title: 'Match',
                    passProps: this.props
                })
            })
        })
    }

    render() {
        const { loading } = this.state
        const { auth } = this.props.stores

        return (
            <View theme = {this.props.theme}>
                <InputGroup style = {{marginBottom:10}} borderType = 'round'>
                    <Icon style = {{color: '#fff'}} name = 'person-outline' />
                    <Input style = {{color: "#fff"}}
                        placeholder = 'Please enter email'
                        placeholderTextColor = "#fff"
                        onChangeText = {(email) => {this.updateEmail}} />
                </InputGroup>

                <InputGroup style = {{marginBottom:10}} borderType = 'round'>
                    <Icon style = {{color: '#fff'}} name = 'lock-open' />
                    <Input style = {{color: "#fff"}}
                        placeholder = 'Please enter password'
                        placeholderTextColor = "#fff"
                        secureTextEntry = {true}
                        onChangeText = {(pass) => {this.updatePassowrd(pass)}} />
                </InputGroup>
                <Button rounded block style = {{marginBottom:10}}
                    onPress = {this.signIn.bind(this)}>
                    {'Login'}
                </Button>
            </View>
        )
    }
}
