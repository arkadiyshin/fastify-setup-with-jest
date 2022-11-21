---
title: "fastify-setup-with-jest"
linkTitle: "fastify-setup-with-jest"
slug: "modules"
---

## Table of contents

### References

- [default](modules.md#default)

### Type Aliases

- [AppOptions](modules.md#appoptions)

### Variables

- [options](modules.md#options)

### Functions

- [app](modules.md#app)

## References

### default

Renames and re-exports [app](modules.md#app)

## Type Aliases

### AppOptions

Ƭ **AppOptions**: {} & `Partial`<`AutoloadPluginOptions`\>

Extends the AutoloadPluginOptions with customs options

**`Date`**

11/12/2022 - 10:23:35 PM

**`Export`**

#### Defined in

src/app.ts:13

## Variables

### options

• `Const` **options**: [`AppOptions`](modules.md#appoptions) = `{}`

Pass --options via CLI arguments in command to enable these options.

**`Date`**

11/12/2022 - 10:25:38 PM

#### Defined in

src/app.ts:25

## Functions

### app

▸ **app**(`instance`, `opts`): `Promise`<`void`\>

Create app as a plugin. Use to run server with fastify-cli or in helper for unit-tests

**`Date`**

11/12/2022 - 10:25:55 PM

**`Async`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `FastifyInstance`<`RawServerDefault`, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |
| `opts` | `Partial`<`AutoloadPluginOptions`\> |

#### Returns

`Promise`<`void`\>

- the app plugin as a promise

#### Defined in

node_modules/fastify/types/plugin.d.ts:28
