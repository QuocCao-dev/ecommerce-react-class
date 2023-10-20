import useMeStore from "@/app/(guest_routes)/auth/_stores/me";

const useMe = () => {
  const me = useMeStore((state) => state.me);
  const setMe = useMeStore((state) => state.setMe);

  return { me, setMe };
};

export default useMe;
