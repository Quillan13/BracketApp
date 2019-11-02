import BracketParticipant from './BracketParticipant';

export default class BracketMatch {
	public ParentIndex?: number;
	public FirstParticipant?: BracketParticipant;
	public SecondParticipant?: BracketParticipant;

	public name: string;
	public children: BracketMatch[];

	constructor(first?: BracketParticipant, second?: BracketParticipant) {
		this.FirstParticipant = first;
		this.SecondParticipant = second;

		this.name = `${(first && first.name) || '""'} VS ${(second && second.name) || '""'}`;
		this.children = [];
	}

	public toString = () => {
		return `${(this.FirstParticipant && this.FirstParticipant.name) || '""'} VS ${(this.SecondParticipant && this.SecondParticipant.name) ||
			'""'}. Parent: ${this.ParentIndex != null ? this.ParentIndex : '""'}`;
	};
}
