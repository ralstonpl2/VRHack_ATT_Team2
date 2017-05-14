export default scene = {
  pano: '360/VillageOverview_360.jpg',
  duration: 29000,
  audio: 'Sound/Village Overview.m4a',
  images: [
    {
      path: '2D/village_houses.jpg',
      showtime: 5000,
      hidetime: 12000,
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
      path: '2D/old_woman_broom.jpg',
      position: 'absolute',
      showtime: 12000,
      hidetime: 18000,
      style: {
        height: 196,
        width: 290,
        transform: [
            {translate: [-100, 50, -500]}
        ]
      },
      {
      path: '2D/farmer.jpg',
      position: 'absolute',
      showtime: 18000,
      hidetime: 29000,
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