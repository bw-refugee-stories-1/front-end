

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

  //random number generator between 0 and 4
  const rand = Math.floor(Math.random() * 5);
  // console.log('image', props.story.id.img_url);
  const imgArr = [
    'https://images.unsplash.com/photo-1554428122-c2ca1f2cb88c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1529441435232-e28880548c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1551556729-c8dee4337009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1526817575615-3685e135615d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1288&q=80',
    'https://images.unsplash.com/photo-1559173525-71a8abaaba32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  ];
  // TODO: check for the null value when getting images to see if the value actually is "null"

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const imgSrc =
      data.img_url === null
      || data.img_url === ''
      ? imgArr[rand]
      : data.img_url;
    // console.log(data)
    const storyWithImg = {
      ...data,
      img_url: imgSrc,
    }
    props.addStory(storyWithImg);
  };
  console.log(errors);


//****adding image should be img_url = name field MUST ADD - author not req - add min - tweet  */
  return (
    <form className="formSubmit" onSubmit={handleSubmit(onSubmit)}>
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
      <input className="imageBox" type="url" placeholder="Add an image URL address" name="img_url" ref={register({required: false})}></input>
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
