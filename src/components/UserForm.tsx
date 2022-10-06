import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstname: string,
  lastname: string,
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({ firstname, lastname, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>Firstname</label>
      <input type="text" autoFocus required value={firstname} onChange={(e) => updateFields({ firstname: e.target.value })} />
      <label>Lastname</label>
      <input type="text" required value={lastname} onChange={(e) => updateFields({ lastname: e.target.value })} />
      <label>Age</label>
      <input type="number" required min={1} value={age} onChange={(e) => updateFields({ age: e.target.value })} />
    </FormWrapper>
  )
}
