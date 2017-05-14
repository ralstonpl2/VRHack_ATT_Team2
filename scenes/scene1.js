export default scene = {
  pano: 'VillageOverview_360.jpg',
  duration: 20000,
  audio: '/sound.m4a',
  images: [
    {
      path: 'village_houses.jpg',
      showtime: 3000,
      hidetime: 10000,
      style: {
        position: 'absolute',
        height: 196,
        width: 290,
        transform: [
          {translate: [-300, 50, -400]}
        ]
      }
    },
    {
      path: 'farmer.jpg',
      position: 'absolute',
      showtime: 13000,
      hidetime: 20000,
      style: {
      height: 196,
      width: 290,
      transform: [
          {translate: [100, 50, -500]},
      ]
      }
    },
  ]
}