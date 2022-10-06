import { FormEvent, useState } from "react"
import { AccountForm } from "./components/AccountForm"
import { AddressForm } from "./components/AddressForm"
import { UserForm } from "./components/UserForm"
import { useMultistepForm } from "./hooks/useMultistepForm"

type FormData = {
  firstname: string,
  lastname: string,
  age: string,
  address: string,
  zipCode: string,
  city: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstname: '',
  lastname: '',
  age: '',
  address: '',
  zipCode: '',
  city: '',
  email: '',
  password: ''
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm { ...data } updateFields={updateFields} />,
    <AddressForm { ...data } updateFields={updateFields} />,
    <AccountForm { ...data } updateFields={updateFields} />
  ])
  
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {      
      return { ...prev, ...fields }
    })
  }

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    if(!isLastStep) return next()

    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.age);
    console.log(data.address);
    console.log(data.zipCode);
    console.log(data.city);
    console.log(data.email);
    console.log(data.password);
  
    alert('Form Submitted Successfully')
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        borderRadius: "1rem",
        fontFamily: "Arial",
        maxWidth: "max-content"
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem"
          }}
        >
          { currentStepIndex + 1 } / { steps.length }
        </div>
        { step }
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end"
          }}
        >
          { !isFirstStep && <button type="button" onClick={back}>Back</button> }
          <button type="submit">{ isLastStep ? 'Finish' : 'Next' }</button>
        </div>
      </form>
    </div>
  )
}

export default App
