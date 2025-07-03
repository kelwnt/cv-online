import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import ExperienciaItem from "../components/ExperienciaItem";
import FormacaoItem from "../components/FormacaoItem";

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topRow}>
          {/* Imagem */}
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.profileImageWrapper}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profileImage} />
              ) : (
                <Text style={styles.placeholderText}>
                  Toque para{"\n"}adicionar foto
                </Text>
              )}
            </View>
          </TouchableOpacity>

          {/* Informações */}
          <View style={styles.infoBlock}>
            <Text style={styles.name}>Raquel Wendt</Text>
            <Text style={styles.title}>Suporte de TI</Text>

            <View style={styles.contactSection}>
              <Text style={styles.contactTitle}>Contato</Text>
              <Text style={styles.contactText}>Email: raquelwendt24@gmail.com</Text>
              <Text style={styles.contactText}>Telefone: +55 (51) 99854-6943</Text>
            </View>
          </View>
        </View>
        {/* Seção: Sobre mim */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>Sobre mim</Text>
          <Text style={styles.aboutText}>
           Apaixonada por tecnologia desde nova, experiência com Softwares de Gestão, comumente como Sistemas ERP, suporte de TI, processos de backups e restaurações dos mesmos, testes de softwares tanto Desktop quanto Web.
          </Text>
        </View>
        {/* Seção: Certificados */}
        <View style={styles.certificatesSection}>
          <Text style={styles.sectionTitle}>Certificados</Text>

          {/* Cabeçalho da Tabela */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, styles.cellCurso]}>Curso</Text>
            <Text style={[styles.tableCell, styles.cellInstituicao]}>
              Instituição
            </Text>
            <Text style={[styles.tableCell, styles.cellAno]}>Ano</Text>
          </View>

          {/* Linhas da Tabela */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.cellCurso]}>
              Técnico em Informática
            </Text>
            <Text style={[styles.tableCell, styles.cellInstituicao]}>
              EEEPE Escola Estadual de Ensino Profissional de Estrela
            </Text>
            <Text style={[styles.tableCell, styles.cellAno]}>2023</Text>
          </View>
        </View>
        {/* Seção: Habilidades */}
        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Habilidades</Text>

          {/* Exemplo de Habilidade */}
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Montagem e manutenção de computadores</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "100%" }]} />
            </View>
          </View>

          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Redes de Computadores</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "100%" }]} />
            </View>
          </View>

          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Lógica de Programação</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "100%" }]} />
            </View>
          </View>
              </View>
     
        {/* Seção: Idiomas com gráfico circular */}
        <View style={styles.languagesSection}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>
              Idiomas
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.infoButton}
              >
                <Text style={styles.infoButtonText}>🇺🇸</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.languagesRow}>
            <View style={styles.languageCircle}>
              <CircularProgress
                value={70}
                radius={40}
                duration={1000}
                progressValueColor={"#000"}
                activeStrokeColor={"#007AFF"}
                inActiveStrokeColor={"#eee"}
                inActiveStrokeOpacity={0.4}
                title={"Inglês"}
                titleColor={"#333"}
                titleStyle={{ fontSize: 12 }}
              />
            </View>

            <View style={styles.languageCircle}>
              <CircularProgress
                value={100}
                radius={40}
                duration={1000}
                progressValueColor={"#000"}
                activeStrokeColor={"#007AFF"}
                inActiveStrokeColor={"#eee"}
                inActiveStrokeOpacity={0.4}
                title={"Português"}
                titleColor={"#333"}
                titleStyle={{ fontSize: 12 }}
              />
            </View>
          </View>
          {/* Linha divisória */}
          <View style={styles.divisor} />
          {/* Seção: Experiência Profissional */}
          <View style={styles.experienciaSection}>
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
            <ExperienciaItem
              cargo="Suporte de Tecnologia da Informação"
              empresa="Tricon Informática"
              periodo="2024 - Presente"
              descricao="Atendimento ao cliente, backups e restaurações dos mesmos, testes de softwares."
            />
            <ExperienciaItem
              cargo="Suporte de TI"
              empresa="3R SISTEMAS PERSONALIZADOS LTDA"
              periodo="02-2024 - 11-2024"
              descricao="Suporte para os clientes utilizarem o sistema ERP."
            />
          </View>
          {/* Linha divisória */}
          <View style={styles.divisor} />
          {/* Seção: Formação Acadêmica */}
          <View style={styles.formacaoSection}>
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
            <FormacaoItem
              curso="Técnico em Informática"
              instituicao="EEEPE Escola Estadual de Ensino Profissional de Estrela"
              ano="2023 - em andamento"
            />
            <FormacaoItem
              curso="Ensino Médio"
              instituicao="Colégio Estadual Presidente Castelo Branco"
              ano="2018 - 2021"
            />
          </View>
          {/* Linha divisória */}
          <View style={styles.divisor} />
        </View>
      </ScrollView>
      {/* Modal de Idiomas */}
      {modalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Níveis de Idioma</Text>

            {/* Seção: Idiomas */}
            <View style={styles.languagesSection}>
              <View style={styles.languageItem}>
                <Text style={styles.languageLabel}>
                  🇺🇸 Inglês:{" "}
                  <View style={styles.dotsRow}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <View
                        key={i}
                        style={[
                          styles.dot,
                          i <= 4 ? styles.dotFilled : styles.dotEmpty,
                        ]}
                      />
                    ))}
                  </View>
                </Text>
                <Text style={styles.modalText}>
                  Cconsegue se comunicar e entender no ambiente profissional e técnico.
                </Text>
              </View>

              <View style={styles.languageItem}>
                <Text style={styles.languageLabel}>
                  🇧🇷 Português:{" "}
                  <View style={styles.dotsRow}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <View key={i} style={[styles.dot, styles.dotFilled]} />
                    ))}
                  </View>
                </Text>

                <Text style={styles.modalText}>
                  Nativo: completo domínio da língua materna.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCloseButton}
            >
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  profileImageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#000",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholderText: {
    color: "#999",
    textAlign: "center",
    fontSize: 12,
  },
  infoBlock: {
    flex: 1,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontStyle: "italic",
    color: "gray",
    marginBottom: 10,
  },
  contactSection: {
    marginTop: 5,
  },
  contactTitle: {
    fontWeight: "bold",
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
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  aboutText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  certificatesSection: {
    marginTop: 30,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableHeader: {
    backgroundColor: "#eee",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
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
    textAlign: "right",
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
    color: "#444",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 5,
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
    color: "#444",
  },
  dotsRow: {
    flexDirection: "row",
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotFilled: {
    backgroundColor: "#007AFF",
  },
  dotEmpty: {
    backgroundColor: "#ccc",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  languagesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  },
  languageCircle: {
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  languagesHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoButton: {
    marginLeft: 8,
    backgroundColor: "#eee",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  infoButtonText: {
    fontSize: 16,
  },

  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "100%",
    maxWidth: 320,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  modalText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  modalCloseButton: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 6,
  },
  modalCloseText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  experienciaSection: {
    marginTop: 30,
  },
  formacaoSection: {
    marginTop: 30,
  },
  divisor: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 24,
  },
});