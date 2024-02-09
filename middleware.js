export async function checkAuth(req, res, next) {
  // Your authentication logic here
  const verify = req.cookies.quickSilverAuth;

  console.log("From middleware!");

  if (!verify && req.url.includes("/dashboard")) {
    res.redirect(302, `http://localhost:3000`);
    return;
  }

  if (verify && (req.url.includes("/sign-up") || req.url === "/")) {
    res.redirect(302, `${process.env.NEXT_PUBLIC_MAIN_URL}/dashboard`);
    return;
  }

  // If authentication is successful, call the next function
  next();
}
