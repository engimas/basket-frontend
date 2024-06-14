import { create } from 'zustand'



export type ExtraProducerDetail ={
    address: string,
    phone: string,
    account: string,
    citizenShipId: string,
}

export type userType = {
    name: string,
    email: string,
    password: string
    type: "Producer" | "Consumer"
}



type useAuthType = {
    user: userType | null,
    error: string,
    extraDetail: ExtraProducerDetail | null,
    login: (user: userType) => void,
    register: (user: userType) => void,
    logout: () => void,
    isLoggedIn: () => boolean,
    addExtraDetail: (extraDetail: ExtraProducerDetail) => void
}

const useAuth = create<useAuthType>((set) => ({
    user: null,
    error: "",
    extraDetail: null,
    login:  (user: userType) => {
        localStorage.setItem('user', JSON.stringify(user))
        set({ user })
    },
    register: (user: userType) => {
        localStorage.setItem('user', JSON.stringify(user))
        set({ user })
    },
    logout: () => {
        set({ user: null })
    },
    isLoggedIn : () => {
        let user = localStorage.getItem('user')
        if(user){
            set({ user: JSON.parse(user) })
            return true
        }
        return false
    },
    addExtraDetail: (extraDetail: ExtraProducerDetail) => {
        set({ extraDetail })
    }
}))

export default useAuth;