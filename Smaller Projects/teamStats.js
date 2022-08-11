const team = {
  _players: [
    {firstName: 'Oli', lastName: 'Li', age: 21},
    {firstName: 'Joe', lastName: 'Marke', age:22},
    {firstName: 'Celia', lastName: 'Bocking', age: 23}
  ],
  _games: [
    {opponent: 'Rocco', teamPoints: 10, opponentPoints: 1},
    {opponent: 'Maddie', teamPoints: 5, opponentPoints: 10},
    {opponent: 'Ivanna', teamPoints: 3, opponentPoints: 15}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    return this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    return this._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints});
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
// console.log(team.players);

team.addGame('Titans', 100, 98);
// console.log(team.games);

