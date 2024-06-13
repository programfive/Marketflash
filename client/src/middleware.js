import { clerkMiddleware } from '@clerk/nextjs/server';

const requireAuth = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.redirect('/login'); // Redirige a la página de inicio de sesión si el usuario no está autenticado
  }
  next();
};

export default clerkMiddleware({
  async middleware({ req, res }) {
    await requireAuth(req, res);
  }
});

export const config = {
  matcher: ['/', '/(api|trpc)(.*)', '/payments'], // Agrega '/payments' a la lista de rutas protegidas
};