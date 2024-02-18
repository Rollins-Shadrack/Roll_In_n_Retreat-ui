import { endpoints } from "@/constants/endpoints";
import { apiSlice } from "./apiSlice";

export const staffSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        staffMembers: builder.query({
            query: () => ({
                url: endpoints.partner.staff.staffmembers(),
                method:"GET"
            })
        })
    })
})

export const {useStaffMembersQuery } = staffSlice;