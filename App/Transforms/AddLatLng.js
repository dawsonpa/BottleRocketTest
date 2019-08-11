export default (data: Array) => {
  return data.map(val => {
    val.latlng = null
    if(val.location) {
      val.latlng = {
        latitude: val.location.lat,
        longitude: val.location.lng
      }
    }

    return val
  })
}
