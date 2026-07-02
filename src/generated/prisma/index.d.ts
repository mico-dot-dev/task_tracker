
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model task
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model task_category
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type task_category = $Result.DefaultSelection<Prisma.$task_categoryPayload>
/**
 * Model repeating_task
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type repeating_task = $Result.DefaultSelection<Prisma.$repeating_taskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DateRepeatType: {
  YEARLY: 'YEARLY',
  MONTHLY: 'MONTHLY',
  DAILY: 'DAILY',
  MANUAL: 'MANUAL'
};

export type DateRepeatType = (typeof DateRepeatType)[keyof typeof DateRepeatType]

}

export type DateRepeatType = $Enums.DateRepeatType

export const DateRepeatType: typeof $Enums.DateRepeatType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_category`: Exposes CRUD operations for the **task_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_categories
    * const task_categories = await prisma.task_category.findMany()
    * ```
    */
  get task_category(): Prisma.task_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repeating_task`: Exposes CRUD operations for the **repeating_task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repeating_tasks
    * const repeating_tasks = await prisma.repeating_task.findMany()
    * ```
    */
  get repeating_task(): Prisma.repeating_taskDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    users: 'users',
    task: 'task',
    task_category: 'task_category',
    repeating_task: 'repeating_task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "task" | "task_category" | "repeating_task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      task_category: {
        payload: Prisma.$task_categoryPayload<ExtArgs>
        fields: Prisma.task_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          findFirst: {
            args: Prisma.task_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          findMany: {
            args: Prisma.task_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>[]
          }
          create: {
            args: Prisma.task_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          createMany: {
            args: Prisma.task_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>[]
          }
          delete: {
            args: Prisma.task_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          update: {
            args: Prisma.task_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          deleteMany: {
            args: Prisma.task_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>[]
          }
          upsert: {
            args: Prisma.task_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_categoryPayload>
          }
          aggregate: {
            args: Prisma.Task_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_category>
          }
          groupBy: {
            args: Prisma.task_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Task_categoryCountAggregateOutputType> | number
          }
        }
      }
      repeating_task: {
        payload: Prisma.$repeating_taskPayload<ExtArgs>
        fields: Prisma.repeating_taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.repeating_taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.repeating_taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>
          }
          findFirst: {
            args: Prisma.repeating_taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.repeating_taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>
          }
          findMany: {
            args: Prisma.repeating_taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>[]
          }
          create: {
            args: Prisma.repeating_taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>
          }
          createMany: {
            args: Prisma.repeating_taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.repeating_taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>[]
          }
          delete: {
            args: Prisma.repeating_taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>
          }
          update: {
            args: Prisma.repeating_taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>
          }
          deleteMany: {
            args: Prisma.repeating_taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.repeating_taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.repeating_taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>[]
          }
          upsert: {
            args: Prisma.repeating_taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$repeating_taskPayload>
          }
          aggregate: {
            args: Prisma.Repeating_taskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepeating_task>
          }
          groupBy: {
            args: Prisma.repeating_taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<Repeating_taskGroupByOutputType>[]
          }
          count: {
            args: Prisma.repeating_taskCountArgs<ExtArgs>
            result: $Utils.Optional<Repeating_taskCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    task?: taskOmit
    task_category?: task_categoryOmit
    repeating_task?: repeating_taskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Task_categoryCountOutputType
   */

  export type Task_categoryCountOutputType = {
    task: number
  }

  export type Task_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Task_categoryCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * Task_categoryCountOutputType without action
   */
  export type Task_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task_categoryCountOutputType
     */
    select?: Task_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Task_categoryCountOutputType without action
   */
  export type Task_categoryCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type Repeating_taskCountOutputType
   */

  export type Repeating_taskCountOutputType = {
    task: number
  }

  export type Repeating_taskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Repeating_taskCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * Repeating_taskCountOutputType without action
   */
  export type Repeating_taskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repeating_taskCountOutputType
     */
    select?: Repeating_taskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Repeating_taskCountOutputType without action
   */
  export type Repeating_taskCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    created_at: Date | null
    email: string | null
    id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    created_at: Date | null
    email: string | null
    id: string | null
  }

  export type UsersCountAggregateOutputType = {
    created_at: number
    email: number
    id: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    created_at?: true
    email?: true
    id?: true
  }

  export type UsersMaxAggregateInputType = {
    created_at?: true
    email?: true
    id?: true
  }

  export type UsersCountAggregateInputType = {
    created_at?: true
    email?: true
    id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    created_at: Date
    email: string
    id: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    email?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    email?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    email?: boolean
    id?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    created_at?: boolean
    email?: boolean
    id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created_at" | "email" | "id", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      email: string
      id: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const usersWithCreated_atOnly = await prisma.users.findMany({ select: { created_at: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `created_at`
     * const usersWithCreated_atOnly = await prisma.users.createManyAndReturn({
     *   select: { created_at: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `created_at`
     * const usersWithCreated_atOnly = await prisma.users.updateManyAndReturn({
     *   select: { created_at: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly email: FieldRef<"users", 'String'>
    readonly id: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    priority_level: number | null
    task_category_id: number | null
    repeating_task_id: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: bigint | null
    priority_level: number | null
    task_category_id: bigint | null
    repeating_task_id: bigint | null
  }

  export type TaskMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    description: string | null
    completed: boolean | null
    completed_at: Date | null
    title: string | null
    user_id: string | null
    priority_level: number | null
    due_date: Date | null
    task_category_id: bigint | null
    repeating_task_id: bigint | null
  }

  export type TaskMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    description: string | null
    completed: boolean | null
    completed_at: Date | null
    title: string | null
    user_id: string | null
    priority_level: number | null
    due_date: Date | null
    task_category_id: bigint | null
    repeating_task_id: bigint | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    created_at: number
    description: number
    completed: number
    completed_at: number
    title: number
    user_id: number
    priority_level: number
    due_date: number
    task_category_id: number
    repeating_task_id: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    priority_level?: true
    task_category_id?: true
    repeating_task_id?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    priority_level?: true
    task_category_id?: true
    repeating_task_id?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    created_at?: true
    description?: true
    completed?: true
    completed_at?: true
    title?: true
    user_id?: true
    priority_level?: true
    due_date?: true
    task_category_id?: true
    repeating_task_id?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    created_at?: true
    description?: true
    completed?: true
    completed_at?: true
    title?: true
    user_id?: true
    priority_level?: true
    due_date?: true
    task_category_id?: true
    repeating_task_id?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    created_at?: true
    description?: true
    completed?: true
    completed_at?: true
    title?: true
    user_id?: true
    priority_level?: true
    due_date?: true
    task_category_id?: true
    repeating_task_id?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: bigint
    created_at: Date
    description: string | null
    completed: boolean
    completed_at: Date | null
    title: string | null
    user_id: string
    priority_level: number
    due_date: Date | null
    task_category_id: bigint | null
    repeating_task_id: bigint | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    user_id?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_task_id?: boolean
    repeating_task?: boolean | task$repeating_taskArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    user_id?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_task_id?: boolean
    repeating_task?: boolean | task$repeating_taskArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    user_id?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_task_id?: boolean
    repeating_task?: boolean | task$repeating_taskArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    created_at?: boolean
    description?: boolean
    completed?: boolean
    completed_at?: boolean
    title?: boolean
    user_id?: boolean
    priority_level?: boolean
    due_date?: boolean
    task_category_id?: boolean
    repeating_task_id?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "description" | "completed" | "completed_at" | "title" | "user_id" | "priority_level" | "due_date" | "task_category_id" | "repeating_task_id", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repeating_task?: boolean | task$repeating_taskArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }
  export type taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repeating_task?: boolean | task$repeating_taskArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }
  export type taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repeating_task?: boolean | task$repeating_taskArgs<ExtArgs>
    task_category?: boolean | task$task_categoryArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      repeating_task: Prisma.$repeating_taskPayload<ExtArgs> | null
      task_category: Prisma.$task_categoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      description: string | null
      completed: boolean
      completed_at: Date | null
      title: string | null
      user_id: string
      priority_level: number
      due_date: Date | null
      task_category_id: bigint | null
      repeating_task_id: bigint | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {taskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taskCreateManyAndReturnArgs>(args?: SelectSubset<T, taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {taskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends taskUpdateManyAndReturnArgs>(args: SelectSubset<T, taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
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
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repeating_task<T extends task$repeating_taskArgs<ExtArgs> = {}>(args?: Subset<T, task$repeating_taskArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    task_category<T extends task$task_categoryArgs<ExtArgs> = {}>(args?: Subset<T, task$task_categoryArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'BigInt'>
    readonly created_at: FieldRef<"task", 'DateTime'>
    readonly description: FieldRef<"task", 'String'>
    readonly completed: FieldRef<"task", 'Boolean'>
    readonly completed_at: FieldRef<"task", 'DateTime'>
    readonly title: FieldRef<"task", 'String'>
    readonly user_id: FieldRef<"task", 'String'>
    readonly priority_level: FieldRef<"task", 'Int'>
    readonly due_date: FieldRef<"task", 'DateTime'>
    readonly task_category_id: FieldRef<"task", 'BigInt'>
    readonly repeating_task_id: FieldRef<"task", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task createManyAndReturn
   */
  export type taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task updateManyAndReturn
   */
  export type taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.repeating_task
   */
  export type task$repeating_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    where?: repeating_taskWhereInput
  }

  /**
   * task.task_category
   */
  export type task$task_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    where?: task_categoryWhereInput
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model task_category
   */

  export type AggregateTask_category = {
    _count: Task_categoryCountAggregateOutputType | null
    _avg: Task_categoryAvgAggregateOutputType | null
    _sum: Task_categorySumAggregateOutputType | null
    _min: Task_categoryMinAggregateOutputType | null
    _max: Task_categoryMaxAggregateOutputType | null
  }

  export type Task_categoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Task_categorySumAggregateOutputType = {
    id: bigint | null
  }

  export type Task_categoryMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
  }

  export type Task_categoryMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
  }

  export type Task_categoryCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    _all: number
  }


  export type Task_categoryAvgAggregateInputType = {
    id?: true
  }

  export type Task_categorySumAggregateInputType = {
    id?: true
  }

  export type Task_categoryMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type Task_categoryMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
  }

  export type Task_categoryCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    _all?: true
  }

  export type Task_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_category to aggregate.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_categories
    **/
    _count?: true | Task_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Task_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Task_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_categoryMaxAggregateInputType
  }

  export type GetTask_categoryAggregateType<T extends Task_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_category[P]>
      : GetScalarType<T[P], AggregateTask_category[P]>
  }




  export type task_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_categoryWhereInput
    orderBy?: task_categoryOrderByWithAggregationInput | task_categoryOrderByWithAggregationInput[]
    by: Task_categoryScalarFieldEnum[] | Task_categoryScalarFieldEnum
    having?: task_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_categoryCountAggregateInputType | true
    _avg?: Task_categoryAvgAggregateInputType
    _sum?: Task_categorySumAggregateInputType
    _min?: Task_categoryMinAggregateInputType
    _max?: Task_categoryMaxAggregateInputType
  }

  export type Task_categoryGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    _count: Task_categoryCountAggregateOutputType | null
    _avg: Task_categoryAvgAggregateOutputType | null
    _sum: Task_categorySumAggregateOutputType | null
    _min: Task_categoryMinAggregateOutputType | null
    _max: Task_categoryMaxAggregateOutputType | null
  }

  type GetTask_categoryGroupByPayload<T extends task_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Task_categoryGroupByOutputType[P]>
        }
      >
    >


  export type task_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    task?: boolean | task_category$taskArgs<ExtArgs>
    _count?: boolean | Task_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_category"]>

  export type task_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["task_category"]>

  export type task_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["task_category"]>

  export type task_categorySelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
  }

  export type task_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name", ExtArgs["result"]["task_category"]>
  export type task_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | task_category$taskArgs<ExtArgs>
    _count?: boolean | Task_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type task_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type task_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $task_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_category"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
    }, ExtArgs["result"]["task_category"]>
    composites: {}
  }

  type task_categoryGetPayload<S extends boolean | null | undefined | task_categoryDefaultArgs> = $Result.GetResult<Prisma.$task_categoryPayload, S>

  type task_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_categoryCountAggregateInputType | true
    }

  export interface task_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_category'], meta: { name: 'task_category' } }
    /**
     * Find zero or one Task_category that matches the filter.
     * @param {task_categoryFindUniqueArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_categoryFindUniqueArgs>(args: SelectSubset<T, task_categoryFindUniqueArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_categoryFindUniqueOrThrowArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, task_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryFindFirstArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_categoryFindFirstArgs>(args?: SelectSubset<T, task_categoryFindFirstArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryFindFirstOrThrowArgs} args - Arguments to find a Task_category
     * @example
     * // Get one Task_category
     * const task_category = await prisma.task_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, task_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_categories
     * const task_categories = await prisma.task_category.findMany()
     * 
     * // Get first 10 Task_categories
     * const task_categories = await prisma.task_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_categoryWithIdOnly = await prisma.task_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_categoryFindManyArgs>(args?: SelectSubset<T, task_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_category.
     * @param {task_categoryCreateArgs} args - Arguments to create a Task_category.
     * @example
     * // Create one Task_category
     * const Task_category = await prisma.task_category.create({
     *   data: {
     *     // ... data to create a Task_category
     *   }
     * })
     * 
     */
    create<T extends task_categoryCreateArgs>(args: SelectSubset<T, task_categoryCreateArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_categories.
     * @param {task_categoryCreateManyArgs} args - Arguments to create many Task_categories.
     * @example
     * // Create many Task_categories
     * const task_category = await prisma.task_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_categoryCreateManyArgs>(args?: SelectSubset<T, task_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_categories and returns the data saved in the database.
     * @param {task_categoryCreateManyAndReturnArgs} args - Arguments to create many Task_categories.
     * @example
     * // Create many Task_categories
     * const task_category = await prisma.task_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_categories and only return the `id`
     * const task_categoryWithIdOnly = await prisma.task_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, task_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_category.
     * @param {task_categoryDeleteArgs} args - Arguments to delete one Task_category.
     * @example
     * // Delete one Task_category
     * const Task_category = await prisma.task_category.delete({
     *   where: {
     *     // ... filter to delete one Task_category
     *   }
     * })
     * 
     */
    delete<T extends task_categoryDeleteArgs>(args: SelectSubset<T, task_categoryDeleteArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_category.
     * @param {task_categoryUpdateArgs} args - Arguments to update one Task_category.
     * @example
     * // Update one Task_category
     * const task_category = await prisma.task_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_categoryUpdateArgs>(args: SelectSubset<T, task_categoryUpdateArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_categories.
     * @param {task_categoryDeleteManyArgs} args - Arguments to filter Task_categories to delete.
     * @example
     * // Delete a few Task_categories
     * const { count } = await prisma.task_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_categoryDeleteManyArgs>(args?: SelectSubset<T, task_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_categories
     * const task_category = await prisma.task_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_categoryUpdateManyArgs>(args: SelectSubset<T, task_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_categories and returns the data updated in the database.
     * @param {task_categoryUpdateManyAndReturnArgs} args - Arguments to update many Task_categories.
     * @example
     * // Update many Task_categories
     * const task_category = await prisma.task_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_categories and only return the `id`
     * const task_categoryWithIdOnly = await prisma.task_category.updateManyAndReturn({
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
    updateManyAndReturn<T extends task_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, task_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_category.
     * @param {task_categoryUpsertArgs} args - Arguments to update or create a Task_category.
     * @example
     * // Update or create a Task_category
     * const task_category = await prisma.task_category.upsert({
     *   create: {
     *     // ... data to create a Task_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_category we want to update
     *   }
     * })
     */
    upsert<T extends task_categoryUpsertArgs>(args: SelectSubset<T, task_categoryUpsertArgs<ExtArgs>>): Prisma__task_categoryClient<$Result.GetResult<Prisma.$task_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryCountArgs} args - Arguments to filter Task_categories to count.
     * @example
     * // Count the number of Task_categories
     * const count = await prisma.task_category.count({
     *   where: {
     *     // ... the filter for the Task_categories we want to count
     *   }
     * })
    **/
    count<T extends task_categoryCountArgs>(
      args?: Subset<T, task_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Task_categoryAggregateArgs>(args: Subset<T, Task_categoryAggregateArgs>): Prisma.PrismaPromise<GetTask_categoryAggregateType<T>>

    /**
     * Group by Task_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_categoryGroupByArgs} args - Group by arguments.
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
      T extends task_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_categoryGroupByArgs['orderBy'] }
        : { orderBy?: task_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, task_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_category model
   */
  readonly fields: task_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends task_category$taskArgs<ExtArgs> = {}>(args?: Subset<T, task_category$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the task_category model
   */
  interface task_categoryFieldRefs {
    readonly id: FieldRef<"task_category", 'BigInt'>
    readonly created_at: FieldRef<"task_category", 'DateTime'>
    readonly name: FieldRef<"task_category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * task_category findUnique
   */
  export type task_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category findUniqueOrThrow
   */
  export type task_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category findFirst
   */
  export type task_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_categories.
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_categories.
     */
    distinct?: Task_categoryScalarFieldEnum | Task_categoryScalarFieldEnum[]
  }

  /**
   * task_category findFirstOrThrow
   */
  export type task_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_category to fetch.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_categories.
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_categories.
     */
    distinct?: Task_categoryScalarFieldEnum | Task_categoryScalarFieldEnum[]
  }

  /**
   * task_category findMany
   */
  export type task_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter, which task_categories to fetch.
     */
    where?: task_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_categories to fetch.
     */
    orderBy?: task_categoryOrderByWithRelationInput | task_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_categories.
     */
    cursor?: task_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_categories.
     */
    distinct?: Task_categoryScalarFieldEnum | Task_categoryScalarFieldEnum[]
  }

  /**
   * task_category create
   */
  export type task_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a task_category.
     */
    data?: XOR<task_categoryCreateInput, task_categoryUncheckedCreateInput>
  }

  /**
   * task_category createMany
   */
  export type task_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_categories.
     */
    data: task_categoryCreateManyInput | task_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_category createManyAndReturn
   */
  export type task_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many task_categories.
     */
    data: task_categoryCreateManyInput | task_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_category update
   */
  export type task_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a task_category.
     */
    data: XOR<task_categoryUpdateInput, task_categoryUncheckedUpdateInput>
    /**
     * Choose, which task_category to update.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category updateMany
   */
  export type task_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_categories.
     */
    data: XOR<task_categoryUpdateManyMutationInput, task_categoryUncheckedUpdateManyInput>
    /**
     * Filter which task_categories to update
     */
    where?: task_categoryWhereInput
    /**
     * Limit how many task_categories to update.
     */
    limit?: number
  }

  /**
   * task_category updateManyAndReturn
   */
  export type task_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * The data used to update task_categories.
     */
    data: XOR<task_categoryUpdateManyMutationInput, task_categoryUncheckedUpdateManyInput>
    /**
     * Filter which task_categories to update
     */
    where?: task_categoryWhereInput
    /**
     * Limit how many task_categories to update.
     */
    limit?: number
  }

  /**
   * task_category upsert
   */
  export type task_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the task_category to update in case it exists.
     */
    where: task_categoryWhereUniqueInput
    /**
     * In case the task_category found by the `where` argument doesn't exist, create a new task_category with this data.
     */
    create: XOR<task_categoryCreateInput, task_categoryUncheckedCreateInput>
    /**
     * In case the task_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_categoryUpdateInput, task_categoryUncheckedUpdateInput>
  }

  /**
   * task_category delete
   */
  export type task_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
    /**
     * Filter which task_category to delete.
     */
    where: task_categoryWhereUniqueInput
  }

  /**
   * task_category deleteMany
   */
  export type task_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_categories to delete
     */
    where?: task_categoryWhereInput
    /**
     * Limit how many task_categories to delete.
     */
    limit?: number
  }

  /**
   * task_category.task
   */
  export type task_category$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task_category without action
   */
  export type task_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_category
     */
    select?: task_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_category
     */
    omit?: task_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_categoryInclude<ExtArgs> | null
  }


  /**
   * Model repeating_task
   */

  export type AggregateRepeating_task = {
    _count: Repeating_taskCountAggregateOutputType | null
    _avg: Repeating_taskAvgAggregateOutputType | null
    _sum: Repeating_taskSumAggregateOutputType | null
    _min: Repeating_taskMinAggregateOutputType | null
    _max: Repeating_taskMaxAggregateOutputType | null
  }

  export type Repeating_taskAvgAggregateOutputType = {
    id: number | null
  }

  export type Repeating_taskSumAggregateOutputType = {
    id: bigint | null
  }

  export type Repeating_taskMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
  }

  export type Repeating_taskMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
  }

  export type Repeating_taskCountAggregateOutputType = {
    id: number
    created_at: number
    _all: number
  }


  export type Repeating_taskAvgAggregateInputType = {
    id?: true
  }

  export type Repeating_taskSumAggregateInputType = {
    id?: true
  }

  export type Repeating_taskMinAggregateInputType = {
    id?: true
    created_at?: true
  }

  export type Repeating_taskMaxAggregateInputType = {
    id?: true
    created_at?: true
  }

  export type Repeating_taskCountAggregateInputType = {
    id?: true
    created_at?: true
    _all?: true
  }

  export type Repeating_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repeating_task to aggregate.
     */
    where?: repeating_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repeating_tasks to fetch.
     */
    orderBy?: repeating_taskOrderByWithRelationInput | repeating_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: repeating_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repeating_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repeating_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned repeating_tasks
    **/
    _count?: true | Repeating_taskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Repeating_taskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Repeating_taskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Repeating_taskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Repeating_taskMaxAggregateInputType
  }

  export type GetRepeating_taskAggregateType<T extends Repeating_taskAggregateArgs> = {
        [P in keyof T & keyof AggregateRepeating_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepeating_task[P]>
      : GetScalarType<T[P], AggregateRepeating_task[P]>
  }




  export type repeating_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: repeating_taskWhereInput
    orderBy?: repeating_taskOrderByWithAggregationInput | repeating_taskOrderByWithAggregationInput[]
    by: Repeating_taskScalarFieldEnum[] | Repeating_taskScalarFieldEnum
    having?: repeating_taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Repeating_taskCountAggregateInputType | true
    _avg?: Repeating_taskAvgAggregateInputType
    _sum?: Repeating_taskSumAggregateInputType
    _min?: Repeating_taskMinAggregateInputType
    _max?: Repeating_taskMaxAggregateInputType
  }

  export type Repeating_taskGroupByOutputType = {
    id: bigint
    created_at: Date
    _count: Repeating_taskCountAggregateOutputType | null
    _avg: Repeating_taskAvgAggregateOutputType | null
    _sum: Repeating_taskSumAggregateOutputType | null
    _min: Repeating_taskMinAggregateOutputType | null
    _max: Repeating_taskMaxAggregateOutputType | null
  }

  type GetRepeating_taskGroupByPayload<T extends repeating_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Repeating_taskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Repeating_taskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Repeating_taskGroupByOutputType[P]>
            : GetScalarType<T[P], Repeating_taskGroupByOutputType[P]>
        }
      >
    >


  export type repeating_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    task?: boolean | repeating_task$taskArgs<ExtArgs>
    _count?: boolean | Repeating_taskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repeating_task"]>

  export type repeating_taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["repeating_task"]>

  export type repeating_taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["repeating_task"]>

  export type repeating_taskSelectScalar = {
    id?: boolean
    created_at?: boolean
  }

  export type repeating_taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at", ExtArgs["result"]["repeating_task"]>
  export type repeating_taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | repeating_task$taskArgs<ExtArgs>
    _count?: boolean | Repeating_taskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type repeating_taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type repeating_taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $repeating_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "repeating_task"
    objects: {
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
    }, ExtArgs["result"]["repeating_task"]>
    composites: {}
  }

  type repeating_taskGetPayload<S extends boolean | null | undefined | repeating_taskDefaultArgs> = $Result.GetResult<Prisma.$repeating_taskPayload, S>

  type repeating_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<repeating_taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Repeating_taskCountAggregateInputType | true
    }

  export interface repeating_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['repeating_task'], meta: { name: 'repeating_task' } }
    /**
     * Find zero or one Repeating_task that matches the filter.
     * @param {repeating_taskFindUniqueArgs} args - Arguments to find a Repeating_task
     * @example
     * // Get one Repeating_task
     * const repeating_task = await prisma.repeating_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends repeating_taskFindUniqueArgs>(args: SelectSubset<T, repeating_taskFindUniqueArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repeating_task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {repeating_taskFindUniqueOrThrowArgs} args - Arguments to find a Repeating_task
     * @example
     * // Get one Repeating_task
     * const repeating_task = await prisma.repeating_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends repeating_taskFindUniqueOrThrowArgs>(args: SelectSubset<T, repeating_taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repeating_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repeating_taskFindFirstArgs} args - Arguments to find a Repeating_task
     * @example
     * // Get one Repeating_task
     * const repeating_task = await prisma.repeating_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends repeating_taskFindFirstArgs>(args?: SelectSubset<T, repeating_taskFindFirstArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repeating_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repeating_taskFindFirstOrThrowArgs} args - Arguments to find a Repeating_task
     * @example
     * // Get one Repeating_task
     * const repeating_task = await prisma.repeating_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends repeating_taskFindFirstOrThrowArgs>(args?: SelectSubset<T, repeating_taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repeating_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repeating_taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repeating_tasks
     * const repeating_tasks = await prisma.repeating_task.findMany()
     * 
     * // Get first 10 Repeating_tasks
     * const repeating_tasks = await prisma.repeating_task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repeating_taskWithIdOnly = await prisma.repeating_task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends repeating_taskFindManyArgs>(args?: SelectSubset<T, repeating_taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repeating_task.
     * @param {repeating_taskCreateArgs} args - Arguments to create a Repeating_task.
     * @example
     * // Create one Repeating_task
     * const Repeating_task = await prisma.repeating_task.create({
     *   data: {
     *     // ... data to create a Repeating_task
     *   }
     * })
     * 
     */
    create<T extends repeating_taskCreateArgs>(args: SelectSubset<T, repeating_taskCreateArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repeating_tasks.
     * @param {repeating_taskCreateManyArgs} args - Arguments to create many Repeating_tasks.
     * @example
     * // Create many Repeating_tasks
     * const repeating_task = await prisma.repeating_task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends repeating_taskCreateManyArgs>(args?: SelectSubset<T, repeating_taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repeating_tasks and returns the data saved in the database.
     * @param {repeating_taskCreateManyAndReturnArgs} args - Arguments to create many Repeating_tasks.
     * @example
     * // Create many Repeating_tasks
     * const repeating_task = await prisma.repeating_task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repeating_tasks and only return the `id`
     * const repeating_taskWithIdOnly = await prisma.repeating_task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends repeating_taskCreateManyAndReturnArgs>(args?: SelectSubset<T, repeating_taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repeating_task.
     * @param {repeating_taskDeleteArgs} args - Arguments to delete one Repeating_task.
     * @example
     * // Delete one Repeating_task
     * const Repeating_task = await prisma.repeating_task.delete({
     *   where: {
     *     // ... filter to delete one Repeating_task
     *   }
     * })
     * 
     */
    delete<T extends repeating_taskDeleteArgs>(args: SelectSubset<T, repeating_taskDeleteArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repeating_task.
     * @param {repeating_taskUpdateArgs} args - Arguments to update one Repeating_task.
     * @example
     * // Update one Repeating_task
     * const repeating_task = await prisma.repeating_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends repeating_taskUpdateArgs>(args: SelectSubset<T, repeating_taskUpdateArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repeating_tasks.
     * @param {repeating_taskDeleteManyArgs} args - Arguments to filter Repeating_tasks to delete.
     * @example
     * // Delete a few Repeating_tasks
     * const { count } = await prisma.repeating_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends repeating_taskDeleteManyArgs>(args?: SelectSubset<T, repeating_taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repeating_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repeating_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repeating_tasks
     * const repeating_task = await prisma.repeating_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends repeating_taskUpdateManyArgs>(args: SelectSubset<T, repeating_taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repeating_tasks and returns the data updated in the database.
     * @param {repeating_taskUpdateManyAndReturnArgs} args - Arguments to update many Repeating_tasks.
     * @example
     * // Update many Repeating_tasks
     * const repeating_task = await prisma.repeating_task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repeating_tasks and only return the `id`
     * const repeating_taskWithIdOnly = await prisma.repeating_task.updateManyAndReturn({
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
    updateManyAndReturn<T extends repeating_taskUpdateManyAndReturnArgs>(args: SelectSubset<T, repeating_taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repeating_task.
     * @param {repeating_taskUpsertArgs} args - Arguments to update or create a Repeating_task.
     * @example
     * // Update or create a Repeating_task
     * const repeating_task = await prisma.repeating_task.upsert({
     *   create: {
     *     // ... data to create a Repeating_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repeating_task we want to update
     *   }
     * })
     */
    upsert<T extends repeating_taskUpsertArgs>(args: SelectSubset<T, repeating_taskUpsertArgs<ExtArgs>>): Prisma__repeating_taskClient<$Result.GetResult<Prisma.$repeating_taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repeating_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repeating_taskCountArgs} args - Arguments to filter Repeating_tasks to count.
     * @example
     * // Count the number of Repeating_tasks
     * const count = await prisma.repeating_task.count({
     *   where: {
     *     // ... the filter for the Repeating_tasks we want to count
     *   }
     * })
    **/
    count<T extends repeating_taskCountArgs>(
      args?: Subset<T, repeating_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Repeating_taskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repeating_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Repeating_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Repeating_taskAggregateArgs>(args: Subset<T, Repeating_taskAggregateArgs>): Prisma.PrismaPromise<GetRepeating_taskAggregateType<T>>

    /**
     * Group by Repeating_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repeating_taskGroupByArgs} args - Group by arguments.
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
      T extends repeating_taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: repeating_taskGroupByArgs['orderBy'] }
        : { orderBy?: repeating_taskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, repeating_taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepeating_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the repeating_task model
   */
  readonly fields: repeating_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for repeating_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__repeating_taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends repeating_task$taskArgs<ExtArgs> = {}>(args?: Subset<T, repeating_task$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the repeating_task model
   */
  interface repeating_taskFieldRefs {
    readonly id: FieldRef<"repeating_task", 'BigInt'>
    readonly created_at: FieldRef<"repeating_task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * repeating_task findUnique
   */
  export type repeating_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * Filter, which repeating_task to fetch.
     */
    where: repeating_taskWhereUniqueInput
  }

  /**
   * repeating_task findUniqueOrThrow
   */
  export type repeating_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * Filter, which repeating_task to fetch.
     */
    where: repeating_taskWhereUniqueInput
  }

  /**
   * repeating_task findFirst
   */
  export type repeating_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * Filter, which repeating_task to fetch.
     */
    where?: repeating_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repeating_tasks to fetch.
     */
    orderBy?: repeating_taskOrderByWithRelationInput | repeating_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repeating_tasks.
     */
    cursor?: repeating_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repeating_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repeating_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repeating_tasks.
     */
    distinct?: Repeating_taskScalarFieldEnum | Repeating_taskScalarFieldEnum[]
  }

  /**
   * repeating_task findFirstOrThrow
   */
  export type repeating_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * Filter, which repeating_task to fetch.
     */
    where?: repeating_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repeating_tasks to fetch.
     */
    orderBy?: repeating_taskOrderByWithRelationInput | repeating_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for repeating_tasks.
     */
    cursor?: repeating_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repeating_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repeating_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repeating_tasks.
     */
    distinct?: Repeating_taskScalarFieldEnum | Repeating_taskScalarFieldEnum[]
  }

  /**
   * repeating_task findMany
   */
  export type repeating_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * Filter, which repeating_tasks to fetch.
     */
    where?: repeating_taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of repeating_tasks to fetch.
     */
    orderBy?: repeating_taskOrderByWithRelationInput | repeating_taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing repeating_tasks.
     */
    cursor?: repeating_taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` repeating_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` repeating_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of repeating_tasks.
     */
    distinct?: Repeating_taskScalarFieldEnum | Repeating_taskScalarFieldEnum[]
  }

  /**
   * repeating_task create
   */
  export type repeating_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * The data needed to create a repeating_task.
     */
    data?: XOR<repeating_taskCreateInput, repeating_taskUncheckedCreateInput>
  }

  /**
   * repeating_task createMany
   */
  export type repeating_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many repeating_tasks.
     */
    data: repeating_taskCreateManyInput | repeating_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * repeating_task createManyAndReturn
   */
  export type repeating_taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * The data used to create many repeating_tasks.
     */
    data: repeating_taskCreateManyInput | repeating_taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * repeating_task update
   */
  export type repeating_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * The data needed to update a repeating_task.
     */
    data: XOR<repeating_taskUpdateInput, repeating_taskUncheckedUpdateInput>
    /**
     * Choose, which repeating_task to update.
     */
    where: repeating_taskWhereUniqueInput
  }

  /**
   * repeating_task updateMany
   */
  export type repeating_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update repeating_tasks.
     */
    data: XOR<repeating_taskUpdateManyMutationInput, repeating_taskUncheckedUpdateManyInput>
    /**
     * Filter which repeating_tasks to update
     */
    where?: repeating_taskWhereInput
    /**
     * Limit how many repeating_tasks to update.
     */
    limit?: number
  }

  /**
   * repeating_task updateManyAndReturn
   */
  export type repeating_taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * The data used to update repeating_tasks.
     */
    data: XOR<repeating_taskUpdateManyMutationInput, repeating_taskUncheckedUpdateManyInput>
    /**
     * Filter which repeating_tasks to update
     */
    where?: repeating_taskWhereInput
    /**
     * Limit how many repeating_tasks to update.
     */
    limit?: number
  }

  /**
   * repeating_task upsert
   */
  export type repeating_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * The filter to search for the repeating_task to update in case it exists.
     */
    where: repeating_taskWhereUniqueInput
    /**
     * In case the repeating_task found by the `where` argument doesn't exist, create a new repeating_task with this data.
     */
    create: XOR<repeating_taskCreateInput, repeating_taskUncheckedCreateInput>
    /**
     * In case the repeating_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<repeating_taskUpdateInput, repeating_taskUncheckedUpdateInput>
  }

  /**
   * repeating_task delete
   */
  export type repeating_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
    /**
     * Filter which repeating_task to delete.
     */
    where: repeating_taskWhereUniqueInput
  }

  /**
   * repeating_task deleteMany
   */
  export type repeating_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which repeating_tasks to delete
     */
    where?: repeating_taskWhereInput
    /**
     * Limit how many repeating_tasks to delete.
     */
    limit?: number
  }

  /**
   * repeating_task.task
   */
  export type repeating_task$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * repeating_task without action
   */
  export type repeating_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the repeating_task
     */
    select?: repeating_taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the repeating_task
     */
    omit?: repeating_taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: repeating_taskInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    created_at: 'created_at',
    email: 'email',
    id: 'id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    description: 'description',
    completed: 'completed',
    completed_at: 'completed_at',
    title: 'title',
    user_id: 'user_id',
    priority_level: 'priority_level',
    due_date: 'due_date',
    task_category_id: 'task_category_id',
    repeating_task_id: 'repeating_task_id'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const Task_categoryScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name'
  };

  export type Task_categoryScalarFieldEnum = (typeof Task_categoryScalarFieldEnum)[keyof typeof Task_categoryScalarFieldEnum]


  export const Repeating_taskScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at'
  };

  export type Repeating_taskScalarFieldEnum = (typeof Repeating_taskScalarFieldEnum)[keyof typeof Repeating_taskScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
    email?: StringFilter<"users"> | string
    id?: UuidFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email" | "id">

  export type usersOrderByWithAggregationInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    email?: StringWithAggregatesFilter<"users"> | string
    id?: UuidWithAggregatesFilter<"users"> | string
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: BigIntFilter<"task"> | bigint | number
    created_at?: DateTimeFilter<"task"> | Date | string
    description?: StringNullableFilter<"task"> | string | null
    completed?: BoolFilter<"task"> | boolean
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    title?: StringNullableFilter<"task"> | string | null
    user_id?: UuidFilter<"task"> | string
    priority_level?: IntFilter<"task"> | number
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_task_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_task?: XOR<Repeating_taskNullableScalarRelationFilter, repeating_taskWhereInput> | null
    task_category?: XOR<Task_categoryNullableScalarRelationFilter, task_categoryWhereInput> | null
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    user_id?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrderInput | SortOrder
    task_category_id?: SortOrderInput | SortOrder
    repeating_task_id?: SortOrderInput | SortOrder
    repeating_task?: repeating_taskOrderByWithRelationInput
    task_category?: task_categoryOrderByWithRelationInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    created_at?: DateTimeFilter<"task"> | Date | string
    description?: StringNullableFilter<"task"> | string | null
    completed?: BoolFilter<"task"> | boolean
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    title?: StringNullableFilter<"task"> | string | null
    user_id?: UuidFilter<"task"> | string
    priority_level?: IntFilter<"task"> | number
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_task_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_task?: XOR<Repeating_taskNullableScalarRelationFilter, repeating_taskWhereInput> | null
    task_category?: XOR<Task_categoryNullableScalarRelationFilter, task_categoryWhereInput> | null
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    completed?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    user_id?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrderInput | SortOrder
    task_category_id?: SortOrderInput | SortOrder
    repeating_task_id?: SortOrderInput | SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"task"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"task"> | Date | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    completed?: BoolWithAggregatesFilter<"task"> | boolean
    completed_at?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    title?: StringNullableWithAggregatesFilter<"task"> | string | null
    user_id?: UuidWithAggregatesFilter<"task"> | string
    priority_level?: IntWithAggregatesFilter<"task"> | number
    due_date?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableWithAggregatesFilter<"task"> | bigint | number | null
    repeating_task_id?: BigIntNullableWithAggregatesFilter<"task"> | bigint | number | null
  }

  export type task_categoryWhereInput = {
    AND?: task_categoryWhereInput | task_categoryWhereInput[]
    OR?: task_categoryWhereInput[]
    NOT?: task_categoryWhereInput | task_categoryWhereInput[]
    id?: BigIntFilter<"task_category"> | bigint | number
    created_at?: DateTimeFilter<"task_category"> | Date | string
    name?: StringNullableFilter<"task_category"> | string | null
    task?: TaskListRelationFilter
  }

  export type task_categoryOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    task?: taskOrderByRelationAggregateInput
  }

  export type task_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: task_categoryWhereInput | task_categoryWhereInput[]
    OR?: task_categoryWhereInput[]
    NOT?: task_categoryWhereInput | task_categoryWhereInput[]
    created_at?: DateTimeFilter<"task_category"> | Date | string
    name?: StringNullableFilter<"task_category"> | string | null
    task?: TaskListRelationFilter
  }, "id">

  export type task_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: task_categoryCountOrderByAggregateInput
    _avg?: task_categoryAvgOrderByAggregateInput
    _max?: task_categoryMaxOrderByAggregateInput
    _min?: task_categoryMinOrderByAggregateInput
    _sum?: task_categorySumOrderByAggregateInput
  }

  export type task_categoryScalarWhereWithAggregatesInput = {
    AND?: task_categoryScalarWhereWithAggregatesInput | task_categoryScalarWhereWithAggregatesInput[]
    OR?: task_categoryScalarWhereWithAggregatesInput[]
    NOT?: task_categoryScalarWhereWithAggregatesInput | task_categoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"task_category"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"task_category"> | Date | string
    name?: StringNullableWithAggregatesFilter<"task_category"> | string | null
  }

  export type repeating_taskWhereInput = {
    AND?: repeating_taskWhereInput | repeating_taskWhereInput[]
    OR?: repeating_taskWhereInput[]
    NOT?: repeating_taskWhereInput | repeating_taskWhereInput[]
    id?: BigIntFilter<"repeating_task"> | bigint | number
    created_at?: DateTimeFilter<"repeating_task"> | Date | string
    task?: TaskListRelationFilter
  }

  export type repeating_taskOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    task?: taskOrderByRelationAggregateInput
  }

  export type repeating_taskWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: repeating_taskWhereInput | repeating_taskWhereInput[]
    OR?: repeating_taskWhereInput[]
    NOT?: repeating_taskWhereInput | repeating_taskWhereInput[]
    created_at?: DateTimeFilter<"repeating_task"> | Date | string
    task?: TaskListRelationFilter
  }, "id">

  export type repeating_taskOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    _count?: repeating_taskCountOrderByAggregateInput
    _avg?: repeating_taskAvgOrderByAggregateInput
    _max?: repeating_taskMaxOrderByAggregateInput
    _min?: repeating_taskMinOrderByAggregateInput
    _sum?: repeating_taskSumOrderByAggregateInput
  }

  export type repeating_taskScalarWhereWithAggregatesInput = {
    AND?: repeating_taskScalarWhereWithAggregatesInput | repeating_taskScalarWhereWithAggregatesInput[]
    OR?: repeating_taskScalarWhereWithAggregatesInput[]
    NOT?: repeating_taskScalarWhereWithAggregatesInput | repeating_taskScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"repeating_task"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"repeating_task"> | Date | string
  }

  export type usersCreateInput = {
    created_at?: Date | string
    email: string
    id: string
  }

  export type usersUncheckedCreateInput = {
    created_at?: Date | string
    email: string
    id: string
  }

  export type usersUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    created_at?: Date | string
    email: string
    id: string
  }

  export type usersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type taskCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    repeating_task?: repeating_taskCreateNestedOneWithoutTaskInput
    task_category?: task_categoryCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
    repeating_task_id?: bigint | number | null
  }

  export type taskUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_task?: repeating_taskUpdateOneWithoutTaskNestedInput
    task_category?: task_categoryUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    repeating_task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type taskCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
    repeating_task_id?: bigint | number | null
  }

  export type taskUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    repeating_task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type task_categoryCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    task?: taskCreateNestedManyWithoutTask_categoryInput
  }

  export type task_categoryUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    task?: taskUncheckedCreateNestedManyWithoutTask_categoryInput
  }

  export type task_categoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: taskUpdateManyWithoutTask_categoryNestedInput
  }

  export type task_categoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: taskUncheckedUpdateManyWithoutTask_categoryNestedInput
  }

  export type task_categoryCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
  }

  export type task_categoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type task_categoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type repeating_taskCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    task?: taskCreateNestedManyWithoutRepeating_taskInput
  }

  export type repeating_taskUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    task?: taskUncheckedCreateNestedManyWithoutRepeating_taskInput
  }

  export type repeating_taskUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: taskUpdateManyWithoutRepeating_taskNestedInput
  }

  export type repeating_taskUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: taskUncheckedUpdateManyWithoutRepeating_taskNestedInput
  }

  export type repeating_taskCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
  }

  export type repeating_taskUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repeating_taskUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type usersCountOrderByAggregateInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    created_at?: SortOrder
    email?: SortOrder
    id?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Repeating_taskNullableScalarRelationFilter = {
    is?: repeating_taskWhereInput | null
    isNot?: repeating_taskWhereInput | null
  }

  export type Task_categoryNullableScalarRelationFilter = {
    is?: task_categoryWhereInput | null
    isNot?: task_categoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrder
    task_category_id?: SortOrder
    repeating_task_id?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    id?: SortOrder
    priority_level?: SortOrder
    task_category_id?: SortOrder
    repeating_task_id?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrder
    task_category_id?: SortOrder
    repeating_task_id?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
    priority_level?: SortOrder
    due_date?: SortOrder
    task_category_id?: SortOrder
    repeating_task_id?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    id?: SortOrder
    priority_level?: SortOrder
    task_category_id?: SortOrder
    repeating_task_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type task_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type task_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type task_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type task_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
  }

  export type task_categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type repeating_taskCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
  }

  export type repeating_taskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type repeating_taskMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
  }

  export type repeating_taskMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
  }

  export type repeating_taskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type repeating_taskCreateNestedOneWithoutTaskInput = {
    create?: XOR<repeating_taskCreateWithoutTaskInput, repeating_taskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: repeating_taskCreateOrConnectWithoutTaskInput
    connect?: repeating_taskWhereUniqueInput
  }

  export type task_categoryCreateNestedOneWithoutTaskInput = {
    create?: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
    connectOrCreate?: task_categoryCreateOrConnectWithoutTaskInput
    connect?: task_categoryWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type repeating_taskUpdateOneWithoutTaskNestedInput = {
    create?: XOR<repeating_taskCreateWithoutTaskInput, repeating_taskUncheckedCreateWithoutTaskInput>
    connectOrCreate?: repeating_taskCreateOrConnectWithoutTaskInput
    upsert?: repeating_taskUpsertWithoutTaskInput
    disconnect?: repeating_taskWhereInput | boolean
    delete?: repeating_taskWhereInput | boolean
    connect?: repeating_taskWhereUniqueInput
    update?: XOR<XOR<repeating_taskUpdateToOneWithWhereWithoutTaskInput, repeating_taskUpdateWithoutTaskInput>, repeating_taskUncheckedUpdateWithoutTaskInput>
  }

  export type task_categoryUpdateOneWithoutTaskNestedInput = {
    create?: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
    connectOrCreate?: task_categoryCreateOrConnectWithoutTaskInput
    upsert?: task_categoryUpsertWithoutTaskInput
    disconnect?: task_categoryWhereInput | boolean
    delete?: task_categoryWhereInput | boolean
    connect?: task_categoryWhereUniqueInput
    update?: XOR<XOR<task_categoryUpdateToOneWithWhereWithoutTaskInput, task_categoryUpdateWithoutTaskInput>, task_categoryUncheckedUpdateWithoutTaskInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type taskCreateNestedManyWithoutTask_categoryInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutTask_categoryInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUpdateManyWithoutTask_categoryNestedInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTask_categoryInput | taskUpsertWithWhereUniqueWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTask_categoryInput | taskUpdateWithWhereUniqueWithoutTask_categoryInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTask_categoryInput | taskUpdateManyWithWhereWithoutTask_categoryInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutTask_categoryNestedInput = {
    create?: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput> | taskCreateWithoutTask_categoryInput[] | taskUncheckedCreateWithoutTask_categoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutTask_categoryInput | taskCreateOrConnectWithoutTask_categoryInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutTask_categoryInput | taskUpsertWithWhereUniqueWithoutTask_categoryInput[]
    createMany?: taskCreateManyTask_categoryInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutTask_categoryInput | taskUpdateWithWhereUniqueWithoutTask_categoryInput[]
    updateMany?: taskUpdateManyWithWhereWithoutTask_categoryInput | taskUpdateManyWithWhereWithoutTask_categoryInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskCreateNestedManyWithoutRepeating_taskInput = {
    create?: XOR<taskCreateWithoutRepeating_taskInput, taskUncheckedCreateWithoutRepeating_taskInput> | taskCreateWithoutRepeating_taskInput[] | taskUncheckedCreateWithoutRepeating_taskInput[]
    connectOrCreate?: taskCreateOrConnectWithoutRepeating_taskInput | taskCreateOrConnectWithoutRepeating_taskInput[]
    createMany?: taskCreateManyRepeating_taskInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutRepeating_taskInput = {
    create?: XOR<taskCreateWithoutRepeating_taskInput, taskUncheckedCreateWithoutRepeating_taskInput> | taskCreateWithoutRepeating_taskInput[] | taskUncheckedCreateWithoutRepeating_taskInput[]
    connectOrCreate?: taskCreateOrConnectWithoutRepeating_taskInput | taskCreateOrConnectWithoutRepeating_taskInput[]
    createMany?: taskCreateManyRepeating_taskInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUpdateManyWithoutRepeating_taskNestedInput = {
    create?: XOR<taskCreateWithoutRepeating_taskInput, taskUncheckedCreateWithoutRepeating_taskInput> | taskCreateWithoutRepeating_taskInput[] | taskUncheckedCreateWithoutRepeating_taskInput[]
    connectOrCreate?: taskCreateOrConnectWithoutRepeating_taskInput | taskCreateOrConnectWithoutRepeating_taskInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutRepeating_taskInput | taskUpsertWithWhereUniqueWithoutRepeating_taskInput[]
    createMany?: taskCreateManyRepeating_taskInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutRepeating_taskInput | taskUpdateWithWhereUniqueWithoutRepeating_taskInput[]
    updateMany?: taskUpdateManyWithWhereWithoutRepeating_taskInput | taskUpdateManyWithWhereWithoutRepeating_taskInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutRepeating_taskNestedInput = {
    create?: XOR<taskCreateWithoutRepeating_taskInput, taskUncheckedCreateWithoutRepeating_taskInput> | taskCreateWithoutRepeating_taskInput[] | taskUncheckedCreateWithoutRepeating_taskInput[]
    connectOrCreate?: taskCreateOrConnectWithoutRepeating_taskInput | taskCreateOrConnectWithoutRepeating_taskInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutRepeating_taskInput | taskUpsertWithWhereUniqueWithoutRepeating_taskInput[]
    createMany?: taskCreateManyRepeating_taskInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutRepeating_taskInput | taskUpdateWithWhereUniqueWithoutRepeating_taskInput[]
    updateMany?: taskUpdateManyWithWhereWithoutRepeating_taskInput | taskUpdateManyWithWhereWithoutRepeating_taskInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type repeating_taskCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
  }

  export type repeating_taskUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
  }

  export type repeating_taskCreateOrConnectWithoutTaskInput = {
    where: repeating_taskWhereUniqueInput
    create: XOR<repeating_taskCreateWithoutTaskInput, repeating_taskUncheckedCreateWithoutTaskInput>
  }

  export type task_categoryCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
  }

  export type task_categoryUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
  }

  export type task_categoryCreateOrConnectWithoutTaskInput = {
    where: task_categoryWhereUniqueInput
    create: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
  }

  export type repeating_taskUpsertWithoutTaskInput = {
    update: XOR<repeating_taskUpdateWithoutTaskInput, repeating_taskUncheckedUpdateWithoutTaskInput>
    create: XOR<repeating_taskCreateWithoutTaskInput, repeating_taskUncheckedCreateWithoutTaskInput>
    where?: repeating_taskWhereInput
  }

  export type repeating_taskUpdateToOneWithWhereWithoutTaskInput = {
    where?: repeating_taskWhereInput
    data: XOR<repeating_taskUpdateWithoutTaskInput, repeating_taskUncheckedUpdateWithoutTaskInput>
  }

  export type repeating_taskUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type repeating_taskUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_categoryUpsertWithoutTaskInput = {
    update: XOR<task_categoryUpdateWithoutTaskInput, task_categoryUncheckedUpdateWithoutTaskInput>
    create: XOR<task_categoryCreateWithoutTaskInput, task_categoryUncheckedCreateWithoutTaskInput>
    where?: task_categoryWhereInput
  }

  export type task_categoryUpdateToOneWithWhereWithoutTaskInput = {
    where?: task_categoryWhereInput
    data: XOR<task_categoryUpdateWithoutTaskInput, task_categoryUncheckedUpdateWithoutTaskInput>
  }

  export type task_categoryUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type task_categoryUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type taskCreateWithoutTask_categoryInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    repeating_task?: repeating_taskCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutTask_categoryInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    repeating_task_id?: bigint | number | null
  }

  export type taskCreateOrConnectWithoutTask_categoryInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput>
  }

  export type taskCreateManyTask_categoryInputEnvelope = {
    data: taskCreateManyTask_categoryInput | taskCreateManyTask_categoryInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutTask_categoryInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutTask_categoryInput, taskUncheckedUpdateWithoutTask_categoryInput>
    create: XOR<taskCreateWithoutTask_categoryInput, taskUncheckedCreateWithoutTask_categoryInput>
  }

  export type taskUpdateWithWhereUniqueWithoutTask_categoryInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutTask_categoryInput, taskUncheckedUpdateWithoutTask_categoryInput>
  }

  export type taskUpdateManyWithWhereWithoutTask_categoryInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutTask_categoryInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: BigIntFilter<"task"> | bigint | number
    created_at?: DateTimeFilter<"task"> | Date | string
    description?: StringNullableFilter<"task"> | string | null
    completed?: BoolFilter<"task"> | boolean
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    title?: StringNullableFilter<"task"> | string | null
    user_id?: UuidFilter<"task"> | string
    priority_level?: IntFilter<"task"> | number
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    task_category_id?: BigIntNullableFilter<"task"> | bigint | number | null
    repeating_task_id?: BigIntNullableFilter<"task"> | bigint | number | null
  }

  export type taskCreateWithoutRepeating_taskInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    task_category?: task_categoryCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutRepeating_taskInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
  }

  export type taskCreateOrConnectWithoutRepeating_taskInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutRepeating_taskInput, taskUncheckedCreateWithoutRepeating_taskInput>
  }

  export type taskCreateManyRepeating_taskInputEnvelope = {
    data: taskCreateManyRepeating_taskInput | taskCreateManyRepeating_taskInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithWhereUniqueWithoutRepeating_taskInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutRepeating_taskInput, taskUncheckedUpdateWithoutRepeating_taskInput>
    create: XOR<taskCreateWithoutRepeating_taskInput, taskUncheckedCreateWithoutRepeating_taskInput>
  }

  export type taskUpdateWithWhereUniqueWithoutRepeating_taskInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutRepeating_taskInput, taskUncheckedUpdateWithoutRepeating_taskInput>
  }

  export type taskUpdateManyWithWhereWithoutRepeating_taskInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutRepeating_taskInput>
  }

  export type taskCreateManyTask_categoryInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    repeating_task_id?: bigint | number | null
  }

  export type taskUpdateWithoutTask_categoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_task?: repeating_taskUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutTask_categoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type taskUncheckedUpdateManyWithoutTask_categoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeating_task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type taskCreateManyRepeating_taskInput = {
    id?: bigint | number
    created_at?: Date | string
    description?: string | null
    completed?: boolean
    completed_at?: Date | string | null
    title?: string | null
    user_id: string
    priority_level?: number
    due_date?: Date | string | null
    task_category_id?: bigint | number | null
  }

  export type taskUpdateWithoutRepeating_taskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category?: task_categoryUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutRepeating_taskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type taskUncheckedUpdateManyWithoutRepeating_taskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    priority_level?: IntFieldUpdateOperationsInput | number
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_category_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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