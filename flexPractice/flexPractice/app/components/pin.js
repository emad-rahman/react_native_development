import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text } from 'react-native'
import {
    Back,
    Heart,
    More,
    PinIcon,
    Share
} from '../util/icons'

export default class Pin extends Component {
    render() {
        return (
            <View style={styles.PinContainer}>
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                        <Back />
                        <Heart />
                        <Share />
                        <More />
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <View style={styles.PinButton}>
                            <PinIcon />
                            <Text style={styles.PinButtonText}>Save</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.PinContent}>
                    <Text style={styles.ImagePlaceholder}>Placeholder</Text>
                </View>

                <View style={styles.PinMeta}>
                    <View style={styles.PinMetaTextContainer}>
                        <Text style={styles.PinMetaText}>Saved from</Text>
                        <Text style={styles.PinMetaText}>website.com</Text>
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <View style={styles.PinButton}>
                            <Text style={styles.PinButtonText}>Visit</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.PinUser}>
                    <View style={styles.PinUserAvatar}>
                        <Text>Placeholder</Text>
                    </View>
                    <View style={styles.PinUserContainer}>
                        <Text style={styles.PinUserText}>
                            <Text style={styles.TextBold}>User Name</Text>saved to
                            <Text style={styles.TextBold}>Space</Text>
                        </Text>
                        <Text style={styles.PinUserText}>Lorem Ipsem</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    PinContainer: {
        flex:1,
        alignSelf: 'stretch'
    },
    PinHeader: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flex: 1,
        padding: 8
    },
    UtilityNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    PinButton: {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 16,
        justifyContent: 'space-between',
        width: 65
    },
    PinButtonText: {
        color: 'white'
    },
    PinButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    PinContent: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 16
    },
    ImagePlaceholder: {
        backgroundColor: '#1e1e1e',
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 16
    },
    PinMeta: {
        backgroundColor: 'white',
        flex: 1
    },
    PinUser: {
        flex: 5
    }
})
