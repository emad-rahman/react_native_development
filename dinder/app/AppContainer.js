import react, { Component } from 'react'
import { Drawer, View} from 'native-base'

export default class AppContainer extends Component {
    constructor (props){
        this.state = {
            store: {},
            theme: null
        }
    }

    toggleDrawer() {
        this.state.toggled ? this._drawer.close() : this._drawer.open();
    }

    openDrawer(){
        this.setState({toggled: true})
    }

    closeDrawer(){
        this.setState({toggled: false})
    }

    render(){
        return (
            <Drawer
                ref = {(ref) => this._drawer = ref}
                type = "displace"
                content = {<View style={{backgroundColor: "#000", height: 1000}}
                />}
                onClose = {this.closeDrawer.bind(this)}
                onOpen = {this.openDrawer.bind(this)}
                openDrawerOffset = {0.2}
        )
    }
}
