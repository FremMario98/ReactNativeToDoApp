import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Skeleton} from '@rneui/themed';

function LoadingSkeleton({backgroundStyle}) {
  const numbersInRange = Array.from({length: 10}, (_, index) => index + 1);
  const [items, SetItems] = useState(numbersInRange);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.mainView}>
        <View style={styles.addView}>
          <Skeleton
            animation="pulse"
            skeletonStyle={styles.addInput}
            width={'85%'}
            height={40}
          />
          <Skeleton
            animation="pulse"
            circle
            skeletonStyle={styles.addButton}
            width={40}
            height={40}
          />
        </View>
        <View style={styles.listToDo}>
          <FlatList
            data={items}
            renderItem={_ => (
              <View style={styles.toDoItemView}>
                <Skeleton
                  animation="pulse"
                  skeletonStyle={styles.addInput}
                  width={'85%'}
                  height={40}
                />
                <Skeleton
                  animation="pulse"
                  skeletonStyle={styles.addButton}
                  width={'10%'}
                  height={40}
                />
              </View>
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
  addView: {
    flex: 0.1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
  },
  addInput: {
    flex: 1,
  },
  addButton: {
    flex: 1,
  },
  listToDo: {
    flex: 0.9,
    flexDirection: 'column',
  },
  toDoItemView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
});

export default LoadingSkeleton;
