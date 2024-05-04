import { writeFileJson } from "./lib/writefileJson";
import { readFileJson } from "./lib/readFileJson";

async function main(){
  try {

    const pathFile = 'output.json'

    const contatData = {
      users: [
        {id: 1, name: 'vinicius'},
        {id: 2, name: 'fuscão'},
      ]
    }

    await writeFileJson(pathFile, contatData)
    console.log('arquivo criado.')
    console.log('-----------------')
    
    console.log('arquivo caregado...')
    console.log('-----------------')
    const fileJson = await readFileJson(pathFile)
    console.log(fileJson)
    
  } catch (error) {
    console.error(error)
  }
}
main()