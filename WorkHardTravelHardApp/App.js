import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, ScrollView, Alert} from 'react-native';
import { theme } from './colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fontisto from '@expo/vector-icons/Fontisto';

const STORAGE_KEY = "@toDos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, settoDos] = useState({});
  useEffect(() => {loadToDos();}, []);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const saveToDos = async (toSave) => {
    const s = JSON.stringify(toSave) //object를 String으로 바꿔줌
    await AsyncStorage.setItem(STORAGE_KEY, s)
  }
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY)
    settoDos(JSON.parse(s)); //parse는 string을 JS object로 만들어 줌
  };
  
  const addToDo = async () => {
    if(text === ""){
      return;
    }
    const newToDos = {
      ...toDos, //기존 toDos에 newToDo 합치기
      [Date.now()] : {text, working}, //key를 통해 todo를 찾기 위함.
    };
    settoDos(newToDos); //state에 저장
    await saveToDos(newToDos); //saveToDos 함수 호출, await를 사용한 이유는 저장될 때까지 기다리기 위함인데 생략 가능
    setText(""); //toDo에 value를 empty로 설정
  };
  console.log(toDos);
  const deleteToDo = async (key) => {
    Alert.alert("Delete To Do", "Are you sure?",
      [{text: "Cancel"},
        {text: "I'm Sure", 
          style: "destructive",
          onPress: async () => {
          const newToDos = {...toDos} //object를 만들고,
          delete newToDos[key] //object의 key를 삭제
          settoDos(newToDos); //state 업데이트,
          await saveToDos(newToDos); //AsyncStorage에 저장
        }}
      ]
    );
    return
    
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
        <Text style={{...styles.btnText, color: working ? "white":theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
        <Text style={{...styles.btnText, color: !working ? "white":theme.grey}}>Travel</Text>
        </TouchableOpacity>
      
      </View>
      
          <TextInput
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType='go'
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"} 
          style = {styles.input}></TextInput>
          <ScrollView>{
            Object.keys(toDos).map((key) => /*todo안의 키들을 살펴본 후, todos[key].text를 보여줌*/ //key값들만 담긴 배열 반환
            toDos[key].working === working ? ( //toDo의 working 값이 state의 working 값과 동일한지 
            <View style = {styles.toDo} key={key}>
              <Text style = {styles.toDoText}>{toDos[key].text}</Text>   
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={18} color={theme.grey} />
              </TouchableOpacity>
              
              </View> ) : null)
            }
          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input : {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo:{
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  }
});
