import TextField from '../../components/TextField'
import Heading from '../../components/Heading'
import * as S from './styles'
import Button from '../../components/Button'
import { User } from 'styled-icons/boxicons-regular'
import { Email, Lock, Password } from 'styled-icons/material-outlined'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color='black' size='small'>
      My Profile
    </Heading>

    <S.Form>
      <TextField
        role="textbox"
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Jhon Doe"
        icon={<User />}
      />

      <TextField
        name="email"
        placeholder="e-mail"
        label="E-mail"
        initialValue="Jhon Doe"
        type="email"
        disabled
        icon={<Email />}
      />

      <TextField
        id='password'
        name="password"
        placeholder="type your password"
        label="Password"
        type="password"
        disabled
        icon={<Lock />}
      />

      <TextField
        labelFor='new_password'
        id='new_password'
        name="new_password"
        placeholder="type your new password"
        label="New Password"
        type="password"
        disabled
        icon={<Lock />}
      />

      <Button title='Save' size='large'>
        Save
      </Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
