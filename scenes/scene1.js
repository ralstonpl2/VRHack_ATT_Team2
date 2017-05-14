export default scene = {
  pano: 'VillageOverview_360.jpg',
  duration: 8000,
  audio: 'sound - Copy.m4a',
  images: [
    {
      path: 'village_houses.jpg',
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
      path: 'farmer.jpg',
      position: 'absolute',
      showtime: 5000,
      hidetime: 7000,
      style: {
        height: 196,
        width: 290,
        transform: [
            {translate: [100, 50, -500]}
        ]
      }
    },
  ]
}