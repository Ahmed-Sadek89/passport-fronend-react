import Cookie from 'js-cookie';

const useGetCookie = (cookieName) => {
  return Cookie.get(
    cookieName
  )
}

export default useGetCookie