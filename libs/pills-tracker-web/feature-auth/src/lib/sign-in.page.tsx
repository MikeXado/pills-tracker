import { SignIn } from '@clerk/nextjs'
import Wrapper from './wrapper'
export function SignInPage() {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  )
}
