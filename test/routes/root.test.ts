//import { test } from 'tap'
import { build } from '../helper'

// test('default root route', async () => {
//   const app = await build()

//   const res = await app.inject({
//     url: '/'
//   })
//   t.same(JSON.parse(res.payload), { root: true })
// })


describe('root tests', () => {
  const app = build();

  test('default root route', async () => {
      const res = await app.inject({
          url: '/',
      });
      await expect(JSON.parse(res.payload)).toEqual({ root: true });
  });
});
