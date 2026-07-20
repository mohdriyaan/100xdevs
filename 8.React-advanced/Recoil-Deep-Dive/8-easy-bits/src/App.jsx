import { useState } from 'react'
import { useRecoilValue, RecoilRoot } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './store/atoms/count'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount= useRecoilValue(jobsAtom)
  const messagingCount= useRecoilValue(messagingAtom)
  const notificationsCount= useRecoilValue(notificationsAtom)
  const totalNotifications = useRecoilValue(totalNotificationSelector)
  // When the rerenders happens the calculation happens again, but this needs to be avoided
  // const totalNotifications = networkCount + jobsCount + notificationsCount + messagingCount

  return (
    <>
      <button>Home</button>
      <button>My Network ({(networkCount>=100) ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({(messagingCount >= 100) ? "99+" : messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button>Me ({totalNotifications})</button>
    </>
  )
}

export default App
