import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Author: {
            screens: {
              AuthorScreen: 'author',
            },
          },
          Handbook: {
            screens: {
              HandbookScreen: 'Handbook',
              HandbookDetailsScreen: 'Details'
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
