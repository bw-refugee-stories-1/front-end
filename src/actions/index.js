import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_STORY = 'ADD_STORY';
export const APPROVE_STORY = 'APPROVE_STORY';
export const REJECT_STORY = 'REJECT_STORY';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const getStories = () => dispatch => {
  dispatch( {type: FETCH_START} );

  // For localtesting when API is unavailable:
  // axios
  //   .get('http://localhost:3333/stories')
  
  axiosWithAuth()
    .get('/users') // TODO: Check name
    .then( response => {
      dispatch( {type: FETCH_SUCCESS, payload: response.data} );
      console.log("Response from getStories: ", response.data);
    })
    .catch( err => {
      dispatch( {type: FETCH_FAILURE, payload: err});
      console.error("Error:", err);
    })
  } 

export const addStory = story => dispatch => {
  axiosWithAuth()
    .post('/stories', story) //TODO Check endpoint
    .then( response => {
      console.log('Response from addStory: ', response.data);
      dispatch( {type: ADD_STORY, payload: response.data});
    })
    .catch(err => console.log('Error from addStory: ', err))
}

export const approveStory = story => dispatch => {
  axiosWithAuth()
    .put(`/stories/${story.id}`, story)
    .then(response => {
      console.log('Response from approveStory: ', response.data)
      dispatch( {type: APPROVE_STORY, payload: response.data})
    })
    .catch(err => console.log('Error from approveStory: ', err))
}

export const rejectStory = id => dispatch => {
  axiosWithAuth()
    .delete(`/stories/${id}`)
    .then( response => {
      console.log('Response from rejectStory: ', response.data);
      dispatch( {type: REJECT_STORY, payload: response.data});
    })
    .catch(err => console.log('Error from deleteStory: ', err));
}

export const loginAdmin = credentials => dispatch => {
  dispatch( {type: LOGIN_START, payload: credentials}) // Payload = creds
  axiosWithAuth()
  .post("/login", credentials)
  .then(res => {
    // Store token
    localStorage.setItem("token", res.data.token);
    dispatch( {type: LOGIN_SUCCESS}) // No payload
  })
  .catch(err => {
    console.log("Error from Login:", err);
    dispatch( {type: LOGIN_FAILURE, payload: err.data}) // Payload = err msg
  })
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

