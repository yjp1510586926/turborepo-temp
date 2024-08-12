import { useLocation } from '@umijs/max';
import { useMemo } from 'react';
const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);

  return (
    <>
      {isHome ? (
        <div className="text-[#A2A6B1] bg-[#fff] text-[12px] md:text-[14px] pb-[32px] w-full text-center ">
          © VN Software Advertise News FAQ Report a security issue
        </div>
      ) : null}
    </>
  );
};

export default Footer;
