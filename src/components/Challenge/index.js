import React from 'react'
import { View } from 'react-native'

// const data = {
//   avatar,
//   authorName,
//   postDate,
//   video,
//   title,
//   hero,
//   desciption,
//   participantCount,
//   recentParticipants,

//   freequency,
//   duration,
//   dailyTime,
//   checkInCutOff,
//   rules,
  
//   favoriteCount,
//   commentCount,
//   viewCount
// }

export default ({ detail, ...rest }) => {
  const Component = detail ? 'ChallengeDetail' : 'ChallengeSimple'
  return <Component {...rest} />
}
