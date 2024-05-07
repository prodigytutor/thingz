"use client"
import { Button } from 'antd';
import Password from '../Global/Passord';
import ThingType from '../Global/ThingType';
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