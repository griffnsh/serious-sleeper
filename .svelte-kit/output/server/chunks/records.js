import { s as sortHighAndLow } from "./universalFunctions.js";
class Records {
  /**
   * Builds a Records object that holds all the data and the functions necessary to compute a league's records (both per season, as well as for all-time).
      * 
      * Can be used for both regular season, as well as playoff records.
   */
  constructor() {
    this.leagueManagerRecords = {};
    this.leagueRosterRecords = {};
    this.seasonWeekRecords = [];
    this.leagueWeekRecords = [];
    this.seasonLongPoints = [];
    this.allTimeMatchupDifferentials = [];
    this.allTimeBiggestBlowouts = [];
    this.allTimeClosestMatchups = [];
    this.leastSeasonLongPoints = [];
    this.mostSeasonLongPoints = [];
    this.leagueWeekLows = [];
    this.leagueWeekHighs = [];
    this.currentYear = null;
    this.lastYear = null;
  }
}
Records.prototype.confirmManagerRecord = function(managerID) {
  if (!this.leagueManagerRecords[managerID]) {
    this.leagueManagerRecords[managerID] = {
      wins: 0,
      losses: 0,
      ties: 0,
      fptsFor: 0,
      fptsAgainst: 0,
      potentialPoints: 0,
      pOGames: 0,
      byes: 0,
      playoffAppearances: 0
    };
  }
};
Records.prototype.confirmRosterRecord = function(rosterID) {
  if (!this.leagueRosterRecords[rosterID]) {
    this.leagueRosterRecords[rosterID] = {
      years: []
    };
  }
};
Records.prototype.updateManagerRecord = function(managers, { rosterID, year, wins, losses, ties, fptsPerGame, fptsFor, fptsAgainst, potentialPoints, pOGames, byes }) {
  for (const managerID of managers) {
    this.confirmManagerRecord(managerID);
    this.leagueManagerRecords[managerID].wins += wins;
    this.leagueManagerRecords[managerID].losses += losses;
    this.leagueManagerRecords[managerID].ties += ties;
    this.leagueManagerRecords[managerID].fptsFor += fptsFor;
    this.leagueManagerRecords[managerID].fptsAgainst += fptsAgainst;
    this.leagueManagerRecords[managerID].potentialPoints += potentialPoints;
    this.leagueManagerRecords[managerID].pOGames += pOGames;
    this.leagueManagerRecords[managerID].byes += byes;
    this.leagueManagerRecords[managerID].playoffAppearances++;
  }
  this.confirmRosterRecord(rosterID);
  this.leagueRosterRecords[rosterID].years.push({
    wins,
    losses,
    ties,
    fpts: fptsFor,
    fptsAgainst,
    fptsPerGame,
    potentialPoints,
    pOGames,
    byes,
    rosterID,
    year
  });
};
Records.prototype.addSeasonLongPoints = function({ rosterID, fpts, fptsPerGame, year }) {
  this.seasonLongPoints.push({
    rosterID,
    fpts,
    fptsPerGame,
    year
  });
};
Records.prototype.addLeagueWeekRecord = function(entry) {
  this.leagueWeekRecords.push(entry);
};
Records.prototype.addAllTimeMatchupDifferentials = function(matchupDifferentials) {
  this.allTimeMatchupDifferentials = this.allTimeMatchupDifferentials.concat(matchupDifferentials);
};
Records.prototype.addSeasonWeekRecord = function(entry) {
  this.seasonWeekRecords.push(entry);
};
Records.prototype.finalizeAllTimeRecords = function({ currentYear, lastYear }) {
  const [allTimeBiggestBlowouts, allTimeClosestMatchups] = sortHighAndLow(this.allTimeMatchupDifferentials, "differential");
  this.allTimeBiggestBlowouts = allTimeBiggestBlowouts;
  this.allTimeClosestMatchups = allTimeClosestMatchups;
  const [leagueWeekHighs, leagueWeekLows] = sortHighAndLow(this.leagueWeekRecords, "fpts");
  this.leagueWeekHighs = leagueWeekHighs;
  this.leagueWeekLows = leagueWeekLows;
  const [mostSeasonLongPoints, leastSeasonLongPoints] = sortHighAndLow(this.seasonLongPoints, "fptsPerGame");
  this.mostSeasonLongPoints = mostSeasonLongPoints;
  this.leastSeasonLongPoints = leastSeasonLongPoints;
  this.currentYear = currentYear;
  this.lastYear = lastYear;
};
Records.prototype.returnRecords = function() {
  return {
    allTimeBiggestBlowouts: this.allTimeBiggestBlowouts,
    allTimeClosestMatchups: this.allTimeClosestMatchups,
    leastSeasonLongPoints: this.leastSeasonLongPoints,
    mostSeasonLongPoints: this.mostSeasonLongPoints,
    leagueWeekLows: this.leagueWeekLows,
    leagueWeekHighs: this.leagueWeekHighs,
    seasonWeekRecords: this.seasonWeekRecords,
    leagueManagerRecords: this.leagueManagerRecords,
    leagueRosterRecords: this.leagueRosterRecords,
    currentYear: this.currentYear,
    lastYear: this.lastYear
  };
};
export {
  Records as R
};
