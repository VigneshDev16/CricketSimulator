import React, {useEffect} from 'react';
import {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RTNWeightedRandNum from 'rtn-weightedrandnum/js/NativeWeigthedRandNum';
import styleSheet from './homeStyles';
import {
  IPlayerData,
  OVERS,
  PlayerData,
  ScoreInfo,
  TARGET,
  WICKETS,
} from './data';

const Home: () => JSX.Element = () => {
  const [runs, setRuns] = useState<number>(0);
  const [over, setOver] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [wickets, setWickets] = useState<number>(0);
  const [playerData, setPlayerData] = useState<IPlayerData[]>(PlayerData);
  const [result, setResult] = useState<boolean>(false);
  const [resultStatement, setResultStatement] = useState<string>('');

  const styles = styleSheet();

  const OnBowlClicked = async () => {
    if (result) {
      return;
    }
    let striker = playerData.find(x => x.strike);
    let value: number | undefined;
    if (striker) {
      value = await RTNWeightedRandNum?.weightedRandNum(
        ScoreInfo.scoreInfo,
        striker.probability,
      );
    }
    if (value !== undefined) {
      setRuns(value);
      if (value === 7) {
        setWickets(wickets + 1);
        if (wickets === WICKETS - 1) {
          setResult(true);
          return;
        }
        handleWicket();
      } else {
        setScore(score + value);
        handleScore(value);
        if (score + value >= TARGET) {
          setResult(true);
          return;
        }
      }
      if ([1, 3, 5].includes(value) || over % 6 === 5) {
        if ((over + 1) / 6 >= OVERS) {
          setResult(true);
          return;
        }
        handleSwitchStrike();
      }
      setOver(over + 1);
    }
  };

  function handleScore(value: number) {
    setPlayerData(prevValue => {
      let currstriker = prevValue.find(x => x.strike);
      if (currstriker) {
        currstriker.score += value ?? 0;
      }
      return prevValue;
    });
  }

  function handleWicket() {
    setPlayerData(prevValue => {
      let currstriker = prevValue.find(x => x.strike);
      let newPlayer = prevValue.find(
        x => x.out === false && x.strike === false && x.nonStriker === false,
      );
      if (currstriker) {
        currstriker.out = true;
        currstriker.strike = false;
      }
      if (newPlayer) {
        newPlayer.strike = true;
      }
      return prevValue;
    });
  }

  function handleSwitchStrike() {
    setPlayerData(prevValue => {
      let currstriker = prevValue.find(x => x.strike);
      let currNonstriker = prevValue.find(x => x.nonStriker);

      if (currstriker) {
        currstriker.strike = false;
        currstriker.nonStriker = true;
      }
      if (currNonstriker) {
        currNonstriker.strike = true;
        currNonstriker.nonStriker = false;
      }
      return prevValue;
    });
  }

  useEffect(() => {
    if (result) {
      if (score >= 40) {
        let ballsLeft = OVERS * 6 - over;
        let wicketsLeft = WICKETS - wickets;
        setResultStatement(
          'Bengaluru won the match with ' +
            wicketsLeft +
            ' wicket and ' +
            ballsLeft +
            ' balls',
        );
      } else {
        let scoreLeft = TARGET - score;
        setResultStatement(
          'Bengaluru lost the match by ' + scoreLeft + ' runs',
        );
      }
    }
  }, [result]);

  return (
    <View style={styles.parent}>
      <View style={styles.scoreCard}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreText}>
            Score : {score + ' - ' + wickets}
          </Text>
          <Text style={styles.scoreText}>
            Overs :{' '}
            {over % 6 === 0
              ? over / 6
              : Math.floor(over / 6) + '.' + (over % 6)}
          </Text>
        </View>
        <View style={styles.runsCard}>
          <Text style={styles.runsText}>
            {runs === 0 ? 'Dot' : runs === 7 ? 'OUT' : runs}
          </Text>
          <Text style={styles.runsLbl}>Runs</Text>
        </View>
      </View>
      <View style={styles.playerBox}>
        <Text style={styles.playerNameText}>
          {playerData.find(x => x.strike)?.name +
            '(' +
            playerData.find(x => x.strike)?.score +
            ')' +
            '*'}
        </Text>
        <Text style={styles.playerNameText}> {result && resultStatement}</Text>
        <Text style={styles.playerNameText}>
          {playerData.find(x => x.nonStriker)?.name +
            '(' +
            playerData.find(x => x.nonStriker)?.score +
            ')'}
        </Text>
      </View>
      <View style={styles.bowlContainer}>
        <TouchableOpacity
          style={styles.bowlButton}
          onPress={OnBowlClicked}
          disabled={result}>
          <Text style={styles.bowlText}>Bowl</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
