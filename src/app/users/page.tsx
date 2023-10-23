// import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

const page = () => {
  return (
    <div className="hidden h-full lg:block lg:pl-80">
      <EmptyState />
      {/* <button className="ring-1 ring-black" onClick={() => signOut()}>
        Logout
      </button> */}
    </div>
  );
};

export default page;
