import { AsyncStorage } from 'react-native'

const dummy = {
  root: {
    id: 'root',
    children: [1, 4]
  },
  1: {
    id: '1',
    name: 'conversations',
    image: require('./assets/img/hand.png'),
    children: [2, 3]
  },
  2: {
    id: '2',
    name: 'hello',
    image: require('./assets/img/hand.png'),
    children: []
  },
  3: {
    id: '3',
    name: 'good',
    image: 'http://teachlikeachampion.com/wp-content/uploads/good2.jpg',
    children: []
  },
  4: {
    id: '4',
    name: 'food',
    image: require('./assets/img/food.jpg'),
    children: [5,6,7,8]
  },
  5: {
    id: '5',
    name: 'rice',
    image: require('./assets/img/rice.png'),
    children: []
  },
  6: {
    id: '6',
    name: 'tomato',
    image: require('./assets/img/tomato.jpg'),
    children: []
  },
  7: {
    id: '7',
    name: 'beef',
    image: require('./assets/img/cow.jpg'),
    children: []
  },
  8: {
    id: '8',
    name: 'pork',
    image: require('./assets/img/pig.jpg'),
    children: []
  },

};

const StorageService = {

  async init() {
    try {
      const appKey = await AsyncStorage.getItem('picture_dict_zohar_dor');
      if (!appKey) {
        for (let item in dummy) {
          await AsyncStorage.setItem(`picture_dict_zohar_dor_${item}`, JSON.stringify(dummy[item]));
        }
        await AsyncStorage.setItem('picture_dict_zohar_dor', `1`);

      }
      return JSON.parse(await AsyncStorage.getItem('picture_dict_zohar_dor_root'));
    }
    catch (err) {
      console.log(err);
    }
  },

  async getId(id) {
    try {
      return JSON.parse(await AsyncStorage.getItem(`picture_dict_zohar_dor_${id}`));
    }
    catch (err) {
      console.log(err);
    }
  },

  async getMultiId(idArr) {
    try {
      return (await AsyncStorage.multiGet(idArr.map(id => `picture_dict_zohar_dor_${id}`))).map(item => JSON.parse(item[1]));
    }
    catch (err) {
      console.log(err);
    }
  }
};

export default StorageService;



