export default scene = {
  pano: '360/ChinatownAlleyway_360.jpg',
  duration: 41000,
  audio: 'Sound/Early Days In America.m4a',
  images: [
    {
      path: '2D/chinese_on_boat.jpg',
      showtime: 11000,
      hidetime: 21000,
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
      path: '2D/chinese_gold_miners.jpg',
      showtime: 21000,
      hidetime: 27000,
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
      path: '2D/chinese_railroad_workers.jpg',
      showtime: 21000,
      hidetime: 41000,
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