import * as fs from 'node:fs'

export function writeFileJson(pathFile: string, data: any): Promise<void>{
  return new Promise((resolve, reject) => {
    const contsntData = JSON.stringify(data)
    fs.writeFile(pathFile, contsntData, (err) => {
      if(err){
        reject(err)
      }
      setTimeout(() => {
        resolve()
      },3000)
    })
  })
}