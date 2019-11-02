export default class NumberUtility {
	static IsPerfectSquare(num: number): boolean {
		const squareRoot = Math.sqrt(num);

		const isPerfectSquare = squareRoot - Math.floor(squareRoot) === 0;

		return isPerfectSquare;
	}

	static GetClosestSquare(num: number): number {
		let perfectSquare = num;

		while (!this.IsPerfectSquare(perfectSquare)) --perfectSquare;

		return perfectSquare;
	}
}
