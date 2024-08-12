# template starter

```
pnpm i
```


### Develop
要开发所有应用程序和软件包，请运行以下命令：
```
pnpm dev
```
要开发指定应用程序和软件包，请运行以下命令：
```
pnpm dev:vn
```

### Build

要构建所有应用程序和软件包，请运行以下命令：
```
pnpm build
```
要构建指定应用程序和软件包，请运行以下命令：
```
pnpm build:vn
```

### 组件UI开发项目
> 路径  vn_web_template/packages/ui/src/button.tsx
```
"use client";

import { ReactNode } from "react";
import { Button as Buttons } from "antd";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const VNButton = ({ children, className, appName }: ButtonProps) => {
  return (
    <Buttons
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </Buttons>
  );
};

```

> 子组件使用  import { Card, Code, VNButton } from '@repo/ui';
```
import { Card, Code, VNButton } from '@repo/ui';
import React from 'react';

const HomePage: React.FC = ({}) => {
  return (
    <div className="flex items-center justify-center w-full bg-[#fff]  h-full overflow-hidden ">
      <VNButton appName="web">我看看 Open alert</VNButton>
      <Card title="Card Title" href="https://www.baidu.com">
        Card Content
      </Card>
      <Code>123</Code>
    </div>
  );
};

export default HomePage;

```

### 公共依赖安装在最外层
```
pnpm i antd --save -w
```