import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

class ListCard extends Component{
    render() {
        const {imageStyle, cardStyle, textViewStyle, downloadButtonStyle} = styles;
        const {image, ownerName} = this.props;
        return(
            <View style={cardStyle}>
                <Image
                style={imageStyle} source={{uri: image}} />
                <View style={textViewStyle}>
                    <Text>{ownerName}</Text>
                </View>
                <TouchableOpacity style={downloadButtonStyle}
                onPress={() => {
                    Alert.alert('Image downloaded!!!');
                }}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Download</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: '100%',
    },
    cardStyle: {
        backgroungColor: '#d3d3d3',
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    textViewStyle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadButtonStyle: {
        backgroundColor: 'blue',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// export default ListCard;
export {ListCard};