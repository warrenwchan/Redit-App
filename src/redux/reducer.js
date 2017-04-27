import { data } from './../mock-data';
import { UP_VOTE, SORT_NEWEST, SORT_POPULAR } from './actions'

export function WeeksReducer(state = data.weeks, action) {
  switch(action.type) {
    default:
    return state
  }
}

export function PostsReducer(state = data.posts, action) {
  switch(action.type) {
    case UP_VOTE:
      const upVotes = state.map((post) => {
        if (action.id === post.id) {
          post.votes += 1;
        }
        return upVotes;
      });

    case SORT_NEWEST:
      const sortNewest = state.sort((a, b) => b.id - a.id);
        return sortNewest;

    case SORT_POPULAR:
      const sortPopular = state.sort((a, b) => b.votes - a.votes);
        return sortPopular;


  default:
    return state;
  }
}
