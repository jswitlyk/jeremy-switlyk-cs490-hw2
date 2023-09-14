import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <TextField name="name" />
        <TextField name="email" />
        <TextAreaField name="message" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
