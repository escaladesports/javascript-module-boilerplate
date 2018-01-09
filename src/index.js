export default function(){
	const def = {
		test: '123'
	}
	const obj = {
		anotherTest: 'abc',
		...def
	}
	console.log(obj)
}
