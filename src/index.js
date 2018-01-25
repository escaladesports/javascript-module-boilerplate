import _ from 'lodash'
console.log('Module loaded')

export default function(){
	console.log(_)
	const def = {
		test: '123'
	}
	const obj = {
		anotherTest: 'abc',
		...def,
	}
	return obj
}