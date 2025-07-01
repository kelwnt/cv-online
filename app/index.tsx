import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);

  

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* Imagem */}
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.profileImageWrapper}>
            {image ? (
              <Image source={{ uri: image }} style={styles.profileImage} />
            ) : (
              <Text style={styles.placeholderText}>
                Toque para{'\n'}adicionar foto
              </Text>
            )}
          </View>

          {/* Seção: Sobre mim */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.aboutText}>
          Desenvolvedor apaixonado por tecnologia, com experiência em aplicações móveis e web.
          Tenho facilidade com trabalho em equipe, foco em resultados e gosto de aprender coisas novas todos os dias.
        </Text>
      </View>

        </TouchableOpacity>

        {/* Informações */}
        <View style={styles.infoBlock}>
          <Text style={styles.name}>Raquel Wendt</Text>
          <Text style={styles.title}>TI</Text>

            {/* Seção: Certificados */}
      <View style={styles.certificatesSection}>
        <Text style={styles.sectionTitle}>Certificados</Text>

        {/* Cabeçalho da Tabela */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellCurso]}>Curso</Text>
          <Text style={[styles.tableCell, styles.cellInstituicao]}>Instituição</Text>
          <Text style={[styles.tableCell, styles.cellAno]}>Ano</Text>
        </View>

        {/* Linhas da Tabela */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.cellCurso]}>React Native</Text>
          <Text style={[styles.tableCell, styles.cellInstituicao]}>Alura</Text>
          <Text style={[styles.tableCell, styles.cellAno]}>2023</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.cellCurso]}>JavaScript Avançado</Text>
          <Text style={[styles.tableCell, styles.cellInstituicao]}>Rocketseat</Text>
          <Text style={[styles.tableCell, styles.cellAno]}>2022</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.cellCurso]}>UX Design</Text>
          <Text style={[styles.tableCell, styles.cellInstituicao]}>Coursera</Text>
          <Text style={[styles.tableCell, styles.cellAno]}>2021</Text>
        </View>
      </View>



            
      {/* Seção: Habilidades */}
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Habilidades</Text>

        {/* Exemplo de Habilidade */}
        <View style={styles.skillItem}>
          <Text style={styles.skillLabel}>React Native</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '90%' }]} />
          </View>
        </View>

        <View style={styles.skillItem}>
          <Text style={styles.skillLabel}>JavaScript</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '85%' }]} />
          </View>
        </View>

        <View style={styles.skillItem}>
          <Text style={styles.skillLabel}>TypeScript</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
        </View>

        <View style={styles.skillItem}>
          <Text style={styles.skillLabel}>Figma</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
        </View>
      </View>


                  {/* Seção: Idiomas */}
      <View style={styles.languagesSection}>
        <Text style={styles.sectionTitle}>Idiomas</Text>

        <View style={styles.languageItem}>
          <Text style={styles.languageLabel}>🇺🇸 Inglês</Text>
          <View style={styles.dotsRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View
                key={i}
                style={[styles.dot, i <= 4 ? styles.dotFilled : styles.dotEmpty]}
              />
            ))}
          </View>
        </View>

        <View style={styles.languageItem}>
          <Text style={styles.languageLabel}>🇪🇸 Espanhol</Text>
          <View style={styles.dotsRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View
                key={i}
                style={[styles.dot, i <= 3 ? styles.dotFilled : styles.dotEmpty]}
              />
            ))}
          </View>
        </View>

        <View style={styles.languageItem}>
          <Text style={styles.languageLabel}>🇧🇷 Português</Text>
          <View style={styles.dotsRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View
                key={i}
                style={[styles.dot, styles.dotFilled]}
              />
            ))}
          </View>
        </View>
      </View>


        <View style={styles.languageItem}>
          <Text style={styles.languageLabel}>🇪🇸 Espanhol</Text>
          <View style={styles.dotsRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View
                key={i}
                style={[styles.dot, i <= 3 ? styles.dotFilled : styles.dotEmpty]}
              />
            ))}
          </View>
        </View>

        <View style={styles.languageItem}>
          <Text style={styles.languageLabel}>🇧🇷 Português</Text>
          <View style={styles.dotsRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <View
                key={i}
                style={[styles.dot, styles.dotFilled]}
              />
            ))}
          </View>
        </View>
      </View>


      {/* Seção: Idiomas com gráfico circular */}
<View style={styles.languagesSection}>
  <Text style={styles.sectionTitle}>Idiomas</Text>

  <View style={styles.languagesRow}>
    <View style={styles.languageCircle}>
      <CircularProgress
        value={90}
        radius={40}
        duration={1000}
        progressValueColor={'#000'}
        activeStrokeColor={'#007AFF'}
        inActiveStrokeColor={'#eee'}
        inActiveStrokeOpacity={0.4}
        title={'Inglês'}
        titleColor={'#333'}
        titleStyle={{ fontSize: 12 }}
      />
    </View>

    <View style={styles.languageCircle}>
      <CircularProgress
        value={70}
        radius={40}
        duration={1000}
        progressValueColor={'#000'}
        activeStrokeColor={'#007AFF'}
        inActiveStrokeColor={'#eee'}
        inActiveStrokeOpacity={0.4}
        title={'Espanhol'}
        titleColor={'#333'}
        titleStyle={{ fontSize: 12 }}
      />
    </View>

    <View style={styles.languageCircle}>
      <CircularProgress
        value={100}
        radius={40}
        duration={1000}
        progressValueColor={'#000'}
        activeStrokeColor={'#007AFF'}
        inActiveStrokeColor={'#eee'}
        inActiveStrokeOpacity={0.4}
        title={'Português'}
        titleColor={'#333'}
        titleStyle={{ fontSize: 12 }}
      />
    </View>
  </View>
</View>


          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Contato</Text>
            <Text style={styles.contactText}>Email: raquelwendt24@gmail.com</Text>
            <Text style={styles.contactText}>Telefone: +55 (51) 99854-6943</Text>
            <Text style={styles.contactText}>Website: www.tiger-portfolio.com</Text>
          </View>
        </View>
      </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderText: {
    color: '#999',
    textAlign: 'center',
    fontSize: 12,
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 10,
  },
  contactSection: {
    marginTop: 5,
  },
  contactTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactText: {
    fontSize: 14,
  },
  
  aboutSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  aboutText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
    certificatesSection: {
    marginTop: 30,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tableCell: {
    fontSize: 14,
    paddingHorizontal: 4,
  },
  cellCurso: {
    flex: 2,
  },
  cellInstituicao: {
    flex: 2,
  },
  cellAno: {
    flex: 1,
    textAlign: 'right',
  },
    skillsSection: {
    marginTop: 30,
  },
  skillItem: {
    marginBottom: 12,
  },
  skillLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: '#444',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
    scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
    languagesSection: {
    marginTop: 30,
  },
  languageItem: {
    marginBottom: 16,
  },
  languageLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotFilled: {
    backgroundColor: '#007AFF',
  },
  dotEmpty: {
    backgroundColor: '#ccc',
  },
   languagesSection: {
    marginTop: 30,
  },
  languagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
  languageCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },

});
