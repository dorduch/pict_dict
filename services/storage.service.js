// @flow
import { AsyncStorage } from 'react-native';
import { createWord }  from '../models/word';
import type { Word }  from '../types/types';
const dummy : Array<Word> = [
  {
    id: 0,
    name: 'root',
    children: [1, 4],
    image: null
  },
  {
    id: 1,
    name: 'conversations',
    image: require('../assets/img/hand.png').toString(),
    children: [2, 3]
  },
  {
    id: 2,
    name: 'hello',
    image: require('../assets/img/hand.png').toString(),
    children: []
  },
  {
    id: 3,
    name: 'good',
    image: require('../assets/img/good2.jpg').toString(),
    children: []
  },
  {
    id: 4,
    name: 'food',
    image: require('../assets/img/food.jpg').toString(),
    children: [5, 6, 7, 8]
  },
  {
    id: 5,
    name: 'rice',
    image: require('../assets/img/rice.png').toString(),
    children: []
  },
  {
    id: 6,
    name: 'tomato',
    image: require('../assets/img/tomato.jpg').toString(),
    children: []
  },
  {
    id: 7,
    name: 'beef',
    image: require('../assets/img/cow.jpg').toString(),
    children: []
  },
  {
    id: 8,
    name: 'pork',
    image: require('../assets/img/pig.jpg').toString(),
    children: []
  },

];

const StorageService = {

  async init() {
    try {
      // await AsyncStorage.clear();
      // const appKey = await AsyncStorage.getItem('picture_dict_zohar_dor');
      // if (!appKey) {
      dummy.forEach(async (item: Word) => {
        const word = createWord(item);
        await AsyncStorage.setItem(`picture_dict_zohar_dor_${item.id}`, JSON.stringify(word));
      });
      await AsyncStorage.setItem('picture_dict_zohar_dor', `1`);

      // }
      return createWord(JSON.parse(await AsyncStorage.getItem('picture_dict_zohar_dor_0')));
    }
    catch (err) {
      console.log(err);
    }
  },

  async getId(id: number) {
    try {
      return createWord(JSON.parse(await AsyncStorage.getItem(`picture_dict_zohar_dor_${id}`)));
    }
    catch (err) {
      console.log(err);
    }
  },

  async getMultiId(idArr : Array<Number>) {
    try {
      return (await AsyncStorage.multiGet(idArr.map(id => `picture_dict_zohar_dor_${id}`)))
        .map(item => createWord(JSON.parse(item[1])));
    }
    catch (err) {
      console.log(err);
    }
  }
};

export default StorageService;



