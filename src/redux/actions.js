
export const UP_VOTE = 'UP_VOTE';

export const SORT_NEWEST = 'SORT_NEWEST';

export const SORT_POPULAR = 'SORT_POPULAR';

export const upVote = (id) => ({
     type: UP_VOTE, id });

export const sortNewest = (id) => ({
    type: SORT_NEWEST, id });

export const sortPopular = (votes) => ({
    type: SORT_POPULAR, votes });
