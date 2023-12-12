import { SignUp } from '@clerk/nextjs'
import Wrapper from './wrapper'

export function SignUpPage() {
  return (
    <Wrapper>
      <SignUp />
    </Wrapper>
  )
}
