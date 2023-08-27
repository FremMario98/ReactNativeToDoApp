import uuid from 'react-native-uuid';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './Components/ListItem';
import {ToDo} from './Interfaces/ToDo.interface';
import AddToDo from './Components/AddToDo';
import LoadingSkeleton from './Components/LoadingSkeleton';

function App(): JSX.Element {
  const [toDos, SetToDos] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  // Show Loading Skeleton then set Loading to false
  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2000);
  }, []);

  const addToDo = toDo => {
    const todoItem: ToDo = {id: uuid.v4(), item: toDo};
    SetToDos([...toDos, todoItem]);
  };

  const deleteToDo = id => {
    SetToDos(toDos.filter(t => t.id !== id));
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return isLoading ? (
    <LoadingSkeleton backgroundStyle={backgroundStyle} />
  ) : (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.mainView}>
        <AddToDo onAddToDo={addToDo} />
        <View style={styles.listOfToDo}>
          <FlatList
            data={toDos}
            renderItem={({item}) => (
              <ListItem
                key={item.id}
                toDo={item.item}
                onDelete={() => deleteToDo(item.id)}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 10,
  },
  mainActionView: {
    flexDirection: 'row',
    height: 50,
  },
  toDoInputView: {
    flex: 0.8,
  },
  btnAddToDoView: {
    flex: 0.2,
    marginLeft: 10,
  },
  toDoTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
  btnAdd: {
    flex: 1,
  },
  btnAddView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  addPlusIcon: {
    fontSize: 25,
  },
  listOfToDo: {
    flex: 1,
    marginTop: 15,
  },
});

export default App;
