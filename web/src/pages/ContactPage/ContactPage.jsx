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
        <label htmlFor="name">Name</label>
        <TextField name="name" required />

        <label htmlFor="email">Email</label>
        <TextField name="email" required />

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" required />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
