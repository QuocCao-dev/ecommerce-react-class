type Props = {
  verified: boolean;
  id: string;
};

const EmailVerificationBanner = ({ verified, id }: Props) => {
  return (
    <div className="p-2 text-center bg-blue-100">
      It looks like you have not verified your email address.
      <button className="ml-2 font-semibold underline">
        Get verification link.
      </button>
    </div>
  );
};
export default EmailVerificationBanner;
