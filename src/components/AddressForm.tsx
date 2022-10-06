import { FormWrapper } from "./FormWrapper";

type AddressData = {
  address: string,
  zipCode: string,
  city: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({ address, zipCode, city, updateFields }: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Address</label>
      <input type="text" autoFocus required value={address} onChange={(e) => updateFields({ address: e.target.value })} />
      <label>Zip Code</label>
      <input type="text" required value={zipCode} onChange={(e) => updateFields({ zipCode: e.target.value })} />
      <label>City</label>
      <input type="text" required value={city} onChange={(e) => updateFields({ city: e.target.value })} />
    </FormWrapper>
  )
}
