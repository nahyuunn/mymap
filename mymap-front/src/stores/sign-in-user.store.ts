import { create } from "zustand";
import User from "types/interface/user.interface";

interface SignInUserStore {
    signInUser: User | null;
    setSignInUser: (signInUser: User) => void;
    resetSignInUser: () => void;
};

const useSignInUserStore = create<SignInUserStore>(set => ({
    signInUser: null,
    setSignInUser: signInUser => set(state => ({...state, signInUser})),
    resetSignInUser: () => set(state => ({...state, signInUser: null}))
}));

export default useSignInUserStore;

