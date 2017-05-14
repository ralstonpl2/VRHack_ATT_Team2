export default scene = {
  pano: '360/VillageOverview_360.jpg',
  duration: 29000,
  audio: 'Sound/Village Overview.m4a',
  images: [
    {
      path: '2D/village_houses.jpg',
      showtime: 5000,
      hidetime: 10000,
      style: {
        position: 'absolute',
        height: 300,
        width: 450,
        transform: [
          {translate: [-300, 50, -500]}
        ]
      }
    },
    {
      path: '2D/old_woman_broom.jpg',
      showtime: 12000,
      hidetime: 18000,
      style: {
        position: 'absolute',
        height: 300,
        width: 450,
        transform: [
            {translate: [-100, 50, -500]}
        ]
      }
    },
    {
      path: '2D/farmer.jpg',
      showtime: 18000,
      hidetime: 29000,
      style: {
        position: 'absolute',
        height: 300,
        width: 450,
        transform: [
            {translate: [100, 50, -500]}
        ]
      }
    },
  ]
}