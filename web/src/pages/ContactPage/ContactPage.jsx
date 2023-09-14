import { Form, TextField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form>
        <TextField name="input" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
