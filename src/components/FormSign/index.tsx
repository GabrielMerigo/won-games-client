import { Email, LockClock } from 'styled-icons/material-outlined'
import Link from 'next/link';
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import * as S from './styles'
import { FormLink, FormWrapper } from '../../components/Form';

const FormSign = () => (
  <FormWrapper>
    <form>
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

      <S.ForgotPassword>Esqueceu sua Senha?</S.ForgotPassword>

      <Button size="large" fullWidth>Entrar Agora</Button>

      <FormLink>
        Não tem uma conta?
        <Link href="/sign-up"><a>Criar</a></Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSign
