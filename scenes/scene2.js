export default scene = {
  pano: 'BuildingInterior_360.jpg',
  duration: 8000,
  audio: 'sound.m4a',
  images: [
    {
      path: 'old_woman_broom.jpg',
      showtime: 2000,
      hidetime: 4000,
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
      path: 'old_woman_broom2.jpg',
      showtime: 5000,
      hidetime: 7000,
      style: {
        position: 'absolute',
        height: 196,
        width: 290,
        transform: [
            {translate: [100, 50, -500]}
        ]
      }
    },
  ]
}