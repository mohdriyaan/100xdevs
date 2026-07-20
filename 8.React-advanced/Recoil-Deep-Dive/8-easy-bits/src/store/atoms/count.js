import {atom, selector} from "recoil"

export const networkAtom  = atom({
  key : "networkAtom",
  default : 104
})

export const jobsAtom  = atom({
  key : "jobstAtom",
  default : 0
})

export const notificationsAtom  = atom({
  key : "notificationsAtom",
  default : 12
})

export const messagingAtom  = atom({
  key : "messagingAtom",
  default : 81
})

export const totalNotificationSelector = selector({
  key : "totalNotificationSelector",
  get : ({get})=>{
    const totalNotifications = get(networkAtom) + get(jobsAtom) + get(notificationsAtom) + get(messagingAtom)
    return totalNotifications
  }
})