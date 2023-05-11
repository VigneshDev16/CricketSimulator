import {StyleSheet} from 'react-native';

const styles = () =>
  StyleSheet.create({
    parent: {
      flex: 1,
      marginRight: 20,
      marginLeft: 20,
    },
    scoreCard: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    scoreBox: {flexDirection: 'column'},
    scoreText: {marginTop: 20, fontSize: 20},
    runsCard: {marginRight: 20},
    runsText: {fontSize: 80},
    runsLbl: {marginTop: 20, fontSize: 25, textAlign: 'center'},
    playerBox: {
      flex: 2,
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      alignSelf: 'center',
      width: '100%',
      justifyContent: 'space-between',
    },
    bowlContainer: {justifyContent: 'center', flex: 1},
    bowlButton: {
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      padding: 10,
    },
    bowlText: {textAlign: 'center'},
    playerNameText: {textAlign: 'center', fontSize: 20},
  });

export default styles;
