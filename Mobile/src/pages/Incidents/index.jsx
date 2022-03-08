import React from "react";
import { Feather } from '@expo/vector-icons'
import { Text, FlatList, Image, View, TouchableOpacity } from "react-native";

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {

  return (
    <View style={styles.incidentsContainer}>

      <View style={styles.headerContainer}>

        <Image source={logoImg} />

        <Text style={styles.headerText}>
          Total de 
          <Text style={styles.headerTextBold}> 0 casos</Text>
        </Text>

      </View>

      <Text style={styles.mainTitle}>Bem vindo!</Text>
      <Text style={styles.mainDescription}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList 
        style={styles.incidentsList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => (
          <View style={styles.incident}>
          
          <Text style={styles.incidentOng}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentOng}>CASO:</Text>
          <Text style={styles.incidentValue}> Cadelinha atropelada</Text>

          <Text style={styles.incidentOng}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>

          <TouchableOpacity 
          style={styles.incidentButton}
          onPress={() => {}}>

            <Feather name='arrow-right' size={16} color="#E02041" />
            <Text style={styles.incidentButtonText}>Ver mais detalhes</Text>

          </TouchableOpacity>
        
        </View>

        )}
      />

    </View>
  );
};