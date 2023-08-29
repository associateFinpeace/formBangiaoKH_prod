export default {
	myVar1: [],
	setUp () {
		storeValue("submitType","add new");
		storeValue("tabName","Form");
	},
	formatNumber (strNumber) {
		//	write code here
		//	this.myVar1 = [1,2,3]
		if(!this.isNumber(strNumber)){
			return strNumber
		}
		const thousandSeparator = ",";
		const formattedNumber = strNumber.replaceAll(",","").replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
		return formattedNumber;
	},
	isNumber (string) {
		const regex = /^[0-9]+(?:,[0-9]+)?$/;
		return regex.test(string);
	},
	switchSubmitType (submitType){
		let str = submitType.toLowerCase()
		return str == "add new"?"promotion":"add new"
	},
	upperFirstLetter (str){
		const str2 = str.charAt(0).toUpperCase() + str.slice(1);
		return str2
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}