# CricketSimulator
Cricket Score Simulator based on Weighted Random Number Generator


Problem Context
It's the finals of the T20 Cup! Bengaluru and Chennai, neighbours and fierce rivals, are fighting it
out for the title. Bengaluru's star batsman Kirat is at the crease. Can he win it for Bengaluru?
Build a mobile app to simulate the last 4 overs of the match.

It's the last 4 overs of the match. Bengaluru needs 40 runs to win and with 3 wickets left. Each
player has a different probability for scoring runs. Your coding problem is to simulate the match,
ball by ball. The match simulation will require you to use a weighted random number generation
based on probability to determine the runs scored per ball.

![image](https://github.com/vickyms008/CricketSimulator/assets/11178009/1d7604b5-9268-4e9a-8cc0-64e34f4e2a96)


Rules of the game:
- Batsmen change strike end of every over. They also change strike when they score a 1,3
or 5
- When a player gets out, the new player comes in at the same position.
- Assume only legal balls are bowled (no wides, no no-balls etc..). Therefore, an over is
always 6 balls.

App wireframe for reference:

![image](https://github.com/vickyms008/CricketSimulator/assets/11178009/6fe3bc52-bfcd-4d7f-ab07-92b185e8dc01)

- On pressing the Bowl button a new score is generated and added to the current striker.
In the above example, Kirat is the striker and his current score is 5. On pressing the
Bowl button, if he hits a single, then striker is changed to NS Nodhi and the score for
Kirat Bolhi is updated to 6 and the striker maker (*) is switched to NS Nodhi.
- A scoreboard with score, wickets and overs is displayed in the top left corner
- The current score of the striker flashes on the top right corner. If the striker gets out then
OUT is displayed.
- When the match gets over the result is displayed in the screen as follows
- - Bengaluru won the match with 1 wicket and 2 balls
- - Bengaluru lost the match by 4 runs.



**TO RUN THE APPLICATION:**
- STEP 0: Clone the Project with both folders. Open terminal navigate to CricketSIM folder and run the following commands
- STEP 1: yarn
- STEP 2: yarn add-rtn-weightedrandnum
- STEP 3: yarn android
