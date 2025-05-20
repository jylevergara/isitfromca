
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CompanySearch
 * 
 */
export type CompanySearch = $Result.DefaultSelection<Prisma.$CompanySearchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CompanySearches
 * const companySearches = await prisma.companySearch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CompanySearches
   * const companySearches = await prisma.companySearch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.companySearch`: Exposes CRUD operations for the **CompanySearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySearches
    * const companySearches = await prisma.companySearch.findMany()
    * ```
    */
  get companySearch(): Prisma.CompanySearchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CompanySearch: 'CompanySearch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "companySearch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CompanySearch: {
        payload: Prisma.$CompanySearchPayload<ExtArgs>
        fields: Prisma.CompanySearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>
          }
          findFirst: {
            args: Prisma.CompanySearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>
          }
          findMany: {
            args: Prisma.CompanySearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>[]
          }
          create: {
            args: Prisma.CompanySearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>
          }
          createMany: {
            args: Prisma.CompanySearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanySearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>[]
          }
          delete: {
            args: Prisma.CompanySearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>
          }
          update: {
            args: Prisma.CompanySearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>
          }
          deleteMany: {
            args: Prisma.CompanySearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanySearchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>[]
          }
          upsert: {
            args: Prisma.CompanySearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySearchPayload>
          }
          aggregate: {
            args: Prisma.CompanySearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanySearch>
          }
          groupBy: {
            args: Prisma.CompanySearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanySearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySearchCountArgs<ExtArgs>
            result: $Utils.Optional<CompanySearchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    companySearch?: CompanySearchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model CompanySearch
   */

  export type AggregateCompanySearch = {
    _count: CompanySearchCountAggregateOutputType | null
    _avg: CompanySearchAvgAggregateOutputType | null
    _sum: CompanySearchSumAggregateOutputType | null
    _min: CompanySearchMinAggregateOutputType | null
    _max: CompanySearchMaxAggregateOutputType | null
  }

  export type CompanySearchAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySearchSumAggregateOutputType = {
    id: number | null
  }

  export type CompanySearchMinAggregateOutputType = {
    id: number | null
    searchedAt: Date | null
    companyName: string | null
    displayName: string | null
    website: string | null
    country: string | null
    origin: string | null
    isFromUS: boolean | null
    isFromCanada: boolean | null
  }

  export type CompanySearchMaxAggregateOutputType = {
    id: number | null
    searchedAt: Date | null
    companyName: string | null
    displayName: string | null
    website: string | null
    country: string | null
    origin: string | null
    isFromUS: boolean | null
    isFromCanada: boolean | null
  }

  export type CompanySearchCountAggregateOutputType = {
    id: number
    searchedAt: number
    companyName: number
    displayName: number
    website: number
    country: number
    origin: number
    isFromUS: number
    isFromCanada: number
    _all: number
  }


  export type CompanySearchAvgAggregateInputType = {
    id?: true
  }

  export type CompanySearchSumAggregateInputType = {
    id?: true
  }

  export type CompanySearchMinAggregateInputType = {
    id?: true
    searchedAt?: true
    companyName?: true
    displayName?: true
    website?: true
    country?: true
    origin?: true
    isFromUS?: true
    isFromCanada?: true
  }

  export type CompanySearchMaxAggregateInputType = {
    id?: true
    searchedAt?: true
    companyName?: true
    displayName?: true
    website?: true
    country?: true
    origin?: true
    isFromUS?: true
    isFromCanada?: true
  }

  export type CompanySearchCountAggregateInputType = {
    id?: true
    searchedAt?: true
    companyName?: true
    displayName?: true
    website?: true
    country?: true
    origin?: true
    isFromUS?: true
    isFromCanada?: true
    _all?: true
  }

  export type CompanySearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySearch to aggregate.
     */
    where?: CompanySearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySearches to fetch.
     */
    orderBy?: CompanySearchOrderByWithRelationInput | CompanySearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySearches
    **/
    _count?: true | CompanySearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySearchMaxAggregateInputType
  }

  export type GetCompanySearchAggregateType<T extends CompanySearchAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySearch[P]>
      : GetScalarType<T[P], AggregateCompanySearch[P]>
  }




  export type CompanySearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySearchWhereInput
    orderBy?: CompanySearchOrderByWithAggregationInput | CompanySearchOrderByWithAggregationInput[]
    by: CompanySearchScalarFieldEnum[] | CompanySearchScalarFieldEnum
    having?: CompanySearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySearchCountAggregateInputType | true
    _avg?: CompanySearchAvgAggregateInputType
    _sum?: CompanySearchSumAggregateInputType
    _min?: CompanySearchMinAggregateInputType
    _max?: CompanySearchMaxAggregateInputType
  }

  export type CompanySearchGroupByOutputType = {
    id: number
    searchedAt: Date
    companyName: string
    displayName: string | null
    website: string | null
    country: string | null
    origin: string | null
    isFromUS: boolean
    isFromCanada: boolean
    _count: CompanySearchCountAggregateOutputType | null
    _avg: CompanySearchAvgAggregateOutputType | null
    _sum: CompanySearchSumAggregateOutputType | null
    _min: CompanySearchMinAggregateOutputType | null
    _max: CompanySearchMaxAggregateOutputType | null
  }

  type GetCompanySearchGroupByPayload<T extends CompanySearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySearchGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySearchGroupByOutputType[P]>
        }
      >
    >


  export type CompanySearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchedAt?: boolean
    companyName?: boolean
    displayName?: boolean
    website?: boolean
    country?: boolean
    origin?: boolean
    isFromUS?: boolean
    isFromCanada?: boolean
  }, ExtArgs["result"]["companySearch"]>

  export type CompanySearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchedAt?: boolean
    companyName?: boolean
    displayName?: boolean
    website?: boolean
    country?: boolean
    origin?: boolean
    isFromUS?: boolean
    isFromCanada?: boolean
  }, ExtArgs["result"]["companySearch"]>

  export type CompanySearchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchedAt?: boolean
    companyName?: boolean
    displayName?: boolean
    website?: boolean
    country?: boolean
    origin?: boolean
    isFromUS?: boolean
    isFromCanada?: boolean
  }, ExtArgs["result"]["companySearch"]>

  export type CompanySearchSelectScalar = {
    id?: boolean
    searchedAt?: boolean
    companyName?: boolean
    displayName?: boolean
    website?: boolean
    country?: boolean
    origin?: boolean
    isFromUS?: boolean
    isFromCanada?: boolean
  }

  export type CompanySearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "searchedAt" | "companyName" | "displayName" | "website" | "country" | "origin" | "isFromUS" | "isFromCanada", ExtArgs["result"]["companySearch"]>

  export type $CompanySearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      searchedAt: Date
      companyName: string
      displayName: string | null
      website: string | null
      country: string | null
      origin: string | null
      isFromUS: boolean
      isFromCanada: boolean
    }, ExtArgs["result"]["companySearch"]>
    composites: {}
  }

  type CompanySearchGetPayload<S extends boolean | null | undefined | CompanySearchDefaultArgs> = $Result.GetResult<Prisma.$CompanySearchPayload, S>

  type CompanySearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanySearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanySearchCountAggregateInputType | true
    }

  export interface CompanySearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySearch'], meta: { name: 'CompanySearch' } }
    /**
     * Find zero or one CompanySearch that matches the filter.
     * @param {CompanySearchFindUniqueArgs} args - Arguments to find a CompanySearch
     * @example
     * // Get one CompanySearch
     * const companySearch = await prisma.companySearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanySearchFindUniqueArgs>(args: SelectSubset<T, CompanySearchFindUniqueArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanySearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanySearchFindUniqueOrThrowArgs} args - Arguments to find a CompanySearch
     * @example
     * // Get one CompanySearch
     * const companySearch = await prisma.companySearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanySearchFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanySearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchFindFirstArgs} args - Arguments to find a CompanySearch
     * @example
     * // Get one CompanySearch
     * const companySearch = await prisma.companySearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanySearchFindFirstArgs>(args?: SelectSubset<T, CompanySearchFindFirstArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchFindFirstOrThrowArgs} args - Arguments to find a CompanySearch
     * @example
     * // Get one CompanySearch
     * const companySearch = await prisma.companySearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanySearchFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanySearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanySearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySearches
     * const companySearches = await prisma.companySearch.findMany()
     * 
     * // Get first 10 CompanySearches
     * const companySearches = await prisma.companySearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companySearchWithIdOnly = await prisma.companySearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanySearchFindManyArgs>(args?: SelectSubset<T, CompanySearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanySearch.
     * @param {CompanySearchCreateArgs} args - Arguments to create a CompanySearch.
     * @example
     * // Create one CompanySearch
     * const CompanySearch = await prisma.companySearch.create({
     *   data: {
     *     // ... data to create a CompanySearch
     *   }
     * })
     * 
     */
    create<T extends CompanySearchCreateArgs>(args: SelectSubset<T, CompanySearchCreateArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanySearches.
     * @param {CompanySearchCreateManyArgs} args - Arguments to create many CompanySearches.
     * @example
     * // Create many CompanySearches
     * const companySearch = await prisma.companySearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanySearchCreateManyArgs>(args?: SelectSubset<T, CompanySearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanySearches and returns the data saved in the database.
     * @param {CompanySearchCreateManyAndReturnArgs} args - Arguments to create many CompanySearches.
     * @example
     * // Create many CompanySearches
     * const companySearch = await prisma.companySearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanySearches and only return the `id`
     * const companySearchWithIdOnly = await prisma.companySearch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanySearchCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanySearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanySearch.
     * @param {CompanySearchDeleteArgs} args - Arguments to delete one CompanySearch.
     * @example
     * // Delete one CompanySearch
     * const CompanySearch = await prisma.companySearch.delete({
     *   where: {
     *     // ... filter to delete one CompanySearch
     *   }
     * })
     * 
     */
    delete<T extends CompanySearchDeleteArgs>(args: SelectSubset<T, CompanySearchDeleteArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanySearch.
     * @param {CompanySearchUpdateArgs} args - Arguments to update one CompanySearch.
     * @example
     * // Update one CompanySearch
     * const companySearch = await prisma.companySearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanySearchUpdateArgs>(args: SelectSubset<T, CompanySearchUpdateArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanySearches.
     * @param {CompanySearchDeleteManyArgs} args - Arguments to filter CompanySearches to delete.
     * @example
     * // Delete a few CompanySearches
     * const { count } = await prisma.companySearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanySearchDeleteManyArgs>(args?: SelectSubset<T, CompanySearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySearches
     * const companySearch = await prisma.companySearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanySearchUpdateManyArgs>(args: SelectSubset<T, CompanySearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySearches and returns the data updated in the database.
     * @param {CompanySearchUpdateManyAndReturnArgs} args - Arguments to update many CompanySearches.
     * @example
     * // Update many CompanySearches
     * const companySearch = await prisma.companySearch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanySearches and only return the `id`
     * const companySearchWithIdOnly = await prisma.companySearch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanySearchUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanySearchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanySearch.
     * @param {CompanySearchUpsertArgs} args - Arguments to update or create a CompanySearch.
     * @example
     * // Update or create a CompanySearch
     * const companySearch = await prisma.companySearch.upsert({
     *   create: {
     *     // ... data to create a CompanySearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySearch we want to update
     *   }
     * })
     */
    upsert<T extends CompanySearchUpsertArgs>(args: SelectSubset<T, CompanySearchUpsertArgs<ExtArgs>>): Prisma__CompanySearchClient<$Result.GetResult<Prisma.$CompanySearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanySearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchCountArgs} args - Arguments to filter CompanySearches to count.
     * @example
     * // Count the number of CompanySearches
     * const count = await prisma.companySearch.count({
     *   where: {
     *     // ... the filter for the CompanySearches we want to count
     *   }
     * })
    **/
    count<T extends CompanySearchCountArgs>(
      args?: Subset<T, CompanySearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanySearchAggregateArgs>(args: Subset<T, CompanySearchAggregateArgs>): Prisma.PrismaPromise<GetCompanySearchAggregateType<T>>

    /**
     * Group by CompanySearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanySearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySearchGroupByArgs['orderBy'] }
        : { orderBy?: CompanySearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanySearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySearch model
   */
  readonly fields: CompanySearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanySearch model
   */
  interface CompanySearchFieldRefs {
    readonly id: FieldRef<"CompanySearch", 'Int'>
    readonly searchedAt: FieldRef<"CompanySearch", 'DateTime'>
    readonly companyName: FieldRef<"CompanySearch", 'String'>
    readonly displayName: FieldRef<"CompanySearch", 'String'>
    readonly website: FieldRef<"CompanySearch", 'String'>
    readonly country: FieldRef<"CompanySearch", 'String'>
    readonly origin: FieldRef<"CompanySearch", 'String'>
    readonly isFromUS: FieldRef<"CompanySearch", 'Boolean'>
    readonly isFromCanada: FieldRef<"CompanySearch", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CompanySearch findUnique
   */
  export type CompanySearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * Filter, which CompanySearch to fetch.
     */
    where: CompanySearchWhereUniqueInput
  }

  /**
   * CompanySearch findUniqueOrThrow
   */
  export type CompanySearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * Filter, which CompanySearch to fetch.
     */
    where: CompanySearchWhereUniqueInput
  }

  /**
   * CompanySearch findFirst
   */
  export type CompanySearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * Filter, which CompanySearch to fetch.
     */
    where?: CompanySearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySearches to fetch.
     */
    orderBy?: CompanySearchOrderByWithRelationInput | CompanySearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySearches.
     */
    cursor?: CompanySearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySearches.
     */
    distinct?: CompanySearchScalarFieldEnum | CompanySearchScalarFieldEnum[]
  }

  /**
   * CompanySearch findFirstOrThrow
   */
  export type CompanySearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * Filter, which CompanySearch to fetch.
     */
    where?: CompanySearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySearches to fetch.
     */
    orderBy?: CompanySearchOrderByWithRelationInput | CompanySearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySearches.
     */
    cursor?: CompanySearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySearches.
     */
    distinct?: CompanySearchScalarFieldEnum | CompanySearchScalarFieldEnum[]
  }

  /**
   * CompanySearch findMany
   */
  export type CompanySearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * Filter, which CompanySearches to fetch.
     */
    where?: CompanySearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySearches to fetch.
     */
    orderBy?: CompanySearchOrderByWithRelationInput | CompanySearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySearches.
     */
    cursor?: CompanySearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySearches.
     */
    skip?: number
    distinct?: CompanySearchScalarFieldEnum | CompanySearchScalarFieldEnum[]
  }

  /**
   * CompanySearch create
   */
  export type CompanySearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanySearch.
     */
    data: XOR<CompanySearchCreateInput, CompanySearchUncheckedCreateInput>
  }

  /**
   * CompanySearch createMany
   */
  export type CompanySearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySearches.
     */
    data: CompanySearchCreateManyInput | CompanySearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySearch createManyAndReturn
   */
  export type CompanySearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * The data used to create many CompanySearches.
     */
    data: CompanySearchCreateManyInput | CompanySearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySearch update
   */
  export type CompanySearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanySearch.
     */
    data: XOR<CompanySearchUpdateInput, CompanySearchUncheckedUpdateInput>
    /**
     * Choose, which CompanySearch to update.
     */
    where: CompanySearchWhereUniqueInput
  }

  /**
   * CompanySearch updateMany
   */
  export type CompanySearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySearches.
     */
    data: XOR<CompanySearchUpdateManyMutationInput, CompanySearchUncheckedUpdateManyInput>
    /**
     * Filter which CompanySearches to update
     */
    where?: CompanySearchWhereInput
    /**
     * Limit how many CompanySearches to update.
     */
    limit?: number
  }

  /**
   * CompanySearch updateManyAndReturn
   */
  export type CompanySearchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * The data used to update CompanySearches.
     */
    data: XOR<CompanySearchUpdateManyMutationInput, CompanySearchUncheckedUpdateManyInput>
    /**
     * Filter which CompanySearches to update
     */
    where?: CompanySearchWhereInput
    /**
     * Limit how many CompanySearches to update.
     */
    limit?: number
  }

  /**
   * CompanySearch upsert
   */
  export type CompanySearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanySearch to update in case it exists.
     */
    where: CompanySearchWhereUniqueInput
    /**
     * In case the CompanySearch found by the `where` argument doesn't exist, create a new CompanySearch with this data.
     */
    create: XOR<CompanySearchCreateInput, CompanySearchUncheckedCreateInput>
    /**
     * In case the CompanySearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySearchUpdateInput, CompanySearchUncheckedUpdateInput>
  }

  /**
   * CompanySearch delete
   */
  export type CompanySearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
    /**
     * Filter which CompanySearch to delete.
     */
    where: CompanySearchWhereUniqueInput
  }

  /**
   * CompanySearch deleteMany
   */
  export type CompanySearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySearches to delete
     */
    where?: CompanySearchWhereInput
    /**
     * Limit how many CompanySearches to delete.
     */
    limit?: number
  }

  /**
   * CompanySearch without action
   */
  export type CompanySearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySearch
     */
    select?: CompanySearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySearch
     */
    omit?: CompanySearchOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanySearchScalarFieldEnum: {
    id: 'id',
    searchedAt: 'searchedAt',
    companyName: 'companyName',
    displayName: 'displayName',
    website: 'website',
    country: 'country',
    origin: 'origin',
    isFromUS: 'isFromUS',
    isFromCanada: 'isFromCanada'
  };

  export type CompanySearchScalarFieldEnum = (typeof CompanySearchScalarFieldEnum)[keyof typeof CompanySearchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanySearchWhereInput = {
    AND?: CompanySearchWhereInput | CompanySearchWhereInput[]
    OR?: CompanySearchWhereInput[]
    NOT?: CompanySearchWhereInput | CompanySearchWhereInput[]
    id?: IntFilter<"CompanySearch"> | number
    searchedAt?: DateTimeFilter<"CompanySearch"> | Date | string
    companyName?: StringFilter<"CompanySearch"> | string
    displayName?: StringNullableFilter<"CompanySearch"> | string | null
    website?: StringNullableFilter<"CompanySearch"> | string | null
    country?: StringNullableFilter<"CompanySearch"> | string | null
    origin?: StringNullableFilter<"CompanySearch"> | string | null
    isFromUS?: BoolFilter<"CompanySearch"> | boolean
    isFromCanada?: BoolFilter<"CompanySearch"> | boolean
  }

  export type CompanySearchOrderByWithRelationInput = {
    id?: SortOrder
    searchedAt?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    isFromUS?: SortOrder
    isFromCanada?: SortOrder
  }

  export type CompanySearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanySearchWhereInput | CompanySearchWhereInput[]
    OR?: CompanySearchWhereInput[]
    NOT?: CompanySearchWhereInput | CompanySearchWhereInput[]
    searchedAt?: DateTimeFilter<"CompanySearch"> | Date | string
    companyName?: StringFilter<"CompanySearch"> | string
    displayName?: StringNullableFilter<"CompanySearch"> | string | null
    website?: StringNullableFilter<"CompanySearch"> | string | null
    country?: StringNullableFilter<"CompanySearch"> | string | null
    origin?: StringNullableFilter<"CompanySearch"> | string | null
    isFromUS?: BoolFilter<"CompanySearch"> | boolean
    isFromCanada?: BoolFilter<"CompanySearch"> | boolean
  }, "id">

  export type CompanySearchOrderByWithAggregationInput = {
    id?: SortOrder
    searchedAt?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    isFromUS?: SortOrder
    isFromCanada?: SortOrder
    _count?: CompanySearchCountOrderByAggregateInput
    _avg?: CompanySearchAvgOrderByAggregateInput
    _max?: CompanySearchMaxOrderByAggregateInput
    _min?: CompanySearchMinOrderByAggregateInput
    _sum?: CompanySearchSumOrderByAggregateInput
  }

  export type CompanySearchScalarWhereWithAggregatesInput = {
    AND?: CompanySearchScalarWhereWithAggregatesInput | CompanySearchScalarWhereWithAggregatesInput[]
    OR?: CompanySearchScalarWhereWithAggregatesInput[]
    NOT?: CompanySearchScalarWhereWithAggregatesInput | CompanySearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanySearch"> | number
    searchedAt?: DateTimeWithAggregatesFilter<"CompanySearch"> | Date | string
    companyName?: StringWithAggregatesFilter<"CompanySearch"> | string
    displayName?: StringNullableWithAggregatesFilter<"CompanySearch"> | string | null
    website?: StringNullableWithAggregatesFilter<"CompanySearch"> | string | null
    country?: StringNullableWithAggregatesFilter<"CompanySearch"> | string | null
    origin?: StringNullableWithAggregatesFilter<"CompanySearch"> | string | null
    isFromUS?: BoolWithAggregatesFilter<"CompanySearch"> | boolean
    isFromCanada?: BoolWithAggregatesFilter<"CompanySearch"> | boolean
  }

  export type CompanySearchCreateInput = {
    searchedAt?: Date | string
    companyName: string
    displayName?: string | null
    website?: string | null
    country?: string | null
    origin?: string | null
    isFromUS?: boolean
    isFromCanada?: boolean
  }

  export type CompanySearchUncheckedCreateInput = {
    id?: number
    searchedAt?: Date | string
    companyName: string
    displayName?: string | null
    website?: string | null
    country?: string | null
    origin?: string | null
    isFromUS?: boolean
    isFromCanada?: boolean
  }

  export type CompanySearchUpdateInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    isFromUS?: BoolFieldUpdateOperationsInput | boolean
    isFromCanada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanySearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    isFromUS?: BoolFieldUpdateOperationsInput | boolean
    isFromCanada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanySearchCreateManyInput = {
    id?: number
    searchedAt?: Date | string
    companyName: string
    displayName?: string | null
    website?: string | null
    country?: string | null
    origin?: string | null
    isFromUS?: boolean
    isFromCanada?: boolean
  }

  export type CompanySearchUpdateManyMutationInput = {
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    isFromUS?: BoolFieldUpdateOperationsInput | boolean
    isFromCanada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanySearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    isFromUS?: BoolFieldUpdateOperationsInput | boolean
    isFromCanada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanySearchCountOrderByAggregateInput = {
    id?: SortOrder
    searchedAt?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    website?: SortOrder
    country?: SortOrder
    origin?: SortOrder
    isFromUS?: SortOrder
    isFromCanada?: SortOrder
  }

  export type CompanySearchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanySearchMaxOrderByAggregateInput = {
    id?: SortOrder
    searchedAt?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    website?: SortOrder
    country?: SortOrder
    origin?: SortOrder
    isFromUS?: SortOrder
    isFromCanada?: SortOrder
  }

  export type CompanySearchMinOrderByAggregateInput = {
    id?: SortOrder
    searchedAt?: SortOrder
    companyName?: SortOrder
    displayName?: SortOrder
    website?: SortOrder
    country?: SortOrder
    origin?: SortOrder
    isFromUS?: SortOrder
    isFromCanada?: SortOrder
  }

  export type CompanySearchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}