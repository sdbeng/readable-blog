import moment from 'moment'
//get visible posts

export default (posts, { text, sortBy }) => {
  // return posts.filter((post) => {
  //
  //   // const timestampMoment = moment(post.timestamp)
  //   //issue: title is undefined ??? isn't it supposed to come from posts??
  //   const titleMatch = post.title.toLowerCase().includes(text.toLowerCase())
  //
  //   return titleMatch
  // })
  return posts.sort((a, b) => {
    if(sortBy === 'date'){
      return a.timestamp < b.timestamp ? 1 : -1
    }else if(sortBy === 'voteScore') {
      return a.voteScore < b.voteScore ? 1 : -1
    }
  })
}
