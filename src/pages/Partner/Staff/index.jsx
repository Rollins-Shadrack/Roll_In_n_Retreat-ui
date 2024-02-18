import Container from "@/components/Container";
import React from "react";
import Header from "../components/Header";
import { useStaffMembersQuery } from "@/store/apis/staff.api";

const index = () => {
  const { staffMembers } = useStaffMembersQuery()
  console.log(staffMembers)
  return (
    <div className="pt-6 ">
      <Container>
        <Header title={"Staff"} />
      </Container>
    </div>
  );
};

export default index;
