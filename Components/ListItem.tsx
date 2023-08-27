import {faDotCircle, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

function ListItem({toDo, onDelete}) {
  return (
    <View style={styles.rowView}>
      <View style={styles.toDoView}>
        <View style={styles.toDoTextView}>
          <FontAwesomeIcon
            style={styles.toDoIcon}
            icon={faDotCircle}
            size={25}
          />
          <Text style={styles.toDoText}>{toDo}</Text>
        </View>
      </View>
      <View style={styles.deleteView}>
        <View style={styles.pressableDeleteView}>
          <Pressable onPress={onDelete} style={styles.pressableDelete}>
            <FontAwesomeIcon
              style={styles.deleteIcon}
              icon={faTrash}
              size={20}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = {
  rowView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  toDoView: {
    flex: 0.85,
  },
  toDoTextView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  toDoText: {
    fontSize: 22,
  },
  deleteView: {
    flex: 0.15,
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 5,
  },
  deleteIcon: {
    flex: 1,
    color: 'white',
  },
  toDoIcon: {
    color: '#0d6efd',
    marginRight: 10,
  },
  pressableDeleteView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressableDelete: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

export default ListItem;
