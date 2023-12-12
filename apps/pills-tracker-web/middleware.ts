import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // async afterAuth(auth, req, evt) {
  //   if (auth.userId) {
  //     const isUser = await trpc.getUser.query({ userId: auth.userId })
  //     if (!isUser && req.nextUrl.pathname !== '/sync' && req.nextUrl.pathname !== '/') {
  //       return NextResponse.redirect(new URL('/sync', req.url))
  //     }
  //   }
  // },
  publicRoutes: ['/']
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
