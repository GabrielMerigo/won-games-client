import Button from '../../components/Button'
import { User } from 'styled-icons/boxicons-regular'
import { LockClock, Email } from 'styled-icons/material-outlined'
import TextField from '../../components/TextField'
import Link from 'next/link'
import { FormWrapper, FormLink } from '../Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome Completo"
        type="type"
        icon={<User />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<LockClock />}
      />
      <TextField
        name="confirmPassword"
        placeholder="Confirmar Senha"
        type="password"
        icon={<LockClock />}
      />
      <Button size="large" fullWidth>Criar Conta</Button>
      <FormLink>
        Já tem uma conta?
        <Link href="/sign-in">
          <a>Entrar</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
