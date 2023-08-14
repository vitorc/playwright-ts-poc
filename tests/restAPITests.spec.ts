import { test, expect } from '@playwright/test';

test('should get something', async({request, baseURL})=>{
  const newGet = await request.get(`${baseURL}api/users/3`)
  console.log(await newGet.json())
  expect(newGet.status()).toBe(200)
})
test('should post something', async ({request,baseURL}) => {
  const newPost = await request.post(`${baseURL}api/users`,{
    data: {name:"morpheus", 
           job: "leader"},
  },)
  const respBody = JSON.parse(await newPost.text())
  expect(respBody.name).toBe("morpheus")
  expect(respBody.createdAt).toBeTruthy()
  expect(newPost.status()).toBe(201)
})
test('should put something', async({request, baseURL})=>{
  const newPut = await request.put(`${baseURL}api/users/3`,{
    data:{name:"Vitasdasdor",
          job: "QA Specialiasdasdasdst"}
  })
  const respBody = JSON.parse(await newPut.text())
  expect(respBody.name).toBe("Vitasdasdor")
  console.log(respBody)
  expect(newPut.status()).toBe(200)
})
test('should delete something',async({request, baseURL})=>{
  const newDelete = await request.delete(`${baseURL}api/users/3`)
  expect(newDelete.status()).toBe(204)
})
