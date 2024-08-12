import analytics from '@/analytics';
import Header from '@/layouts/components/Header';
import { GlobalContextProvider } from '@/models/global.context';
import { Outlet, useLocation } from '@umijs/max';
import { Layout } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { AnalyticsProvider } from 'use-analytics';
import Footer from './components/Footer';
import './index.less';

const BasicLayout: React.FC = () => {
  const location = useLocation();
  const isWebReactObject = useMemo(() => {
    return location.pathname === '/' || location.pathname === '/detail';
  }, [location.pathname]);

  useEffect(() => {
    analytics.page();
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const preventZoom = (event: TouchEvent) => {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      };

      document.addEventListener('touchstart', preventZoom, { passive: false });
      document.addEventListener('touchmove', preventZoom, { passive: false });

      return () => {
        document.removeEventListener('touchstart', preventZoom);
        document.removeEventListener('touchmove', preventZoom);
      };
    }
  }, [location.pathname]);

  return (
    <AnalyticsProvider instance={analytics}>
      <GlobalContextProvider>
        <Layout className={classNames('flex flex-col h-full overflow-hidden')} spellCheck="false">
          <div className="">{isWebReactObject && <Header />}</div>
          <div className="w-full bg-[#fff]  md:h-[calc(100svh-102px)]  h-[calc(100svh-97px)]">
            <Outlet />
          </div>
          <div className="">
            <Footer></Footer>
          </div>
        </Layout>
      </GlobalContextProvider>
    </AnalyticsProvider>
  );
};

export default BasicLayout;
