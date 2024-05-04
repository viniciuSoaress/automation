import { readFileJson } from "../lib/readFileJson";
import { writeFileJson } from "../lib/writefileJson";

describe('should JSON file', () => {
  it('write file',async () => {
    const path = 'data.json'
    const content = 'hello, world!'

    expect(await writeFileJson(path, content)).toEqual(undefined)
  });
  
  it('read file', async () => {
   
    const dataFile = await readFileJson('test.json')
    expect(dataFile).toEqual({"message": "hello, world!"})
  })
})