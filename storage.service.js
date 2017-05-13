import { AsyncStorage } from 'react-native'

const dummy = {
  root: {
    id: 'root',
    children: [1, 4]
  },
  1: {
    id: '1',
    name: 'conversations',
    image: 'https://lh3.googleusercontent.com/Yh6ZlCb8dQIDIwAWbwd2jboFCyTqq8wc2xbLMs9ykYemOX3vjOTtT6Npfbk-jFkCciwY=w300',
    children: [2, 3]
  },
  2: {
    id: '2',
    name: 'hello',
    image: 'https://lh3.googleusercontent.com/Yh6ZlCb8dQIDIwAWbwd2jboFCyTqq8wc2xbLMs9ykYemOX3vjOTtT6Npfbk-jFkCciwY=w300',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    children: [5,6,7,8]
  },
  5: {
    id: '5',
    name: 'rice',
    image: 'http://kindersay.com/files/images/rice.png',
    children: []
  },
  6: {
    id: '6',
    name: 'tomato',
    image: 'http://cdn2.stylecraze.com/wp-content/uploads/2013/05/tomato-hair-benefits1.jpg',
    children: []
  },
  7: {
    id: '7',
    name: 'beef',
    image: 'https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg',
    children: []
  },
  8: {
    id: '8',
    name: 'pork',
    image: 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.jpg.adapt.945.1.jpg',
    children: []
  },

};

const StorageService = {

  async init() {
    try {
      await AsyncStorage.clear();
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



