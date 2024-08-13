import { Card, Code, VNButton } from '@repo/ui';
import { testFunc } from '@repo/utils';
import React from 'react';

const HomePage: React.FC = ({}) => {
  const onClickFunc = () => {
    testFunc();
  };
  return (
    <div className="flex items-center justify-center w-full bg-[#fff]  h-full overflow-hidden ">
      <VNButton onClickFunc={onClickFunc} appName="web">
        我看看 Open alert
      </VNButton>
      <Card title="Card Title" href="https://www.baidu.com">
        Card Content
      </Card>
      <Code>123</Code>
    </div>
  );
};

export default HomePage;
