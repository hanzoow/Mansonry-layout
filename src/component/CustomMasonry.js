import React, { Component } from 'react'
import {Image,Text} from 'react-native';
export default class CustomMasonry extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <Image
            resizeMode={'contain'}
            style={{width: 400, height: 400}}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'}}
          />
        );
    }
}
