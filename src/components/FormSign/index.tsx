import { Email } from 'styled-icons/material-outlined'
import Link from 'next/link';
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import * as S from './styles'

const FormSign = () => (
  <S.Wrapper>
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
        icon={<Email />}
      />

      <S.ForgotPassword>Esqueceu sua Senha?</S.ForgotPassword>

      <Button size="large" fullWidth>Entrar Agora</Button>

      <S.FormLink>
        Não tem uma conta?
        <Link href="/sign-up"><a>Criar</a></Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSign
