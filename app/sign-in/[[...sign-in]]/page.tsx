import { SignIn } from "@clerk/nextjs";

const SignInpage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};
export default SignInpage;
