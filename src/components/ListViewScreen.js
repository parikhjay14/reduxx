import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import {ListCard, TextField} from './common';
import {connect} from 'react-redux';
import { imageSearchBoxValueChanged } from '../actions';
import axios from 'axios';
// import { thisExpression } from '@babel/types';

class ListViewScreen extends Component{
    state = {
        imageList: [],
        showLoader: false,
    };

    renderLoader() {
        if(this.state.showLoader){
            return(<ActivityIndicator 
            size='large' color='black' style={styles.loaderStyle} />);
        }
    }
    getImagesAPICall() {
        this.setState({
            showLoader: false,
        });
        axios.get('https://picsum.photos/v2/list')
        .then((response) =>{
            this.setState({
                showLoader: true,
            });
            this.setState({
                showLoader: false,
            });
        console.log(response.data);
        this.setState({
            imageList: response.data,
        });
        })
        .catch((error) =>{
        console.log(error);
        });
    }

    componentDidMount() {
        this.getImagesAPICall();
    }
    render(){
        const {ViewStyle, HeaderViewStyle} = styles;
        // const DATA = [
        //     {
        //         image: require('./meme1.jpg'),
        //         owner: 'Meme1',
        //     },
        //     {
        //         image: require('./meme2.jpg'),
        //         owner: 'Meme2',
        //     },
        //     {
        //         image: require('./meme3.jpg'),
        //         owner: 'Meme3',
        //     },
        //     {
        //         image: require('./meme4.jpg'),
        //         owner: 'Meme4',
        //     },
           
        // ];
        // this.getImagesAPICall();
        return (
            <View style ={ViewStyle}>
                <View style = {HeaderViewStyle}>
                   <Text style={{fontSize: 20, fontWeight: 'bold'}}>Image Gallery</Text>
                </View>
                <TextField
                 placeholder="Search"
                 onChangeText={value => {
                     console.log('Value of text input changed to:', value);
                 }} 
                />
                {/* <ScrollView>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                </ScrollView> */}
                <FlatList
                 //  data={DATA}
                 data={this.state.imageList}
                 renderItem={item => {
                     console.log(item, item.item, item.item.owner);
                     return(
                         <ListCard image={item.item.download_url} ownerName={item.item.author}/>
                     );
                 }}
                 
                />
                 {this.renderLoader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor: 'white',
        flex: 1,
    },
    HeaderViewStyle: {
        backgroundColor: '#d3d3d3',
        height: 80,
        elevation: 10,
        //next 4 for elevation in IOS
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontColor: 'red',
    },
    loaderStyle: {
        position: 'absolute',
        top: 0,
        bottoom: 0,
        left: 0,
        right: 0,
    },
});

const mapStateToProps = state => {
    return{
        image_search: state.imageListing.image_search,
    }
}

export default connect((mapStateToProps), {imageSearchBoxValueChanged})(ListViewScreen);