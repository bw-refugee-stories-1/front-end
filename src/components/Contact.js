import React from 'react';
import './BFtestComponents/sign-up-form.css';



export const SubmitStoryForm = ({onSubmit, state}) => {
    const submitting = state === 'submitting';
    const submitted = state === 'submitted';

    const buttonState = submitting ?
        'form__button--submitting' :
        'form__button--submitted';

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__title">Share a story!</h1>
            {
                submitted ?
                    <div className="form__status">
                      You have shared a story - An admin will now review and approve
                    </div> : null
            }
            <label htmlFor="name" className="form__label">Author</label>
            <p>
                <input type="text"
                       id="name"
                       placeholder="Name"
                       disabled={submitting}
                       className="form__input"
                />
            </p>
            <label htmlFor="email" className="form__label">Email</label>

            <p>
                <input type="email"
                       id="email"
                       disabled={submitting}
                       placeholder="Provide Valid Email"
                       className="form__input"
                />
            </p>
            <label htmlFor="subject" className="form__label">Subject Title</label>
            <p>
                <input type="text"
                       id="title"
                       placeholder="Type a Subject Title"
                       disabled={submitting}
                       className="form__input"
                />
            </p>
            <label htmlFor="storytext" className="form__label">Share a Story</label>
            <p>
                <input type="text"
                       id="storytext"
                       placeholder="Type a Story Here"
                       disabled={submitting}
                       className="form__input"
                />
            </p>

            <p>
                <button disabled={submitting} 
                        className={`form__button ${buttonState}`}>
                    Submit
                </button>
            </p>
        </form>
    );
};

export default SubmitStoryForm

//React Hook version below ---- testing other types above this line

// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Author" name="Author" ref={register({required: true, maxLength: 80})} />
//       <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="text" placeholder="Title" name="Title" ref={register({required: true, min: 1, maxLength: 80})} />
//       <textarea name="Share Story" ref={register({required: true, min: 30})} />

//       <input type="submit" />
//     </form>
//   );
// }


// import React from 'react';

// const Contact = props => {
//   return (
//     <h1>Contact Page</h1>
//   )

// }

// export default Contact;