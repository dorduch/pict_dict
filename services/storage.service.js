// @flow
import {AsyncStorage} from 'react-native';
import {createWord} from '../models/word';
import type {Word} from '../types/types';
const dummy: Array<Word> = [
  {
    id: 0,
    name: 'root',
    children: [3, 4],
  },
  {
    id: 1,
    name: 'conversations',
    image: require ('../assets/img/hand.png'),
    children: [2, 3],
  },
  {
    id: 2,
    name: 'hello',
    image: require ('../assets/img/hand.png'),
    children: [],
  },
  {
    id: 3,
    name: 'good',
    image: require ('../assets/img/good2.jpg'),
    children: [],
  },
  {
    id: 4,
    name: 'food',
    image: require ('../assets/img/food.jpg'),
    children: [5, 6, 7, 8],
  },
  {
    id: 5,
    name: 'rice',
    image: require ('../assets/img/rice.png'),
    children: [],
  },
  {
    id: 6,
    name: 'tomato',
    image: require ('../assets/img/tomato.jpg'),
    children: [],
  },
  {
    id: 7,
    name: 'beef',
    image: require ('../assets/img/cow.jpg'),
    children: [],
  },
  {
    id: 8,
    name: 'pork',
    image: require ('../assets/img/pig.jpg'),
    children: [],
  },
];

const StorageService = {
  init () {
    const promiseArr = [];
    dummy.forEach ((item: Word) => {
      const word = createWord (item);
      promiseArr.push (
        AsyncStorage.setItem (
          `picture_dict_zohar_dor_${item.id}`,
          JSON.stringify (word)
        )
      );
    });
    promiseArr.push (AsyncStorage.setItem ('picture_dict_zohar_dor', `1`));
    return Promise.all (promiseArr)
      .then (res => AsyncStorage.getItem ('picture_dict_zohar_dor_0'))
      .then (res => createWord (JSON.parse (res)));
  },

  getId (id: number) {
    return AsyncStorage.getItem (`picture_dict_zohar_dor_${id}`).then (res =>
      createWord (JSON.parse (res))
    );
  },

  getMultiId (idArr: Array<number>) {
    return AsyncStorage.multiGet (
      idArr.map (id => `picture_dict_zohar_dor_${id}`)
    ).then (res => res.map (item => createWord (JSON.parse (item[1]))));
  },
};

export default StorageService;
