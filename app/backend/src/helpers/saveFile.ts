import { writeFileSync,readFileSync } from 'fs';
import { DataQuestion } from '../interfaces/Questions';

const loadFile = () => {
	try { 
		const readData = readFileSync('src/data.txt', 'utf-8');
		if (readData === '') return null;
		const data = JSON.parse(readData);
		return data;
   
	} catch (error) {
		console.log(error);
	}
};

const saveFile = (data: DataQuestion) => {
	try {
		const file = loadFile();
        
		if(file === null) {
			const dataInArray = [data];
			const savedFile = writeFileSync('src/data.txt', JSON.stringify(dataInArray));
			return savedFile;
		}
        
		const updatedFile = [
			...file,
			data
		];

		const textFile = JSON.stringify(updatedFile);
        
		writeFileSync('src/data.txt', textFile);   
	} catch (error) {
		console.log(error);
	}
};

export {loadFile, saveFile};