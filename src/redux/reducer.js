import { GET_WEEKS, GET_POSTS, UP_VOTE, SORT_NEWEST, SORT_POPULAR } from './actions'

export function WeeksReducer(state = [], action) {
  switch(action.type) {
    case GET_WEEKS:
      return action.payload.weeks;
    default:
    return state;
  }
}

export function PostsReducer(state = [], action) {
  switch(action.type) {
    case GET_POSTS:
    return action.payload.posts;

    case UP_VOTE:
      const upVotes = state.map((post) => {
        if (action.id === post.id) {
          post.votes += 1;
        }
        return state;
      });

    case SORT_NEWEST:
      let sortNewest = [...state];
        return sortNewest.sort((a, b) => b.id - a.id);

    case SORT_POPULAR:
      let sortPopular = [...state];
        return sortPopular.sort((a, b) => b.votes - a.votes);

    default:
      return state;
  }
}
