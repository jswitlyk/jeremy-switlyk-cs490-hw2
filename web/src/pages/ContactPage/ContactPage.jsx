import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <TextField name="name" validation={{ required: true }} />

      <label htmlFor="email">Email</label>
      <TextField name="email" validation={{ required: true }} />

      <label htmlFor="message">Message</label>
      <TextAreaField name="message" validation={{ required: true }} />

      <Submit>Save</Submit>
    </Form>
  )
}

export default ContactPage
