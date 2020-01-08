import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_BY_ID_SUCCESS = 'FETCH_BY_ID_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_STORY = 'ADD_STORY';
export const APPROVE_STORY = 'APPROVE_STORY';
export const REJECT_STORY = 'REJECT_STORY';

export const getStories = () => dispatch => {
  dispatch( {type: FETCH_START} );

  // axiosWithAuth()
  //   .get('/users') // TODO: Check name
  axios
    .get('https://testing-refugee-stories.herokuapp.com/stories')
    .then( response => {
      dispatch( {type: FETCH_SUCCESS, payload: response.data} );
      console.log('Response from getStories: ', response.data);
    })
    .catch( err => {
      dispatch( {type: FETCH_FAILURE, payload: err});
      console.error("Error:", err);
    })
  } 

export const getStoryById = id => dispatch => {
  dispatch( {type: FETCH_START} )
  axios
    .get(`https://testing-refugee-stories.herokuapp.com/stories/${id}`)
    .then( response => {
      dispatch( {type: FETCH_BY_ID_SUCCESS, payload: response.data} );
      console.log('Response from getStoryById: ', response.data)
    })
    .catch( err => {
      dispatch( {type: FETCH_FAILURE, payload: err} );
      console.log('Error: ', err)
    })
}

export const addStory = story => dispatch => {
  axios
    .post('https://testing-refugee-stories.herokuapp.com/stories/api/stories', story)
    .then( response => {
      console.log('Response from addStory: ', response.data);
      dispatch( {type: ADD_STORY, payload: response.data});
    })
    .catch(err => console.log('Error from addStory: ', err))
}

export const approveStory = story => dispatch => {
  axios
    .put(` https://testing-refugee-stories.herokuapp.com/stories/api/story/${story.id}`, story)
    .then(response => {
      console.log('Response from approveStory: ', response.data)
      dispatch( {type: APPROVE_STORY, payload: response.data})
    })
    .catch(err => console.log('Error from approveStory: ', err))
}

export const rejectStory = id => dispatch => {
  axios
    .delete(` https://testing-refugee-stories.herokuapp.com/stories/api/delete/${id}`)
    .then( response => {
      console.log('Response from rejectStory: ', response.data)
      // dispatch( {type: REJECT_STORY, payload: response.data})
    })
    .catch(err => console.log('Error from deleteStory: ', err))
}

// TODO: Move to new component
// stories.map( story => {
//   <ReviewStoryCard story={story}/>
// })

// const [story, setStory] = useState(props.story)

// <button onClick={ () => {
//     setStory({
//       ...story,
//       approved: true
//     })
//     approveStory(story)
//   }
// }>Approve</button>

// <button onClick={ () => rejectStory(story.id)}>Reject</button>