import {
  faArrowAltCircleRight,
  faArrowRight,
  faCircle,
  faDotCircle,
  faListDots,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
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
        <Pressable onPress={onDelete}>
          <FontAwesomeIcon style={styles.deleteIcon} icon={faTrash} size={20} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = {
  rowView: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
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
    alignItems: 'center',
    backgroundColor: '#dc3545',
    padding: 15,
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
};

export default ListItem;
