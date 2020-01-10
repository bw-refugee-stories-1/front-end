

//****React Hook version below ---- testing other types above this line******

import React from 'react';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { addStory } from '../actions';
import * as yup from 'yup'
import styled from 'styled-components'



// trying to use styled components above****

function Contact(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
    props.addStory(data);
  };
  console.log(errors);


//****adding image should be img_url = name field MUST ADD - author not req - add min - tweet  */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="authorBox">
      <input className="authorName" type="text" placeholder="Author" name="author" ref={register({required: false, maxLength: 80})} />
      </div>
      <div class="authorBox">
      <input className="emailName" type="email" placeholder="Email" name="email" ref={register({required: false, pattern: /^\S+@\S+$/i})} />
      </div>
      <div class="authorBox">
      <input className="titleName" type="text" placeholder="Title" name="title" ref={register({required: true, min: 1, maxLength: 180})} />
      </div>
      <div class="textAreaBox">
      <textarea className="textName" name="text" ref={register({required: true, min: 240})} />
      </div>
      <div class="authorBox">
      <input type="url" placeholder="Attach an image" name="img_url" ref={register({required: false})}></input>
      </div>
      

      <input type="submit" />
    </form>
  );
}

const mapStateToProps = state => {
  return {
    storyState: state.storyState
  }
}
export default connect(
  mapStateToProps,
  {addStory}
  )(Contact);

  //** Tweaking text area default */

  // <textarea class="textName" name="text" style="margin-top: 0px; margin-bottom: 10px; height: 83px;"></textarea>

//  yup react form 

// const SignupSchema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required(),
// })

// export default function App() {
//   const { register, handleSubmit, errors } = useForm({
//     validationSchema: SignupSchema
//   })
//   const onSubmit = data => { console.log(data); }
//   console.log(errors)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="name" ref={register} />
//       <input type="number" name="age" ref={register} />
//       <input type="submit" />
//     </form>
//   )
// }
