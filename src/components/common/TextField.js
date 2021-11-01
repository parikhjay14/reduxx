import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TextField extends Component {
    render() {
        const {placeholder}=this.props;
        const {textFieldStyle}=styles;
        return <TextInput placeholder={placeholder} style={textFieldStyle} placeholderTextColor="grey" onChangeText={[textFieldStyle, style]} value={value} />;
    }
}

const styles = {
    textFieldStyle: {
        width: '90%',
        height: 40,
        borderBottomWidth: 2,
        alignSelf: 'center',
        marginVertical: 10,
        borderColor: 'brown',
        color: 'black',
    },
};

// export default TextField;
export {TextField};