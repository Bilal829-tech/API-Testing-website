
import styled from 'styled-components';


interface user{
    first_name: string,
    last_name: string,
    email: string,
    gender: string
}

interface props{
    formdata: user,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    loading: boolean
    isEditMode?: boolean
}

const UserForm = ( { formdata, handleChange, handleSubmit , loading , isEditMode }: props) => {
  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">{isEditMode ? "Update User" : "Create User"} </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input  type="text" className="input" required name="first_name"
            value={formdata.first_name} onChange={handleChange} />
            <span>Firstname</span>
          </label>
          <label>
            <input  type="text" className="input" required name="last_name"
            value={formdata.last_name} onChange={handleChange}/>
            <span>Lastname</span>
          </label>
        </div>  
        <label>
          <input  type="email" className="input" required name="email"
          value={formdata.email} onChange={handleChange}/>
          <span>Email</span>
        </label> 
        <label>
          <input  type="text" className="input" required name="gender"
          value={formdata.gender} onChange={handleChange}/>
          <span>Gender</span>
        </label>
        <button className="submit">
            {loading ? 
            isEditMode ? "Updating..." : "Creating..." : isEditMode ? "Update" : "Create"
            }
        </button>

        <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default UserForm;
