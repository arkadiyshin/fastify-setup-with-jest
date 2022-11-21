//import { test } from 'tap'
import { build } from '../helper'

// test('example is loaded', async () => {
//   const app = await build()

//   const res = await app.inject({
//     url: '/example'
//   })

//   t.equal(res.payload, 'this is an example')
// })

describe('root tests', () => {
  const app = build();

  test('example is loaded', async () => {
      const res = await app.inject({
          url: '/example',
      });
      await expect(res.payload).toBe('this is an example');
  });
});