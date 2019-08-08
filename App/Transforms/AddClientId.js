import  uuid  from 'uuid'

export default (data: Array) => {
  return data.map(val => {
    val.clientId = uuid();
    return val
  })
}
