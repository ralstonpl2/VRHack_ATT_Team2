export default scene = {
  pano: '360/BurialRitual_360.jpg',
  duration: 29000,
  audio: 'Sound/Burial Ritual.m4a',
  images: [
    {
      path: '2D/boy_burns_incense.jpg',
      showtime: 6000,
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
      path: '2D/carrying_pig.jpg',
      showtime: 10000,
      hidetime: 20000,
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
      path: '2D/cutting_pig.jpg',
      showtime: 20000,
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