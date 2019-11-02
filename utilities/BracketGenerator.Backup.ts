import NumberUtility from './Number.Utility';
import Bracket from '../types/Bracket';
import BracketMatch from '../types/BracketMatch';
import BracketParticipant from '../types/BracketParticipant';


export default class BracketGenerator {
	private NumberOfParticipants: number;
	private Participants: BracketParticipant[];

	private readonly ClosetSquareToParticipants: number;

	private NumberOfMatchesForCurrentRound: number;
	private readonly NumberOfPreliminaries: number;

	private NumberOfRounds: number;
	private Rounds: Array<BracketMatch[]>;

	constructor(particpants: BracketParticipant[]) {
		this.Participants = particpants;
		this.NumberOfParticipants = this.Participants.length;

		this.ClosetSquareToParticipants = NumberUtility.GetClosestSquare(this.NumberOfParticipants);

		this.NumberOfMatchesForCurrentRound = this.ClosetSquareToParticipants / 2;
		this.NumberOfPreliminaries = this.NumberOfParticipants - this.ClosetSquareToParticipants;

		this.Rounds = [];
		this.NumberOfRounds = Math.sqrt(this.ClosetSquareToParticipants);
	}

	GenerateBracket(): Bracket {
		this.GenerateRounds();
		this.ConvertMatchesToRootMatch();

		// this.Rounds.forEach(roundOfMatches => {
		// 	console.group();
		// 	roundOfMatches.forEach(match => console.log(match.Children));
		// 	console.groupEnd();
		// });

		return {
			RootMatch: this.Rounds[this.Rounds.length - 1][0],
		};
	}

	//TO-DO Fix
	static ConvertBracketToGame(bracket: Bracket): BracketParticipant{
		return ;
	}

	private ConvertMatchesToRootMatch() {
		let match: BracketMatch;
		let roundOfMatches: BracketMatch[];

		for (let i = 0; i < this.Rounds.length - 1; i++) {
			roundOfMatches = this.Rounds[i];

			for (let j = 0; j < roundOfMatches.length; j++) {
				match = roundOfMatches[j];
				this.Rounds[i + 1][match.ParentIndex].children.push(match);
			}
		}
	}

	private GenerateRounds() {
		if (this.NumberOfPreliminaries > 0) {
			this.NumberOfRounds++;

			this.GenerateMatchesForCurrentRound(true);
		}

		while (this.Rounds.length < this.NumberOfRounds) {
			this.GenerateMatchesForCurrentRound();

			this.NumberOfMatchesForCurrentRound /= 2;
		}
	}

	private GenerateMatchesForCurrentRound(isPrelimaryMatches = false): void {
		const matches: BracketMatch[] = [];

		const numberOfMatches = isPrelimaryMatches ? this.NumberOfPreliminaries : this.NumberOfMatchesForCurrentRound;

		const numPlayersMissing = numberOfMatches * 2 - this.Participants.length;
		const enoughPlayers = numPlayersMissing === 0;

		let match: BracketMatch;
		for (let i = 0; i < numberOfMatches; i++) {
			if (!enoughPlayers && this.Participants.length <= numPlayersMissing) {
				match = new BracketMatch(this.SelectParticipant());
			} else if (this.Participants.length > 0) {
				match = new BracketMatch(this.SelectParticipant(), this.SelectParticipant());
			} else {
				match = new BracketMatch();
			}

			if (isPrelimaryMatches) match.ParentIndex = i + this.NumberOfPreliminaries;
			else match.ParentIndex = Math.floor(i / 2);

			matches.push(match);
		}

		this.Rounds.push(matches);
	}

	private SelectParticipant(): BracketParticipant {
		const selectedIndex = 0;
		// const selectedIndex = Math.floor(Math.random() * this.Participants.length);
		return this.Participants.splice(selectedIndex, 1)[0];
	}
}
