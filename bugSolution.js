```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./my-component'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent />
    </div>
  );
}
```