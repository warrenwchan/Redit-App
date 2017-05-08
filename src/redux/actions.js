export const GET_WEEKS = 'GET_WEEKS';
export const GET_POSTS = 'GET_POSTS';
export const UP_VOTE = 'UP_VOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_POPULAR = 'SORT_POPULAR';

export const getWeeks = () => {
    return (dispatch) => {
        fetch('http://localhost:3005/api/weeks')
            .then((response) => {
                if(!response.ok) return Promise.reject('Could not get weeks');
            return response.json();
        })
        .then((json) => {
            dispatch({
                type: GET_WEEKS,
                mode: 'cors',
                payload: {
                    weeks: json
                }
            })
        })
    };
}

export const getPosts = (lessonId) => {
    return (dispatch) => {
        fetch(`http://localhost:3005/posts`)
            .then((response) => {
                if(!response.ok) return Promise.reject('Could not get weeks');
            return response.json();
        })
        .then((json) => {
            dispatch({
                type: GET_POSTS,
                mode: 'cors',
                payload: {
                    posts: json
                }
            })
        })
    };
}

export const upVote = id => ({type: UP_VOTE, id });
export const sortNewest = () => ({type: SORT_NEWEST });
export const sortPopular = () => ({type: SORT_POPULAR });

