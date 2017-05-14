export default scene = {
  pano: '360/ChinatownStreet_360.jpg',
  duration: 37000,
  audio: 'Sound/Life In Chinatown.m4a',
  images: [
    {
      path: '2D/chinatown_bachelors.jpg',
      showtime: 8000,
      hidetime: 16000,
      style: {
        position: 'absolute',
        height: 300,
        width: 450,
        transform: [
          {translate: [-300, 50, -400]}
        ]
      }
    },
    {
      path: '2D/chinatown_men.jpg',
      showtime: 16000,
      hidetime: 23000,
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
      path: '2D/old_chinatown_festival.jpg',
      showtime: 23000,
      hidetime: 37000,
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