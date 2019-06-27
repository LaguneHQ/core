> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto-admin/masto-admin"](../modules/_clients_masto_admin_masto_admin_.md) / [MastoAdmin](_clients_masto_admin_masto_admin_.mastoadmin.md) /

# Class: MastoAdmin

Mastodon Moderation API client

## Hierarchy

* [Gateway](_gateway_gateway_.gateway.md)

  * **MastoAdmin**

### Index

#### Constructors

* [constructor](_clients_masto_admin_masto_admin_.mastoadmin.md#constructor)

#### Properties

* [accessToken](_clients_masto_admin_masto_admin_.mastoadmin.md#optional-accesstoken)
* [version](_clients_masto_admin_masto_admin_.mastoadmin.md#version)

#### Accessors

* [streamingApiUrl](_clients_masto_admin_masto_admin_.mastoadmin.md#streamingapiurl)
* [uri](_clients_masto_admin_masto_admin_.mastoadmin.md#uri)

#### Methods

* [actionAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#actionaccount)
* [approveAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#approveaccount)
* [assignReportToSelf](_clients_masto_admin_masto_admin_.mastoadmin.md#assignreporttoself)
* [delete](_clients_masto_admin_masto_admin_.mastoadmin.md#delete)
* [enableAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#enableaccount)
* [fetchAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#fetchaccount)
* [fetchAccounts](_clients_masto_admin_masto_admin_.mastoadmin.md#fetchaccounts)
* [fetchReport](_clients_masto_admin_masto_admin_.mastoadmin.md#fetchreport)
* [fetchReports](_clients_masto_admin_masto_admin_.mastoadmin.md#fetchreports)
* [get](_clients_masto_admin_masto_admin_.mastoadmin.md#get)
* [paginate](_clients_masto_admin_masto_admin_.mastoadmin.md#paginate)
* [patch](_clients_masto_admin_masto_admin_.mastoadmin.md#patch)
* [post](_clients_masto_admin_masto_admin_.mastoadmin.md#post)
* [put](_clients_masto_admin_masto_admin_.mastoadmin.md#put)
* [rejectAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#rejectaccount)
* [reopenReport](_clients_masto_admin_masto_admin_.mastoadmin.md#reopenreport)
* [resolveReport](_clients_masto_admin_masto_admin_.mastoadmin.md#resolvereport)
* [stream](_clients_masto_admin_masto_admin_.mastoadmin.md#stream)
* [unassignReport](_clients_masto_admin_masto_admin_.mastoadmin.md#unassignreport)
* [unsilenceAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#unsilenceaccount)
* [unsuspendAccount](_clients_masto_admin_masto_admin_.mastoadmin.md#unsuspendaccount)
* [login](_clients_masto_admin_masto_admin_.mastoadmin.md#static-login)

## Constructors

###  constructor

\+ **new MastoAdmin**(`params`: [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md)): *[MastoAdmin](_clients_masto_admin_masto_admin_.mastoadmin.md)*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[constructor](_gateway_gateway_.gateway.md#constructor)*

*Defined in [gateway/gateway.ts:57](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L57)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [GatewayConstructorParams](../interfaces/_gateway_gateway_.gatewayconstructorparams.md) | Parameters  |

**Returns:** *[MastoAdmin](_clients_masto_admin_masto_admin_.mastoadmin.md)*

___

## Properties

### `Optional` accessToken

● **accessToken**? : *undefined | string*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[accessToken](_gateway_gateway_.gateway.md#optional-accesstoken)*

*Defined in [gateway/gateway.ts:53](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L53)*

API token of the user

___

###  version

● **version**: *string* = ""

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[version](_gateway_gateway_.gateway.md#version)*

*Defined in [gateway/gateway.ts:51](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L51)*

Version of the current instance

___

## Accessors

###  streamingApiUrl

● **get streamingApiUrl**(): *string*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[streamingApiUrl](_gateway_gateway_.gateway.md#streamingapiurl)*

*Defined in [gateway/gateway.ts:96](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L96)*

**Returns:** *string*

● **set streamingApiUrl**(`streamingApiUrl`: string): *void*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[streamingApiUrl](_gateway_gateway_.gateway.md#streamingapiurl)*

*Defined in [gateway/gateway.ts:100](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`streamingApiUrl` | string |

**Returns:** *void*

___

###  uri

● **get uri**(): *string*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[uri](_gateway_gateway_.gateway.md#uri)*

*Defined in [gateway/gateway.ts:88](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L88)*

**Returns:** *string*

● **set uri**(`uri`: string): *void*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[uri](_gateway_gateway_.gateway.md#uri)*

*Defined in [gateway/gateway.ts:92](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *void*

___

## Methods

###  actionAccount

▸ **actionAccount**(`id`: string, `params`: [AdminActionAccountParams](../interfaces/_clients_masto_admin_params_.adminactionaccountparams.md)): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:152](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L152)*

Perform a moderation action on an account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |
`params` | [AdminActionAccountParams](../interfaces/_clients_masto_admin_params_.adminactionaccountparams.md) | Params |

**Returns:** *`Promise<AdminAccount>`*

Acccount

___

###  approveAccount

▸ **approveAccount**(`id`: string): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:51](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L51)*

Approve pending account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *`Promise<AdminAccount>`*

Account

___

###  assignReportToSelf

▸ **assignReportToSelf**(`id`: string): *`Promise<AdminReport>`*

*Defined in [clients/masto-admin/masto-admin.ts:111](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L111)*

Assign report to self

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the report |

**Returns:** *`Promise<AdminReport>`*

Report

___

###  delete

▸ **delete**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[delete](_gateway_gateway_.gateway.md#delete)*

*Defined in [gateway/gateway.ts:276](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L276)*

HTTP DELETE

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | any |  {} | jPayload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  enableAccount

▸ **enableAccount**(`id`: string): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:41](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L41)*

Re-enable account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *`Promise<AdminAccount>`*

Account

___

###  fetchAccount

▸ **fetchAccount**(`id`: string): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:31](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L31)*

Get a specific account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *`Promise<AdminAccount>`*

Account

___

###  fetchAccounts

▸ **fetchAccounts**(`params?`: [AdminFetchAccountParams](../interfaces/_clients_masto_admin_params_.adminfetchaccountparams.md)): *`Promise<AdminAccount[]>`*

*Defined in [clients/masto-admin/masto-admin.ts:21](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L21)*

Get accounts

**`retunr`** Accounts

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [AdminFetchAccountParams](../interfaces/_clients_masto_admin_params_.adminfetchaccountparams.md) | parameters |

**Returns:** *`Promise<AdminAccount[]>`*

___

###  fetchReport

▸ **fetchReport**(`id`: string): *`Promise<AdminReport>`*

*Defined in [clients/masto-admin/masto-admin.ts:101](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L101)*

Get a specific report

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the report |

**Returns:** *`Promise<AdminReport>`*

Report

___

###  fetchReports

▸ **fetchReports**(`params?`: [AdminFetchReportsParams](../interfaces/_clients_masto_admin_params_.adminfetchreportsparams.md)): *`Promise<AdminReport[]>`*

*Defined in [clients/masto-admin/masto-admin.ts:91](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L91)*

Get reports

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params?` | [AdminFetchReportsParams](../interfaces/_clients_masto_admin_params_.adminfetchreportsparams.md) | params |

**Returns:** *`Promise<AdminReport[]>`*

Reports

___

###  get

▸ **get**<**T**>(`path`: string, `params`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[get](_gateway_gateway_.gateway.md#get)*

*Defined in [gateway/gateway.ts:210](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L210)*

HTTP GET

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | - |
`params` | any |  {} | Query strings |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  paginate

▸ **paginate**<**Data**, **Params**>(`path`: string, `initialParams?`: [Params]()): *`AsyncIterableIterator<Data | undefined>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[paginate](_gateway_gateway_.gateway.md#paginate)*

*Defined in [gateway/gateway.ts:349](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L349)*

Generate an iterable of the pagination.
The default generator implementation of JS cannot change the value of `done` depend on the result of yield,
Therefore we define custom generator to reproduce Mastodon's link header behaviour faithfully.

**Type parameters:**

■` Data`

■` Params`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path for the endpoint |
`initialParams?` | [Params]() | Query parameter |

**Returns:** *`AsyncIterableIterator<Data | undefined>`*

Async iterable iterator of the pages.
See also [MDN article about generator/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

___

###  patch

▸ **patch**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[patch](_gateway_gateway_.gateway.md#patch)*

*Defined in [gateway/gateway.ts:298](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L298)*

HTTP PATCH

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | any |  {} | Payload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  post

▸ **post**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[post](_gateway_gateway_.gateway.md#post)*

*Defined in [gateway/gateway.ts:232](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L232)*

HTTP POST

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | - |
`data` | any |  {} | Payload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  put

▸ **put**<**T**>(`path`: string, `data`: any, `options?`: `AxiosRequestConfig`): *`Promise<T>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[put](_gateway_gateway_.gateway.md#put)*

*Defined in [gateway/gateway.ts:254](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L254)*

HTTP PUT

**Type parameters:**

■` T`

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to request |
`data` | any |  {} | Payload |
`options?` | `AxiosRequestConfig` | - | Fetch API options |

**Returns:** *`Promise<T>`*

___

###  rejectAccount

▸ **rejectAccount**(`id`: string): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:61](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L61)*

Reject pending account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *`Promise<AdminAccount>`*

Account

___

###  reopenReport

▸ **reopenReport**(`id`: string): *`Promise<AdminReport>`*

*Defined in [clients/masto-admin/masto-admin.ts:131](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L131)*

Re-open report

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the report |

**Returns:** *`Promise<AdminReport>`*

Report

___

###  resolveReport

▸ **resolveReport**(`id`: string): *`Promise<AdminReport>`*

*Defined in [clients/masto-admin/masto-admin.ts:141](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L141)*

Close report

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the report |

**Returns:** *`Promise<AdminReport>`*

Report

___

###  stream

▸ **stream**(`path`: string, `params`: object): *`Promise<WebSocketEvents>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[stream](_gateway_gateway_.gateway.md#stream)*

*Defined in [gateway/gateway.ts:319](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L319)*

Connect to a streaming

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Path to stream |
`params` | object |  {} | Query parameters |

**Returns:** *`Promise<WebSocketEvents>`*

Instance of EventEmitter

___

###  unassignReport

▸ **unassignReport**(`id`: string): *`Promise<AdminReport>`*

*Defined in [clients/masto-admin/masto-admin.ts:121](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L121)*

Unassign report from self

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the report |

**Returns:** *`Promise<AdminReport>`*

Report

___

###  unsilenceAccount

▸ **unsilenceAccount**(`id`: string): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:71](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L71)*

Unsilence account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *`Promise<AdminAccount>`*

Account

___

###  unsuspendAccount

▸ **unsuspendAccount**(`id`: string): *`Promise<AdminAccount>`*

*Defined in [clients/masto-admin/masto-admin.ts:81](https://github.com/neet/masto.js/blob/3506035/src/clients/masto-admin/masto-admin.ts#L81)*

Unsuspend account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the account |

**Returns:** *`Promise<AdminAccount>`*

Account

___

### `Static` login

▸ **login**<**T**>(`this`: `T`, `params`: [LoginParams](../modules/_gateway_gateway_.md#loginparams)): *`Promise<InstanceType<T>>`*

*Inherited from [Gateway](_gateway_gateway_.gateway.md).[login](_gateway_gateway_.gateway.md#static-login)*

*Defined in [gateway/gateway.ts:109](https://github.com/neet/masto.js/blob/3506035/src/gateway/gateway.ts#L109)*

Login to Mastodon

**Type parameters:**

■` T`: *[Gateway](_gateway_gateway_.gateway.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | `T` | - |
`params` | [LoginParams](../modules/_gateway_gateway_.md#loginparams) | Paramters |

**Returns:** *`Promise<InstanceType<T>>`*

Instance of Mastodon class

___