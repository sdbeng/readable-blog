import moment from 'moment'
//get visible posts

export default (posts, { text, sortBy }) => {
  return posts.filter((post) => {

    const timestampMoment = moment(post.timestamp)
    console.log('post.timestamp', post.timestamp);
    // console.log('timestampMoment', timestampMoment);

    return timestampMoment
  })
  // return posts
  .sort((a, b) => {
    if(sortBy === 'date'){
      return a.timestamp < b.timestamp ? 1 : -1
    }else if(sortBy === 'voteScore') {
      return a.voteScore < b.voteScore ? 1 : -1
    }
  })
}
