import React, { useState, lazy, Suspense } from 'react'
import '@/App.css'
import lessStyles from '@/app.less'
import smallImg from '@/assets/imgs/5kb_img.jpeg'
import bigImg from '@/assets/imgs/10kb_img.png'
import memberList from './test.json'

// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /*webpackPrefetch: true*/
      '@/components/PreFetchDemo'
    )
)

// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPreload: true*/
      '@/components/PreloadDemo'
    )
)

function App() {
  const [count, setCounts] = useState('')
  const onChange = (e: any) => {
    setCounts(e.target.value)
  }
  console.log('memberList', memberList)

  return (
    <>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles['lessBox']}>
        <div className={lessStyles['box']}>
          lessBox
          <img src={smallImg} alt='小于10kb的图片' />
          <img src={bigImg} alt='大于于10kb的图片' />
          <div className={lessStyles['smallImg']}>小图片背景</div>
          <div className={lessStyles['bigImg']}>大图片背景</div>
        </div>
      </div>
      <Suspense fallback={null}>
        <PreloadDemo />
      </Suspense>
      <Suspense fallback={null}>
        <PreFetchDemo />
      </Suspense>
      <div>
        <p>受控组件</p>
        <input type='text' value={count} onChange={onChange} />
        <br />
        <p>非受控组件</p>
        <input type='text' />
      </div>
    </>
  )
}

export default App
