import { useLoginMutation, useLogoutMutation } from "@/store/apis/auth.api";
import { currentUser, currentUserRole } from "@/store/features/authSlice"
import { useSelector } from "react-redux"

function useAuth() {
    const user = useSelector(currentUser);
    const userRole = useSelector(currentUserRole)
    const [triggerLogout, { isLoading: isLoggedOut }] = useLogoutMutation();
    const [triggerLogin, { isLoading }] = useLoginMutation();

    const isPartner = user?.entity === 'partner';

    const isAuthenticated = !!user;

    const login = async (payload) => {
        if (isLoading) return
        return await triggerLogin(payload)
    }
    
    const logout = async () => {
        if (isLoggedOut) return
        triggerLogout()
    }
    return {
        isAuthenticated,
        isPartner,
        userRole,
        user,
        login,
        logout,
        isLoading: isLoading || isLoggedOut
    }
}
export default useAuth