"use client"
import { Button } from 'antd';
import Password from '../Thing/Passord';
import ThingType from '../Thing/ThingTypeInput';
const NewThing = () => {
  return (
    <section>
      <div>Add New Thing</div>
      <ThingType />
      <Password />
        <Button type="primary">Save Thing</Button>
    </section>
  )
}
export default NewThing