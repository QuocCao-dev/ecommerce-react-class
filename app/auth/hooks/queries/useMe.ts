import useMeStore from "@/app/auth/stores/me";

const useMe = () => {
  const me = useMeStore((state) => state.me);
  const setMe = useMeStore((state) => state.setMe);

  return { me, setMe };
};

export default useMe;
