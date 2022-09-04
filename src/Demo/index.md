---
nav:
  title: Components
  path: /components
group:
  title: '主题'
  order:  2
---

## Demo

```tsx
import React from 'react';
import { Button } from 'heima-ui-1';

export default () => <Button    
    style={{ width: 200 }}
    text="您好"
    onClick={() => console.log('click it')}/>;
```


```tsx
import React from 'react';
import { Demo } from 'heima-ui-1';

export default () => <Demo />;
```

## 模拟服务端下发数据
```tsx
import React from 'react';
import { ThemeToggle } from 'heima-ui-1';

export default () => <ThemeToggle />;
```


More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
