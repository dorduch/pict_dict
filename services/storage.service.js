import { AsyncStorage } from 'react-native'
import { createWord }  from '../models/word';
const dummy = [
  {
    id: 'root',
    children: [1, 4]
  },
  {
    id: '1',
    name: 'conversations',
    image: require('../assets/img/hand.png'),
    children: [2, 3]
  },
  {
    id: '2',
    name: 'hello',
    image: require('../assets/img/hand.png'),
    children: []
  },
  {
    id: '3',
    name: 'good',
    image: require('../assets/img/good2.jpg'),
    children: []
  },
  {
    id: '4',
    name: 'food',
    image: require('../assets/img/food.jpg'),
    children: [5, 6, 7, 8]
  },
  {
    id: '5',
    name: 'rice',
    image: require('../assets/img/rice.png'),
    children: []
  },
  {
    id: '6',
    name: 'tomato',
    image: require('../assets/img/tomato.jpg'),
    children: []
  },
  {
    id: '7',
    name: 'beef',
    image: require('../assets/img/cow.jpg'),
    children: []
  },
  {
    id: '8',
    name: 'pork',
    image: require('../assets/img/pig.jpg'),
    children: []
  },

];

const StorageService = {

  async init() {
    try {
      // await AsyncStorage.clear();
      // const appKey = await AsyncStorage.getItem('picture_dict_zohar_dor');
      // if (!appKey) {
      dummy.forEach(async (item) => {
        const word = createWord(item);
        await AsyncStorage.setItem(`picture_dict_zohar_dor_${item.id}`, JSON.stringify(word));
      });
      await AsyncStorage.setItem('picture_dict_zohar_dor', `1`);

      // }
      return createWord(JSON.parse(await AsyncStorage.getItem('picture_dict_zohar_dor_root')));
    }
    catch (err) {
      console.log(err);
    }
  },

  async getId(id) {
    try {
      return createWord(JSON.parse(await AsyncStorage.getItem(`picture_dict_zohar_dor_${id}`)));
    }
    catch (err) {
      console.log(err);
    }
  },

  async getMultiId(idArr) {
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



