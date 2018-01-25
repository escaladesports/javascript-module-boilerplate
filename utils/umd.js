import fs from 'fs-extra'
import umd from 'umd'
import pkg from '../package.json'
import camel from 'camelcase'

async function createUmd(){
	try{
		let camelName = camel(pkg.name)
		let fileContents = umd(camelName, './dist-es5/index.js')
		console.log(fileContents)
		await fs.outputFile('./dist-umd/index.js', fileContents)
	}
	catch(err){
		console.error(err)
	}
}

createUmd()