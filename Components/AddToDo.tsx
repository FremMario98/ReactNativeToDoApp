import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';

function AddToDo({onAddToDo}) {
  const [toDo, SetToDo] = useState('');
  const addToDo = () => {
    onAddToDo(toDo);
    SetToDo('');
  };

  return (
    <View style={styles.mainActionView}>
      <View style={styles.toDoInputView}>
        <TextInput
          placeholder="To Do"
          style={styles.toDoTextInput}
          onChangeText={SetToDo}
          value={toDo}
        />
      </View>
      <View style={styles.btnAddToDoView}>
        <View style={styles.btnAddView}>
          <Pressable style-={styles.btnAdd} onPress={addToDo}>
            <FontAwesomeIcon
              style={styles.addPlusIcon}
              icon={faPlus}
              size={20}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = {
  mainView: {
    flex: 1,
    padding: 10,
  },
  mainActionView: {
    flexDirection: 'row',
    height: 50,
    // backgroundColor: 'blue',
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
    borderColor: '#ccd2d8',
    borderRadius: 5,
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
    backgroundColor: '#0d6efd',
    borderRadius: 5,
  },
  addPlusIcon: {
    color: 'white',
  },
  listOfToDo: {
    flex: 1,
  },
};

export default AddToDo;
