import React from "react";
import {Text,Image, View} from 'react-native';
import styles from './Card.style';


const Card= ({product})=> {

    function inStock(product){
        

        if(!(product)){
            return(
                <Text style={styles.stock}>STOKTA YOK</Text>        
                )}       
    }
     
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.imgURL}}></Image>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.inStock}>{inStock(product.inStock)}</Text>

        </View>
    )
};

export default Card;