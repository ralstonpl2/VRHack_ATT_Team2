export default scene = {
  pano: 'BuildingInterior_360.jpg',
  duration: 20000,
  audio: '/sound.m4a',
  images: [
    {
      path: 'old_woman_broom.jpg',
      showtime: 3000,
      hidetime: 10000,
      style: {
        height: 196,
        margin: 10,
        width: 290,
        transform: [
          {translate: [-400, 520, 0]},
          {rotateY: 90}
        ]
      }
    },
    {
      path: 'old_woman_broom2.jpg',
      showtime: 13000,
      hidetime: 20000,
      style: {
      height: 196,
      margin: 10,
      width: 290,
      transform: [
          {translate: [-200, 300, 250]},
          {rotateY: 175}
      ]
      }
    },
  ]
}