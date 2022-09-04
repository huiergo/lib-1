---
nav:
  title: Components
  path: /components

group:
  title: '基础组件'
  order:  2
---

## Button

Button 示例:

### 普通按钮
```tsx
import React from 'react';
import { Button } from 'heima-ui-1';

export default () => <Button text="普通按钮" style={{width:200}}/>;
```

### 高亮按钮
```tsx
import React from 'react';
import { Button } from 'heima-ui-1';

export default () => <Button text="普通按钮" type='highlight' style={{width:200}}/>;
```


### 禁用按钮
```tsx
import React from 'react';
import { Button } from 'heima-ui-1';

export default () => <Button text="普通按钮" type='highlight' disabled style={{width:200}}/>;
```
More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
