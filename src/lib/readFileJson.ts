import * as fs from 'node:fs'

export function readFileJson(path: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        try {
          setTimeout(() => {
            const file = JSON.parse(data)
            resolve(file.users)
          },3000)
        } catch (error) {
          reject(error)
        }
      }

    })
  })
}
