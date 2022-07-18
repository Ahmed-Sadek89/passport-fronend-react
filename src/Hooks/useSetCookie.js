import Cookie from 'js-cookie';

const useSetCookie = (cookieName, cookieValue) => {
  return Cookie.set(
    cookieName,
    cookieValue,
    {
        expires: 1,
        secure: true,
        path: '/',
        // domain: "https://passport-fronend-react.vercel.app/"
    }
  )
}

export default useSetCookie