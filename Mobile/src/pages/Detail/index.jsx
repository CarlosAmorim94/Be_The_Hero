import React from 'react'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'


import styles from './styles'

import logoImage from '../../assets/logo.png'

export default function Detail() {

  function navigateBack() {
    navigation.goBack()
  }

  return (
    <View style={ styles.detailsContainer }>

      <View style={ styles.headerContainer }>
        <Image source={ logoImage }/>

        <TouchableOpacity style={ styles.headerButton } onPress={ navigateBack }>
          <Feather name="arrow-left" size={ 28 } color="#E02041"/>
          <Text style={ styles.headerButtonText }>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.incident }>
        <Text style={ styles.incidentOng }>
          APAD de Botucatu/SP
        </Text>

        <Text style={ styles.incidentDescription }>
          Cachorrinha atropelada
        </Text>

        <Text style={ styles.incidentValue }>
        R$ 120,00
        </Text>
      </View>

      <View style={ styles.contact }>
        <Text style={ styles.heroTitle }>Salve o dia!</Text>
        <Text style={ styles.heroTitle }>Seja o herói desse caso</Text>

        <Text style={ styles.heroDescription }> Entre em contato:</Text>
        <View style={ styles.contactButtons }>
          <TouchableOpacity onPress={ () => {} } style={ styles.buttonWhatsapp }>
            <FontAwesome name="whatsapp" size={ 32 } color="#E9FAEF"/>
            <Text style={[ styles.buttonText, styles.buttonTextWhatsapp ]}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => {}  } style={ styles.buttonEmail }>
            <FontAwesome name="envelope-o" size={ 30 } color="#FBE8EC"/>
            <Text style={[ styles.buttonText, styles.buttonTextEmail ]}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};