
export const UP_VOTE = 'UP_VOTE';

export const SORT_NEWEST = 'SORT_NEWEST';

export const SORT_POPULAR = 'SORT_POPULAR';

export const upVote = id => ({
     type: UP_VOTE, id });

export const sortNewest = posts => ({
    type: SORT_NEWEST, posts });

export const sortPopular = posts => ({
    type: SORT_POPULAR, posts });
