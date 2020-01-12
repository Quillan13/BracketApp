import 'Styles/BracketDisplay.css';
import React, { useState } from 'react';
import Match from 'Components/Match';
import SemiFinal from 'Components/SemiFinal';
import Championship from 'Components/Championship';
import Bracket from 'Data/DisneyAnimatedFilms';
import { makeStyles, Theme, createStyles, createMuiTheme, Grid } from '@material-ui/core';
import Page from 'Types/Page';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		selectGrid: {
			height: '70px',
			width: '100vw',
		},
		bracket: {
			margin: 'auto',
			width: 'fit-content',
			minHeight: 'calc(100vh - 70px)',
			padding: theme.spacing(3),
		},
		formControl: {
			margin: theme.spacing(1),
			//Keep the Drop Down From Getting Clustered
			minWidth: 150,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	})
);

const DisneyAnimatedMovies: Page = () => {
	function handleChamp1() {
		setLeft('green');
		setRight('red');
	}

	function handleChamp2() {
		setLeft('red');
		setRight('green');
	}

	function handleWinner(winner: string, id: number) {
		// winners[id] = winner;
		if (id === 1) setWinner1(winner);
		else if (id === 2) setWinner2(winner);
		else if (id === 3) setWinner3(winner);
		else if (id === 4) setWinner4(winner);
		else if (id === 5) setWinner5(winner);
		else if (id === 6) setWinner6(winner);
		else if (id === 7) setWinner7(winner);
		else if (id === 8) setWinner8(winner);
		else if (id === 9) setWinner9(winner);
		else if (id === 10) setWinner10(winner);
		else if (id === 11) setWinner11(winner);
		else if (id === 12) setWinner12(winner);
		else if (id === 13) setWinner13(winner);
		else if (id === 14) setWinner14(winner);
		else if (id === 15) setWinner15(winner);
		else if (id === 16) setWinner16(winner);
		else if (id === 17) setWinner17(winner);
		else if (id === 18) setWinner18(winner);
		else if (id === 19) setWinner19(winner);
		else if (id === 20) setWinner20(winner);
		else if (id === 21) setWinner21(winner);
		else if (id === 22) setWinner22(winner);
		else if (id === 23) setWinner23(winner);
		else if (id === 24) setWinner24(winner);
		else if (id === 25) setWinner25(winner);
		else if (id === 26) setWinner26(winner);
		else if (id === 27) setWinner27(winner);
		else if (id === 28) setWinner28(winner);
		else if (id === 29) setWinner29(winner);
		else if (id === 30) setWinner30(winner);
		else if (id === 31) setWinner31(winner);
		else if (id === 32) setWinner32(winner);
		else if (id === 33) setWinner33(winner);
		else if (id === 34) setWinner34(winner);
		else if (id === 35) setWinner35(winner);
		else if (id === 36) setWinner36(winner);
		else if (id === 37) setWinner37(winner);
		else if (id === 38) setWinner38(winner);
		else if (id === 39) setWinner39(winner);
		else if (id === 40) setWinner40(winner);
		else if (id === 41) setWinner41(winner);
		else if (id === 42) setWinner42(winner);
		else if (id === 43) setWinner43(winner);
		else if (id === 44) setWinner44(winner);
		else if (id === 45) setWinner45(winner);
		else if (id === 46) setWinner46(winner);
		else if (id === 47) setWinner47(winner);
		else if (id === 48) setWinner48(winner);
		else if (id === 49) setWinner49(winner);
		else if (id === 50) setWinner50(winner);
		else if (id === 51) setWinner51(winner);
		else if (id === 52) setWinner52(winner);
		else if (id === 53) setWinner53(winner);
		else if (id === 54) setWinner54(winner);
		else if (id === 55) setWinner55(winner);
		else if (id === 56) setWinner56(winner);
		else if (id === 57) setWinner57(winner);
		else if (id === 58) setWinner58(winner);
		else if (id === 59) setWinner59(winner);
		else if (id === 60) setWinner60(winner);
		else if (id === 61) setWinner61(winner);
		else if (id === 62) setWinner62(winner);
		else if (id === 63) setWinner63(winner);
		else if (id === 64) setWinner64(winner);
		else if (id === 65) setWinner65(winner);
		else if (id === 66) setWinner66(winner);
		else if (id === 67) setWinner67(winner);
		else if (id === 68) setWinner68(winner);
		else if (id === 69) setWinner69(winner);
		else if (id === 70) setWinner70(winner);
		else if (id === 71) setWinner71(winner);
		else if (id === 72) setWinner72(winner);
		else if (id === 73) setWinner73(winner);
		else if (id === 74) setWinner74(winner);
		else if (id === 75) setWinner75(winner);
		else if (id === 76) setWinner76(winner);
		else if (id === 77) setWinner77(winner);
		else if (id === 78) setWinner78(winner);
		else if (id === 79) setWinner79(winner);
		else if (id === 80) setWinner80(winner);
		else if (id === 81) setWinner81(winner);
		else if (id === 82) setWinner82(winner);
		else if (id === 83) setWinner83(winner);
		else if (id === 84) setWinner84(winner);
		else if (id === 85) setWinner85(winner);
		else if (id === 86) setWinner86(winner);
		else if (id === 87) setWinner87(winner);
		else if (id === 88) setWinner88(winner);
		else if (id === 89) setWinner89(winner);
		else if (id === 90) setWinner90(winner);
		else if (id === 91) setWinner91(winner);
		else if (id === 92) setWinner92(winner);
		else if (id === 93) setWinner93(winner);
		else if (id === 94) setWinner94(winner);
		else if (id === 95) setWinner95(winner);
		else if (id === 96) setWinner96(winner);
		else if (id === 97) setWinner97(winner);
		else if (id === 98) setWinner98(winner);
		else if (id === 99) setWinner99(winner);
		else if (id === 100) setWinner100(winner);
		else if (id === 101) setWinner101(winner);
		else if (id === 102) setWinner102(winner);
		else if (id === 103) setWinner103(winner);
		else if (id === 104) setWinner104(winner);
		else if (id === 105) setWinner105(winner);
		else if (id === 106) setWinner106(winner);
		else if (id === 107) setWinner107(winner);
		else if (id === 108) setWinner108(winner);
		else if (id === 109) setWinner109(winner);
		else if (id === 110) setWinner110(winner);
		else if (id === 111) setWinner111(winner);
		else if (id === 112) setWinner112(winner);
		else if (id === 113) setWinner113(winner);
		else if (id === 114) setWinner114(winner);
		else if (id === 115) setWinner115(winner);
		else if (id === 116) setWinner116(winner);
		else if (id === 117) setWinner117(winner);
		else if (id === 118) setWinner118(winner);
		else if (id === 119) setWinner119(winner);
		else if (id === 120) setWinner120(winner);
		else if (id === 121) setWinner121(winner);
		else if (id === 122) setWinner122(winner);
		else if (id === 123) setWinner123(winner);
		else if (id === 124) setWinner124(winner);
		else if (id === 125) setWinner125(winner);
		else if (id === 126) setWinner126(winner);
	}

	const classes = useStyles(createMuiTheme());
	// var winners = new Array(64);
	const [left, setLeft] = useState('default');
	const [right, setRight] = useState('default');
	const [winner1, setWinner1] = useState();
	const [winner2, setWinner2] = useState();
	const [winner3, setWinner3] = useState();
	const [winner4, setWinner4] = useState();
	const [winner5, setWinner5] = useState();
	const [winner6, setWinner6] = useState();
	const [winner7, setWinner7] = useState();
	const [winner8, setWinner8] = useState();
	const [winner9, setWinner9] = useState();
	const [winner10, setWinner10] = useState();
	const [winner11, setWinner11] = useState();
	const [winner12, setWinner12] = useState();
	const [winner13, setWinner13] = useState();
	const [winner14, setWinner14] = useState();
	const [winner15, setWinner15] = useState();
	const [winner16, setWinner16] = useState();
	const [winner17, setWinner17] = useState();
	const [winner18, setWinner18] = useState();
	const [winner19, setWinner19] = useState();
	const [winner20, setWinner20] = useState();
	const [winner21, setWinner21] = useState();
	const [winner22, setWinner22] = useState();
	const [winner23, setWinner23] = useState();
	const [winner24, setWinner24] = useState();
	const [winner25, setWinner25] = useState();
	const [winner26, setWinner26] = useState();
	const [winner27, setWinner27] = useState();
	const [winner28, setWinner28] = useState();
	const [winner29, setWinner29] = useState();
	const [winner30, setWinner30] = useState();
	const [winner31, setWinner31] = useState();
	const [winner32, setWinner32] = useState();
	const [winner33, setWinner33] = useState();
	const [winner34, setWinner34] = useState();
	const [winner35, setWinner35] = useState();
	const [winner36, setWinner36] = useState();
	const [winner37, setWinner37] = useState();
	const [winner38, setWinner38] = useState();
	const [winner39, setWinner39] = useState();
	const [winner40, setWinner40] = useState();
	const [winner41, setWinner41] = useState();
	const [winner42, setWinner42] = useState();
	const [winner43, setWinner43] = useState();
	const [winner44, setWinner44] = useState();
	const [winner45, setWinner45] = useState();
	const [winner46, setWinner46] = useState();
	const [winner47, setWinner47] = useState();
	const [winner48, setWinner48] = useState();
	const [winner49, setWinner49] = useState();
	const [winner50, setWinner50] = useState();
	const [winner51, setWinner51] = useState();
	const [winner52, setWinner52] = useState();
	const [winner53, setWinner53] = useState();
	const [winner54, setWinner54] = useState();
	const [winner55, setWinner55] = useState();
	const [winner56, setWinner56] = useState();
	const [winner57, setWinner57] = useState();
	const [winner58, setWinner58] = useState();
	const [winner59, setWinner59] = useState();
	const [winner60, setWinner60] = useState();
	const [winner61, setWinner61] = useState();
	const [winner62, setWinner62] = useState();
	const [winner63, setWinner63] = useState();
	const [winner64, setWinner64] = useState();
	const [winner65, setWinner65] = useState();
	const [winner66, setWinner66] = useState();
	const [winner67, setWinner67] = useState();
	const [winner68, setWinner68] = useState();
	const [winner69, setWinner69] = useState();
	const [winner70, setWinner70] = useState();
	const [winner71, setWinner71] = useState();
	const [winner72, setWinner72] = useState();
	const [winner73, setWinner73] = useState();
	const [winner74, setWinner74] = useState();
	const [winner75, setWinner75] = useState();
	const [winner76, setWinner76] = useState();
	const [winner77, setWinner77] = useState();
	const [winner78, setWinner78] = useState();
	const [winner79, setWinner79] = useState();
	const [winner80, setWinner80] = useState();
	const [winner81, setWinner81] = useState();
	const [winner82, setWinner82] = useState();
	const [winner83, setWinner83] = useState();
	const [winner84, setWinner84] = useState();
	const [winner85, setWinner85] = useState();
	const [winner86, setWinner86] = useState();
	const [winner87, setWinner87] = useState();
	const [winner88, setWinner88] = useState();
	const [winner89, setWinner89] = useState();
	const [winner90, setWinner90] = useState();
	const [winner91, setWinner91] = useState();
	const [winner92, setWinner92] = useState();
	const [winner93, setWinner93] = useState();
	const [winner94, setWinner94] = useState();
	const [winner95, setWinner95] = useState();
	const [winner96, setWinner96] = useState();
	const [winner97, setWinner97] = useState();
	const [winner98, setWinner98] = useState();
	const [winner99, setWinner99] = useState();
	const [winner100, setWinner100] = useState();
	const [winner101, setWinner101] = useState();
	const [winner102, setWinner102] = useState();
	const [winner103, setWinner103] = useState();
	const [winner104, setWinner104] = useState();
	const [winner105, setWinner105] = useState();
	const [winner106, setWinner106] = useState();
	const [winner107, setWinner107] = useState();
	const [winner108, setWinner108] = useState();
	const [winner109, setWinner109] = useState();
	const [winner110, setWinner110] = useState();
	const [winner111, setWinner111] = useState();
	const [winner112, setWinner112] = useState();
	const [winner113, setWinner113] = useState();
	const [winner114, setWinner114] = useState();
	const [winner115, setWinner115] = useState();
	const [winner116, setWinner116] = useState();
	const [winner117, setWinner117] = useState();
	const [winner118, setWinner118] = useState();
	const [winner119, setWinner119] = useState();
	const [winner120, setWinner120] = useState();
	const [winner121, setWinner121] = useState();
	const [winner122, setWinner122] = useState();
	const [winner123, setWinner123] = useState();
	const [winner124, setWinner124] = useState();
	const [winner125, setWinner125] = useState();
	const [winner126, setWinner126] = useState();


	return (
		<Grid container wrap="nowrap" className={classes.bracket}>
			<div className="bracket-left">
				<div className="round">
					<Match direction="left" team1={Bracket.Princesses[0].title} team2={Bracket.Princesses[15].title} click={handleWinner} id={1} />
					<Match direction="left" team1={Bracket.Princesses[1].title} team2={Bracket.Princesses[14].title} click={handleWinner} id={2} />
					<Match direction="left" team1={Bracket.Princesses[2].title} team2={Bracket.Princesses[13].title} click={handleWinner} id={3} />
					<Match direction="left" team1={Bracket.Princesses[3].title} team2={Bracket.Princesses[12].title} click={handleWinner} id={4} />
					<Match direction="left" team1={Bracket.Princesses[4].title} team2={Bracket.Princesses[11].title} click={handleWinner} id={5} />
					<Match direction="left" team1={Bracket.Princesses[5].title} team2={Bracket.Princesses[10].title} click={handleWinner} id={6} />
					<Match direction="left" team1={Bracket.Princesses[6].title} team2={Bracket.Princesses[9].title} click={handleWinner} id={7} />
					<Match direction="left" team1={Bracket.Princesses[7].title} team2={Bracket.Princesses[8].title} click={handleWinner} id={8} />
					<Match direction="left" team1={Bracket.EarlyYears[0].title} team2={Bracket.EarlyYears[15].title} click={handleWinner} id={9} />
					<Match direction="left" team1={Bracket.EarlyYears[1].title} team2={Bracket.EarlyYears[14].title} click={handleWinner} id={10} />
					<Match direction="left" team1={Bracket.EarlyYears[2].title} team2={Bracket.EarlyYears[13].title} click={handleWinner} id={11} />
					<Match direction="left" team1={Bracket.EarlyYears[3].title} team2={Bracket.EarlyYears[12].title} click={handleWinner} id={12} />
					<Match direction="left" team1={Bracket.EarlyYears[4].title} team2={Bracket.EarlyYears[11].title} click={handleWinner} id={13} />
					<Match direction="left" team1={Bracket.EarlyYears[5].title} team2={Bracket.EarlyYears[10].title} click={handleWinner} id={14} />
					<Match direction="left" team1={Bracket.EarlyYears[6].title} team2={Bracket.EarlyYears[9].title} click={handleWinner} id={15} />
					<Match direction="left" team1={Bracket.EarlyYears[7].title} team2={Bracket.EarlyYears[8].title} click={handleWinner} id={16} />
					<Match direction="left" team1={Bracket.Sequals2[0].title} team2={Bracket.Sequals2[15].title} click={handleWinner} id={17} />
					<Match direction="left" team1={Bracket.Sequals2[1].title} team2={Bracket.Sequals2[14].title} click={handleWinner} id={18} />
					<Match direction="left" team1={Bracket.Sequals2[2].title} team2={Bracket.Sequals2[13].title} click={handleWinner} id={19} />
					<Match direction="left" team1={Bracket.Sequals2[3].title} team2={Bracket.Sequals2[12].title} click={handleWinner} id={20} />
					<Match direction="left" team1={Bracket.Sequals2[4].title} team2={Bracket.Sequals2[11].title} click={handleWinner} id={21} />
					<Match direction="left" team1={Bracket.Sequals2[5].title} team2={Bracket.Sequals2[10].title} click={handleWinner} id={22} />
					<Match direction="left" team1={Bracket.Sequals2[6].title} team2={Bracket.Sequals2[9].title} click={handleWinner} id={23} />
					<Match direction="left" team1={Bracket.Sequals2[7].title} team2={Bracket.Sequals2[8].title} click={handleWinner} id={24} />
					<Match direction="left" team1={Bracket.TVMovies[0].title} team2={Bracket.TVMovies[15].title} click={handleWinner} id={25} />
					<Match direction="left" team1={Bracket.TVMovies[1].title} team2={Bracket.TVMovies[14].title} click={handleWinner} id={26} />
					<Match direction="left" team1={Bracket.TVMovies[2].title} team2={Bracket.TVMovies[13].title} click={handleWinner} id={27} />
					<Match direction="left" team1={Bracket.TVMovies[3].title} team2={Bracket.TVMovies[12].title} click={handleWinner} id={28} />
					<Match direction="left" team1={Bracket.TVMovies[4].title} team2={Bracket.TVMovies[11].title} click={handleWinner} id={29} />
					<Match direction="left" team1={Bracket.TVMovies[5].title} team2={Bracket.TVMovies[10].title} click={handleWinner} id={30} />
					<Match direction="left" team1={Bracket.TVMovies[6].title} team2={Bracket.TVMovies[9].title} click={handleWinner} id={31} />
					<Match direction="left" team1={Bracket.TVMovies[7].title} team2={Bracket.TVMovies[8].title} click={handleWinner} id={32} />
				</div>

				<div className="round">
					<Match direction="left" team1={winner1} team2={winner2} click={handleWinner} id={65} />
					<Match direction="left" team1={winner3} team2={winner4} click={handleWinner} id={66} />
					<Match direction="left" team1={winner5} team2={winner6} click={handleWinner} id={67} />
					<Match direction="left" team1={winner7} team2={winner8} click={handleWinner} id={68} />
					<Match direction="left" team1={winner9} team2={winner10} click={handleWinner} id={69} />
					<Match direction="left" team1={winner11} team2={winner12} click={handleWinner} id={70} />
					<Match direction="left" team1={winner13} team2={winner14} click={handleWinner} id={71} />
					<Match direction="left" team1={winner15} team2={winner16} click={handleWinner} id={72} />
					<Match direction="left" team1={winner17} team2={winner18} click={handleWinner} id={73} />
					<Match direction="left" team1={winner19} team2={winner20} click={handleWinner} id={74} />
					<Match direction="left" team1={winner21} team2={winner22} click={handleWinner} id={75} />
					<Match direction="left" team1={winner23} team2={winner24} click={handleWinner} id={76} />
					<Match direction="left" team1={winner25} team2={winner26} click={handleWinner} id={77} />
					<Match direction="left" team1={winner27} team2={winner28} click={handleWinner} id={78} />
					<Match direction="left" team1={winner29} team2={winner30} click={handleWinner} id={79} />
					<Match direction="left" team1={winner31} team2={winner32} click={handleWinner} id={80} />
				</div>

				<div className="round">
					<Match direction="left" team1={winner65} team2={winner66} click={handleWinner} id={97} />
					<Match direction="left" team1={winner67} team2={winner68} click={handleWinner} id={98} />
					<Match direction="left" team1={winner69} team2={winner70} click={handleWinner} id={99} />
					<Match direction="left" team1={winner71} team2={winner72} click={handleWinner} id={100} />
					<Match direction="left" team1={winner73} team2={winner74} click={handleWinner} id={101} />
					<Match direction="left" team1={winner75} team2={winner76} click={handleWinner} id={102} />
					<Match direction="left" team1={winner77} team2={winner78} click={handleWinner} id={103} />
					<Match direction="left" team1={winner79} team2={winner80} click={handleWinner} id={104} />
				</div>
                <div className="round">
                    <Match direction="left" team1={winner97} team2={winner98} click={handleWinner} id={113} />
                    <Match direction="left" team1={winner99} team2={winner100} click={handleWinner} id={114} />
                    <Match direction="left" team1={winner101} team2={winner102} click={handleWinner} id={115} />
                    <Match direction="left" team1={winner103} team2={winner104} click={handleWinner} id={116} />
                </div>

                <div className="round">
                    <Match direction="left" team1={winner113} team2={winner114} click={handleWinner} id={121} />
                    <Match direction="left" team1={winner115} team2={winner116} click={handleWinner} id={122} />
                </div>

				<SemiFinal direction="left" team1={winner121} team2={winner122} click={handleWinner} id={125}></SemiFinal>

				<Championship team1={winner125} click={handleChamp1} color={left}></Championship>
			</div>

			<div className="bracket-center">Championship</div>

			<div className="bracket-right">
				<Championship team1={winner126} click={handleChamp2} color={right}></Championship>

				<SemiFinal direction="right" team1={winner123} team2={winner124} click={handleWinner} id={126}></SemiFinal>

				<div className="round">
                    <Match direction="right" team1={winner117} team2={winner118} click={handleWinner} id={123} />
                    <Match direction="right" team1={winner119} team2={winner120} click={handleWinner} id={124} />
                </div>

                <div className="round">
                    <Match direction="right" team1={winner105} team2={winner106} click={handleWinner} id={117} />
                    <Match direction="right" team1={winner107} team2={winner108} click={handleWinner} id={118} />
                    <Match direction="right" team1={winner109} team2={winner110} click={handleWinner} id={119} />
                    <Match direction="right" team1={winner111} team2={winner112} click={handleWinner} id={120} />
                </div>

				<div className="round">
					<Match direction="right" team1={winner81} team2={winner82} click={handleWinner} id={105} />
					<Match direction="right" team1={winner83} team2={winner84} click={handleWinner} id={106} />
					<Match direction="right" team1={winner85} team2={winner86} click={handleWinner} id={107} />
					<Match direction="right" team1={winner87} team2={winner88} click={handleWinner} id={108} />
					<Match direction="right" team1={winner89} team2={winner90} click={handleWinner} id={109} />
					<Match direction="right" team1={winner91} team2={winner92} click={handleWinner} id={110} />
					<Match direction="right" team1={winner93} team2={winner94} click={handleWinner} id={111} />
					<Match direction="right" team1={winner95} team2={winner96} click={handleWinner} id={112} />
				</div>

				<div className="round">
					<Match direction="right" team1={winner33} team2={winner34} click={handleWinner} id={81} />
					<Match direction="right" team1={winner35} team2={winner36} click={handleWinner} id={82} />
					<Match direction="right" team1={winner37} team2={winner38} click={handleWinner} id={83} />
					<Match direction="right" team1={winner39} team2={winner40} click={handleWinner} id={84} />
					<Match direction="right" team1={winner41} team2={winner42} click={handleWinner} id={85} />
					<Match direction="right" team1={winner43} team2={winner44} click={handleWinner} id={86} />
					<Match direction="right" team1={winner45} team2={winner46} click={handleWinner} id={87} />
					<Match direction="right" team1={winner47} team2={winner48} click={handleWinner} id={88} />
					<Match direction="right" team1={winner49} team2={winner50} click={handleWinner} id={89} />
					<Match direction="right" team1={winner51} team2={winner52} click={handleWinner} id={90} />
					<Match direction="right" team1={winner53} team2={winner54} click={handleWinner} id={91} />
					<Match direction="right" team1={winner55} team2={winner56} click={handleWinner} id={92} />
					<Match direction="right" team1={winner57} team2={winner58} click={handleWinner} id={93} />
					<Match direction="right" team1={winner59} team2={winner60} click={handleWinner} id={94} />
					<Match direction="right" team1={winner61} team2={winner62} click={handleWinner} id={95} />
					<Match direction="right" team1={winner63} team2={winner64} click={handleWinner} id={96} />
				</div>

				<div className="round">
					<Match direction="right" team1={Bracket.ComingofAge[0].title} team2={Bracket.ComingofAge[15].title} click={handleWinner} id={33} />
					<Match direction="right" team1={Bracket.ComingofAge[1].title} team2={Bracket.ComingofAge[14].title} click={handleWinner} id={34} />
					<Match direction="right" team1={Bracket.ComingofAge[2].title} team2={Bracket.ComingofAge[13].title} click={handleWinner} id={35} />
					<Match direction="right" team1={Bracket.ComingofAge[3].title} team2={Bracket.ComingofAge[12].title} click={handleWinner} id={36} />
					<Match direction="right" team1={Bracket.ComingofAge[4].title} team2={Bracket.ComingofAge[11].title} click={handleWinner} id={37} />
					<Match direction="right" team1={Bracket.ComingofAge[5].title} team2={Bracket.ComingofAge[10].title} click={handleWinner} id={38} />
					<Match direction="right" team1={Bracket.ComingofAge[6].title} team2={Bracket.ComingofAge[9].title} click={handleWinner} id={39} />
					<Match direction="right" team1={Bracket.ComingofAge[7].title} team2={Bracket.ComingofAge[8].title} click={handleWinner} id={40} />
					<Match direction="right" team1={Bracket.Sequals1[0].title} team2={Bracket.Sequals1[15].title} click={handleWinner} id={41} />
					<Match direction="right" team1={Bracket.Sequals1[1].title} team2={Bracket.Sequals1[14].title} click={handleWinner} id={42} />
					<Match direction="right" team1={Bracket.Sequals1[2].title} team2={Bracket.Sequals1[13].title} click={handleWinner} id={43} />
					<Match direction="right" team1={Bracket.Sequals1[3].title} team2={Bracket.Sequals1[12].title} click={handleWinner} id={44} />
					<Match direction="right" team1={Bracket.Sequals1[4].title} team2={Bracket.Sequals1[11].title} click={handleWinner} id={45} />
					<Match direction="right" team1={Bracket.Sequals1[5].title} team2={Bracket.Sequals1[10].title} click={handleWinner} id={46} />
					<Match direction="right" team1={Bracket.Sequals1[6].title} team2={Bracket.Sequals1[9].title} click={handleWinner} id={47} />
					<Match direction="right" team1={Bracket.Sequals1[7].title} team2={Bracket.Sequals1[8].title} click={handleWinner} id={48} />
					<Match direction="right" team1={Bracket.Pixarish[0].title} team2={Bracket.Pixarish[15].title} click={handleWinner} id={49} />
					<Match direction="right" team1={Bracket.Pixarish[1].title} team2={Bracket.Pixarish[14].title} click={handleWinner} id={50} />
					<Match direction="right" team1={Bracket.Pixarish[2].title} team2={Bracket.Pixarish[13].title} click={handleWinner} id={51} />
					<Match direction="right" team1={Bracket.Pixarish[3].title} team2={Bracket.Pixarish[12].title} click={handleWinner} id={52} />
					<Match direction="right" team1={Bracket.Pixarish[4].title} team2={Bracket.Pixarish[11].title} click={handleWinner} id={53} />
					<Match direction="right" team1={Bracket.Pixarish[5].title} team2={Bracket.Pixarish[10].title} click={handleWinner} id={54} />
					<Match direction="right" team1={Bracket.Pixarish[6].title} team2={Bracket.Pixarish[9].title} click={handleWinner} id={55} />
					<Match direction="right" team1={Bracket.Pixarish[7].title} team2={Bracket.Pixarish[8].title} click={handleWinner} id={56} />
					<Match direction="right" team1={Bracket.TFCentury[0].title} team2={Bracket.TFCentury[15].title} click={handleWinner} id={57} />
					<Match direction="right" team1={Bracket.TFCentury[1].title} team2={Bracket.TFCentury[14].title} click={handleWinner} id={58} />
					<Match direction="right" team1={Bracket.TFCentury[2].title} team2={Bracket.TFCentury[13].title} click={handleWinner} id={59} />
					<Match direction="right" team1={Bracket.TFCentury[3].title} team2={Bracket.TFCentury[12].title} click={handleWinner} id={60} />
					<Match direction="right" team1={Bracket.TFCentury[4].title} team2={Bracket.TFCentury[11].title} click={handleWinner} id={61} />
					<Match direction="right" team1={Bracket.TFCentury[5].title} team2={Bracket.TFCentury[10].title} click={handleWinner} id={62} />
					<Match direction="right" team1={Bracket.TFCentury[6].title} team2={Bracket.TFCentury[9].title} click={handleWinner} id={63} />
					<Match direction="right" team1={Bracket.TFCentury[7].title} team2={Bracket.TFCentury[8].title} click={handleWinner} id={64} />
				</div>
			</div>
		</Grid>
	);
};

export default DisneyAnimatedMovies;
