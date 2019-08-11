export default (data: Array) => {
  return data.map(val => {
    val.geojson = null
    if(val.location) {
      val.geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [val.location.lat, val.location.lng]
        }
      }
    }
    return val
  })
}
