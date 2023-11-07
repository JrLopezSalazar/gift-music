

const ContainerAuth = ({children}) => {
  return (
    <main
    className="font-urbanist min-h-screen bg-bg-purple text-white grid justify-stretch 
    items-center justify-items-center bg-[url(/images/bg-auth-mobile.png)] bg-no-repeat 
    bg-right-bottom p-4 sm:grid-cols-[auto_auto] gap-12 sm:justify-center 
    sm:bg-[url(/images/bg-auth-desktop.png)] "> 
    {children}
  </main>
  )
}

export default ContainerAuth