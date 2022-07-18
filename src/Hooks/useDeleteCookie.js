import Cookie from 'js-cookie';

const useSetCookie = (cookieName) => {
  return Cookie.remove(
    cookieName
  )
}

export default useSetCookie