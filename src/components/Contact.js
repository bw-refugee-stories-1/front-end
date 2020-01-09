

//****React Hook version below ---- testing other types above this line******

import React from 'react';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { addStory } from '../actions';
import * as yup from 'yup'

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
      <input type="text" placeholder="Author" name="author" ref={register({required: false, maxLength: 80})} />
      <input type="email" placeholder="Email" name="email" ref={register({required: false, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Title" name="title" ref={register({required: true, min: 1, maxLength: 180})} />
      <textarea name="text" ref={register({required: true, min: 240})} />
      <input type="url" placeholder="Attach an image" name="img_url" ref={register({required: false})}></input>

      

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
