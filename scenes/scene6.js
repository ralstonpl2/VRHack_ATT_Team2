export default scene = {
  pano: '360/ChinatownStore_360.jpg',
  duration: 36000,
  audio: 'Sound/Changing Chinatown.m4a',
  images: [
    {
      path: '2D/scene6_photo1.jpg',
      showtime: 8000,
      hidetime: 15000,
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
      path: '2D/scene6_photo2.jpg',
      showtime: 15000,
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
      path: '2D/scene6_photo3.jpg',
      showtime: 23000,
      hidetime: 36000,
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