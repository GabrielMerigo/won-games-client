import TextField from '../../components/TextField'
import Heading from '../../components/Heading'
import * as S from './styles'
import Button from '../../components/Button'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color='black' size='small'>
      My Profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="Jhon Doe"
      />

      <TextField
        name="email"
        placeholder="e-mail"
        label="E-mail"
        initialValue="Jhon Doe"
        type="email"
        disabled
      />

      <TextField
        name="password"
        placeholder="type your password"
        label="Password"
        type="password"
        disabled
      />

      <TextField
        name="new_password"
        placeholder="type your new password"
        label="New Password"
        type="password"
        disabled
      />

      <Button title='Save' size='large'>
        Save
      </Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
