export default scene = {
  pano: '360/ChinatownStreet_360.jpg',
  duration: 8000,
  audio: 'Sound/Life In Chinatown.m4a',
  images: [
    {
      path: '2D/mothers_with_children.jpg',
      showtime: 4000,
      hidetime: 11000,
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
      path: '2D/preparing_dinner.jpg',
      showtime: 11000,
      hidetime: 16000,
      style: {
        position: 'absolute',
        height: 196,
        width: 290,
        transform: [
            {translate: [-100, 50, -500]}
        ]
      }
    },
    {
      path: '2D/eating_dinner.jpg',
      showtime: 16000,
      hidetime: 28000,
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