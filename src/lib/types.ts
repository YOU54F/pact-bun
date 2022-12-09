// deno-lint-ignore-file
import { Pointer, FnPointer, StructPointer } from "./safe-ffi";
import { FFIType } from "ffi";

export namespace PactFfi {
  /** /usr/lib/clang/14.0.6/include/stdarg.h#L14 */
  export type va_list = bigint;

  /** /usr/lib/clang/14.0.6/include/stdarg.h#L32 */
  export type __gnuc_va_list = bigint;

  /** .bits/types.h#L31 */
  export type __u_char = FFIType.u8;

  /** .bits/types.h#L32 */
  export type __u_short = FFIType.u16;

  /** .bits/types.h#L33 */
  export type __u_int = FFIType.u32;

  /** .bits/types.h#L34 */
  export type __u_long = FFIType.u64;

  /** .bits/types.h#L37 */
  export type __int8_t = FFIType.i8;

  /** .bits/types.h#L38 */
  export type __uint8_t = FFIType.u8;

  /** .bits/types.h#L39 */
  export type __int16_t = FFIType.i16;

  /** .bits/types.h#L40 */
  export type __uint16_t = FFIType.u16;

  /** .bits/types.h#L41 */
  export type __int32_t = FFIType.i32;

  /** .bits/types.h#L42 */
  export type __uint32_t = FFIType.u32;

  /** .bits/types.h#L44 */
  export type __int64_t = FFIType.i64;

  /** .bits/types.h#L45 */
  export type __uint64_t = FFIType.u64;

  /** .bits/types.h#L52 */
  export type __int_least8_t = PactFfi.__int8_t;

  /** .bits/types.h#L53 */
  export type __uint_least8_t = PactFfi.__uint8_t;

  /** .bits/types.h#L54 */
  export type __int_least16_t = PactFfi.__int16_t;

  /** .bits/types.h#L55 */
  export type __uint_least16_t = PactFfi.__uint16_t;

  /** .bits/types.h#L56 */
  export type __int_least32_t = PactFfi.__int32_t;

  /** .bits/types.h#L57 */
  export type __uint_least32_t = PactFfi.__uint32_t;

  /** .bits/types.h#L58 */
  export type __int_least64_t = PactFfi.__int64_t;

  /** .bits/types.h#L59 */
  export type __uint_least64_t = PactFfi.__uint64_t;

  /** .bits/types.h#L63 */
  export type __quad_t = FFIType.i64;

  /** .bits/types.h#L64 */
  export type __u_quad_t = FFIType.u64;

  /** .bits/types.h#L72 */
  export type __intmax_t = FFIType.i64;

  /** .bits/types.h#L73 */
  export type __uintmax_t = FFIType.u64;

  /** .bits/types.h#L145 */
  export type __dev_t = FFIType.u64;

  /** .bits/types.h#L146 */
  export type __uid_t = FFIType.u32;

  /** .bits/types.h#L147 */
  export type __gid_t = FFIType.u32;

  /** .bits/types.h#L148 */
  export type __ino_t = FFIType.u64;

  /** .bits/types.h#L149 */
  export type __ino64_t = FFIType.u64;

  /** .bits/types.h#L150 */
  export type __mode_t = FFIType.u32;

  /** .bits/types.h#L151 */
  export type __nlink_t = FFIType.u64;

  /** .bits/types.h#L152 */
  export type __off_t = FFIType.i64;

  /** .bits/types.h#L153 */
  export type __off64_t = FFIType.i64;

  /** .bits/types.h#L154 */
  export type __pid_t = FFIType.i32;

  /** .bits/types.h#L155 */
  export type __fsid_t = StructPointer<"__fsid_t">;

  /** .bits/types.h#L156 */
  export type __clock_t = FFIType.i64;

  /** .bits/types.h#L157 */
  export type __rlim_t = FFIType.u64;

  /** .bits/types.h#L158 */
  export type __rlim64_t = FFIType.u64;

  /** .bits/types.h#L159 */
  export type __id_t = FFIType.u32;

  /** .bits/types.h#L160 */
  export type __time_t = FFIType.i64;

  /** .bits/types.h#L161 */
  export type __useconds_t = FFIType.u32;

  /** .bits/types.h#L162 */
  export type __suseconds_t = FFIType.i64;

  /** .bits/types.h#L163 */
  export type __suseconds64_t = FFIType.i64;

  /** .bits/types.h#L165 */
  export type __daddr_t = FFIType.i32;

  /** .bits/types.h#L166 */
  export type __key_t = FFIType.i32;

  /** .bits/types.h#L169 */
  export type __clockid_t = FFIType.i32;

  /** .bits/types.h#L172 */
  export type __timer_t = Pointer<"__timer_t">;

  /** .bits/types.h#L175 */
  export type __blksize_t = FFIType.i64;

  /** .bits/types.h#L180 */
  export type __blkcnt_t = FFIType.i64;

  /** .bits/types.h#L181 */
  export type __blkcnt64_t = FFIType.i64;

  /** .bits/types.h#L184 */
  export type __fsblkcnt_t = FFIType.u64;

  /** .bits/types.h#L185 */
  export type __fsblkcnt64_t = FFIType.u64;

  /** .bits/types.h#L188 */
  export type __fsfilcnt_t = FFIType.u64;

  /** .bits/types.h#L189 */
  export type __fsfilcnt64_t = FFIType.u64;

  /** .bits/types.h#L192 */
  export type __fsword_t = FFIType.i64;

  /** .bits/types.h#L194 */
  export type __ssize_t = FFIType.i64;

  /** .bits/types.h#L197 */
  export type __syscall_slong_t = FFIType.i64;

  /** .bits/types.h#L199 */
  export type __syscall_ulong_t = FFIType.u64;

  /** .bits/types.h#L203 */
  export type __loff_t = PactFfi.__off64_t;

  /** .bits/types.h#L204 */
  export type __caddr_t = FFIType.cstring;

  /** .bits/types.h#L207 */
  export type __intptr_t = FFIType.i64;

  /** .bits/types.h#L210 */
  export type __socklen_t = FFIType.u32;

  /** .bits/types.h#L215 */
  export type __sig_atomic_t = FFIType.i32;

  /** .bits/stdint-intn.h#L24 */
  export type int8_t = PactFfi.__int8_t;

  /** .bits/stdint-intn.h#L25 */
  export type int16_t = PactFfi.__int16_t;

  /** .bits/stdint-intn.h#L26 */
  export type int32_t = PactFfi.__int32_t;

  /** .bits/stdint-intn.h#L27 */
  export type int64_t = PactFfi.__int64_t;

  /** .bits/stdint-uintn.h#L24 */
  export type uint8_t = PactFfi.__uint8_t;

  /** .bits/stdint-uintn.h#L25 */
  export type uint16_t = PactFfi.__uint16_t;

  /** .bits/stdint-uintn.h#L26 */
  export type uint32_t = PactFfi.__uint32_t;

  /** .bits/stdint-uintn.h#L27 */
  export type uint64_t = PactFfi.__uint64_t;

  /** .stdint.h#L43 */
  export type int_least8_t = PactFfi.__int_least8_t;

  /** .stdint.h#L44 */
  export type int_least16_t = PactFfi.__int_least16_t;

  /** .stdint.h#L45 */
  export type int_least32_t = PactFfi.__int_least32_t;

  /** .stdint.h#L46 */
  export type int_least64_t = PactFfi.__int_least64_t;

  /** .stdint.h#L49 */
  export type uint_least8_t = PactFfi.__uint_least8_t;

  /** .stdint.h#L50 */
  export type uint_least16_t = PactFfi.__uint_least16_t;

  /** .stdint.h#L51 */
  export type uint_least32_t = PactFfi.__uint_least32_t;

  /** .stdint.h#L52 */
  export type uint_least64_t = PactFfi.__uint_least64_t;

  /** .stdint.h#L58 */
  export type int_fast8_t = FFIType.i8;

  /** .stdint.h#L60 */
  export type int_fast16_t = FFIType.i64;

  /** .stdint.h#L61 */
  export type int_fast32_t = FFIType.i64;

  /** .stdint.h#L62 */
  export type int_fast64_t = FFIType.i64;

  /** .stdint.h#L71 */
  export type uint_fast8_t = FFIType.u8;

  /** .stdint.h#L73 */
  export type uint_fast16_t = FFIType.u64;

  /** .stdint.h#L74 */
  export type uint_fast32_t = FFIType.u64;

  /** .stdint.h#L75 */
  export type uint_fast64_t = FFIType.u64;

  /** .stdint.h#L87 */
  export type intptr_t = FFIType.i64;

  /** .stdint.h#L90 */
  export type uintptr_t = FFIType.u64;

  /** .stdint.h#L101 */
  export type intmax_t = PactFfi.__intmax_t;

  /** .stdint.h#L102 */
  export type uintmax_t = PactFfi.__uintmax_t;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L46 */
  export type size_t = FFIType.u64;

  /** /usr/lib/clang/14.0.6/include/stddef.h#L74 */
  export type wchar_t = FFIType.i32;

  /** .bits/floatn-common.h#L214 */
  export type _Float32 = FFIType.f32;

  /** .bits/floatn-common.h#L251 */
  export type _Float64 = FFIType.f64;

  /** .bits/floatn-common.h#L268 */
  export type _Float32x = FFIType.f64;

  /** .bits/floatn-common.h#L285 */
  export type _Float64x = bigint;

  /** .stdlib.h#L63 */
  export type div_t = StructPointer<"div_t">;

  /** .stdlib.h#L71 */
  export type ldiv_t = StructPointer<"ldiv_t">;

  /** .stdlib.h#L81 */
  export type lldiv_t = StructPointer<"lldiv_t">;

  /** .sys/types.h#L33 */
  export type u_char = PactFfi.__u_char;

  /** .sys/types.h#L34 */
  export type u_short = PactFfi.__u_short;

  /** .sys/types.h#L35 */
  export type u_int = PactFfi.__u_int;

  /** .sys/types.h#L36 */
  export type u_long = PactFfi.__u_long;

  /** .sys/types.h#L37 */
  export type quad_t = PactFfi.__quad_t;

  /** .sys/types.h#L38 */
  export type u_quad_t = PactFfi.__u_quad_t;

  /** .sys/types.h#L39 */
  export type fsid_t = PactFfi.__fsid_t;

  /** .sys/types.h#L42 */
  export type loff_t = PactFfi.__loff_t;

  /** .sys/types.h#L47 */
  export type ino_t = PactFfi.__ino_t;

  /** .sys/types.h#L59 */
  export type dev_t = PactFfi.__dev_t;

  /** .sys/types.h#L64 */
  export type gid_t = PactFfi.__gid_t;

  /** .sys/types.h#L69 */
  export type mode_t = PactFfi.__mode_t;

  /** .sys/types.h#L74 */
  export type nlink_t = PactFfi.__nlink_t;

  /** .sys/types.h#L79 */
  export type uid_t = PactFfi.__uid_t;

  /** .sys/types.h#L85 */
  export type off_t = PactFfi.__off_t;

  /** .sys/types.h#L97 */
  export type pid_t = PactFfi.__pid_t;

  /** .sys/types.h#L103 */
  export type id_t = PactFfi.__id_t;

  /** .sys/types.h#L108 */
  export type ssize_t = PactFfi.__ssize_t;

  /** .sys/types.h#L114 */
  export type daddr_t = PactFfi.__daddr_t;

  /** .sys/types.h#L115 */
  export type caddr_t = PactFfi.__caddr_t;

  /** .sys/types.h#L121 */
  export type key_t = PactFfi.__key_t;

  /** .bits/types/clock_t.h#L7 */
  export type clock_t = PactFfi.__clock_t;

  /** .bits/types/clockid_t.h#L7 */
  export type clockid_t = PactFfi.__clockid_t;

  /** .bits/types/time_t.h#L10 */
  export type time_t = PactFfi.__time_t;

  /** .bits/types/timer_t.h#L7 */
  export type timer_t = PactFfi.__timer_t;

  /** .sys/types.h#L148 */
  export type ulong = FFIType.u64;

  /** .sys/types.h#L149 */
  export type ushort = FFIType.u16;

  /** .sys/types.h#L150 */
  export type uint = FFIType.u32;

  /** .sys/types.h#L158 */
  export type u_int8_t = PactFfi.__uint8_t;

  /** .sys/types.h#L159 */
  export type u_int16_t = PactFfi.__uint16_t;

  /** .sys/types.h#L160 */
  export type u_int32_t = PactFfi.__uint32_t;

  /** .sys/types.h#L161 */
  export type u_int64_t = PactFfi.__uint64_t;

  /** .sys/types.h#L166 */
  export type register_t = FFIType.i32;

  /** .bits/types/__sigset_t.h#L8 */
  export type __sigset_t = StructPointer<"__sigset_t">;

  /** .bits/types/sigset_t.h#L7 */
  export type sigset_t = PactFfi.__sigset_t;

  /** .sys/select.h#L43 */
  export type suseconds_t = PactFfi.__suseconds_t;

  /** .sys/select.h#L49 */
  export type __fd_mask = FFIType.i64;

  /** .sys/select.h#L70 */
  export type fd_set = StructPointer<"fd_set">;

  /** .sys/select.h#L77 */
  export type fd_mask = PactFfi.__fd_mask;

  /** .sys/types.h#L185 */
  export type blksize_t = PactFfi.__blksize_t;

  /** .sys/types.h#L192 */
  export type blkcnt_t = PactFfi.__blkcnt_t;

  /** .sys/types.h#L196 */
  export type fsblkcnt_t = PactFfi.__fsblkcnt_t;

  /** .sys/types.h#L200 */
  export type fsfilcnt_t = PactFfi.__fsfilcnt_t;

  /** .bits/atomic_wide_counter.h#L33 */
  export type __atomic_wide_counter = unknown;

  /** .bits/thread-shared-types.h#L55 */
  export type __pthread_list_t = StructPointer<"__pthread_internal_list">;

  /** .bits/thread-shared-types.h#L60 */
  export type __pthread_slist_t = StructPointer<"__pthread_internal_slist">;

  /** .bits/thread-shared-types.h#L105 */
  export type __tss_t = FFIType.u32;

  /** .bits/thread-shared-types.h#L106 */
  export type __thrd_t = FFIType.u64;

  /** .bits/thread-shared-types.h#L111 */
  export type __once_flag = StructPointer<"__once_flag">;

  /** .bits/pthreadtypes.h#L27 */
  export type pthread_t = FFIType.u64;

  /** .bits/pthreadtypes.h#L36 */
  export type pthread_mutexattr_t = unknown;

  /** .bits/pthreadtypes.h#L45 */
  export type pthread_condattr_t = unknown;

  /** .bits/pthreadtypes.h#L49 */
  export type pthread_key_t = FFIType.u32;

  /** .bits/pthreadtypes.h#L53 */
  export type pthread_once_t = FFIType.i32;

  /** .bits/pthreadtypes.h#L62 */
  export type pthread_attr_t = unknown;

  /** .bits/pthreadtypes.h#L72 */
  export type pthread_mutex_t = unknown;

  /** .bits/pthreadtypes.h#L80 */
  export type pthread_cond_t = unknown;

  /** .bits/pthreadtypes.h#L91 */
  export type pthread_rwlock_t = unknown;

  /** .bits/pthreadtypes.h#L97 */
  export type pthread_rwlockattr_t = unknown;

  /** .bits/pthreadtypes.h#L103 */
  export type pthread_spinlock_t = FFIType.i32;

  /** .bits/pthreadtypes.h#L112 */
  export type pthread_barrier_t = unknown;

  /** .bits/pthreadtypes.h#L118 */
  export type pthread_barrierattr_t = unknown;

  /** .stdlib.h#L816 */
  export type __compar_fn_t = FnPointer<"__compar_fn_t">;

  /** /data/input/pact.h#L47 */
  export type ExpressionValueType = PactFfi.ExpressionValueType;

  /** /data/input/pact.h#L61 */
  export type InteractionPart = PactFfi.InteractionPart;

  /** /data/input/pact.h#L76 */
  export type LevelFilter = PactFfi.LevelFilter;

  /** /data/input/pact.h#L106 */
  export type PactSpecification = PactFfi.PactSpecification;

  /** /data/input/pact.h#L111 */
  export type Consumer = StructPointer<"Consumer">;

  /** /data/input/pact.h#L116 */
  export type Generator = StructPointer<"Generator">;

  /** /data/input/pact.h#L121 */
  export type MatchingRule = StructPointer<"MatchingRule">;

  /** /data/input/pact.h#L126 */
  export type MatchingRuleDefinitionResult = StructPointer<"MatchingRuleDefinitionResult">;

  /** /data/input/pact.h#L131 */
  export type MatchingRuleIterator = StructPointer<"MatchingRuleIterator">;

  /** /data/input/pact.h#L136 */
  export type Message = StructPointer<"Message">;

  /** /data/input/pact.h#L144 */
  export type MessageMetadataIterator = StructPointer<"MessageMetadataIterator">;

  /** /data/input/pact.h#L151 */
  export type MessagePact = StructPointer<"MessagePact">;

  /** /data/input/pact.h#L156 */
  export type MessagePactMessageIterator = StructPointer<"MessagePactMessageIterator">;

  /** /data/input/pact.h#L164 */
  export type MessagePactMetadataIterator = StructPointer<"MessagePactMetadataIterator">;

  /** /data/input/pact.h#L169 */
  export type Mismatch = StructPointer<"Mismatch">;

  /** /data/input/pact.h#L174 */
  export type Mismatches = StructPointer<"Mismatches">;

  /** /data/input/pact.h#L179 */
  export type MismatchesIterator = StructPointer<"MismatchesIterator">;

  /** /data/input/pact.h#L184 */
  export type Pact = StructPointer<"Pact">;

  /** /data/input/pact.h#L189 */
  export type PactMessageIterator = StructPointer<"PactMessageIterator">;

  /** /data/input/pact.h#L194 */
  export type PactSyncHttpIterator = StructPointer<"PactSyncHttpIterator">;

  /** /data/input/pact.h#L199 */
  export type PactSyncMessageIterator = StructPointer<"PactSyncMessageIterator">;

  /** /data/input/pact.h#L204 */
  export type Provider = StructPointer<"Provider">;

  /** /data/input/pact.h#L209 */
  export type ProviderState = StructPointer<"ProviderState">;

  /** /data/input/pact.h#L214 */
  export type ProviderStateIterator = StructPointer<"ProviderStateIterator">;

  /** /data/input/pact.h#L222 */
  export type ProviderStateParamIterator = StructPointer<"ProviderStateParamIterator">;

  /** /data/input/pact.h#L227 */
  export type SynchronousHttp = StructPointer<"SynchronousHttp">;

  /** /data/input/pact.h#L232 */
  export type SynchronousMessage = StructPointer<"SynchronousMessage">;

  /** /data/input/pact.h#L237 */
  export type VerifierHandle = StructPointer<"VerifierHandle">;

  /** /data/input/pact.h#L251 */
  export type MessageMetadataPair = StructPointer<"MessageMetadataPair">;

  /** /data/input/pact.h#L269 */
  export type MessagePactMetadataTriple = StructPointer<"MessagePactMetadataTriple">;

  /** /data/input/pact.h#L283 */
  export type ProviderStateParamPair = StructPointer<"ProviderStateParamPair">;

  /** /data/input/pact.h#L324 */
  export type MatchingRuleResult_Tag = PactFfi.MatchingRuleResult_Tag;

  /** /data/input/pact.h#L330 */
  export type MatchingRuleResult_MatchingRule_Body = StructPointer<"MatchingRuleResult_MatchingRule_Body">;

  /** /data/input/pact.h#L340 */
  export type MatchingRuleResult = StructPointer<"MatchingRuleResult">;

  /** /data/input/pact.h#L345 */
  export type PactHandle = PactFfi.uint16_t;

  /** /data/input/pact.h#L359 */
  export type StringResult_Tag = PactFfi.StringResult_Tag;

  /** /data/input/pact.h#L371 */
  export type StringResult = StructPointer<"StringResult">;

  /** /data/input/pact.h#L376 */
  export type InteractionHandle = PactFfi.uint32_t;

  /** /data/input/pact.h#L381 */
  export type MessagePactHandle = PactFfi.uint16_t;

  /** /data/input/pact.h#L386 */
  export type MessageHandle = PactFfi.uint32_t;

  /** /data/input/pact.h#L22 */
  export enum ExpressionValueType {
    ExpressionValueType_Unknown = 0,
    ExpressionValueType_String = 1,
    ExpressionValueType_Number = 2,
    ExpressionValueType_Integer = 3,
    ExpressionValueType_Decimal = 4,
    ExpressionValueType_Boolean = 5,
  }

  /** /data/input/pact.h#L52 */
  export enum InteractionPart {
    InteractionPart_Request = 0,
    InteractionPart_Response = 1,
  }

  /** /data/input/pact.h#L69 */
  export enum LevelFilter {
    LevelFilter_Off = 0,
    LevelFilter_Error = 1,
    LevelFilter_Warn = 2,
    LevelFilter_Info = 3,
    LevelFilter_Debug = 4,
    LevelFilter_Trace = 5,
  }

  /** /data/input/pact.h#L81 */
  export enum PactSpecification {
    PactSpecification_Unknown = 0,
    PactSpecification_V1 = 1,
    PactSpecification_V1_1 = 2,
    PactSpecification_V2 = 3,
    PactSpecification_V3 = 4,
    PactSpecification_V4 = 5,
  }

  /** /data/input/pact.h#L315 */
  export enum MatchingRuleResult_Tag {
    MatchingRuleResult_MatchingRule = 0,
    MatchingRuleResult_MatchingReference = 1,
  }

  /** /data/input/pact.h#L350 */
  export enum StringResult_Tag {
    StringResult_Ok = 0,
    StringResult_Failed = 1,
  }

  /** .stdlib.h#L540 */
  export declare function malloc(__size: FFIType.usize): Pointer<FFIType.void>;

  /** .stdlib.h#L543 */
  export declare function calloc(__nmemb: FFIType.usize, __size: FFIType.usize): Pointer<FFIType.void>;

  /** .stdlib.h#L551 */
  export declare function realloc(__ptr: Pointer<FFIType.void>, __size: FFIType.usize): Pointer<FFIType.void>;

  /** .stdlib.h#L555 */
  export declare function free(__ptr: Pointer<FFIType.void>): FFIType.void;

  /** .stdlib.h#L586 */
  export declare function posix_memalign(__memptr: Pointer<Pointer<FFIType.void>>, __alignment: FFIType.usize, __size: FFIType.usize): FFIType.i32;

  /** .stdlib.h#L598 */
  export declare function abort(): FFIType.void;

  /** .stdlib.h#L641 */
  export declare function getenv(__name: FFIType.cstring): FFIType.cstring;

  /** .stdlib.h#L808 */
  export declare function realpath(__name: FFIType.cstring, __resolved: FFIType.cstring): FFIType.cstring;

  /** /data/input/pact.h#L391 */
  export declare function pactffi_version(): FFIType.cstring;

  /** /data/input/pact.h#L402 */
  export declare function pactffi_init(log_env_var: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L412 */
  export declare function pactffi_init_with_log_level(level: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L421 */
  export declare function pactffi_enable_ansi_support(): FFIType.void;

  /** /data/input/pact.h#L436 */
  export declare function pactffi_log_message(source: FFIType.cstring, log_level: FFIType.cstring, message: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L442 */
  export declare function pactffi_match_message(msg_1: Pointer<StructPointer<"Message">>, msg_2: Pointer<StructPointer<"Message">>): Pointer<StructPointer<"Mismatches">>;

  /** /data/input/pact.h#L448 */
  export declare function pactffi_mismatches_get_iter(mismatches: Pointer<StructPointer<"Mismatches">>): Pointer<StructPointer<"MismatchesIterator">>;

  /** /data/input/pact.h#L453 */
  export declare function pactffi_mismatches_delete(mismatches: Pointer<StructPointer<"Mismatches">>): FFIType.void;

  /** /data/input/pact.h#L460 */
  export declare function pactffi_mismatches_iter_next(iter: Pointer<StructPointer<"MismatchesIterator">>): Pointer<StructPointer<"Mismatch">>;

  /** /data/input/pact.h#L465 */
  export declare function pactffi_mismatches_iter_delete(iter: Pointer<StructPointer<"MismatchesIterator">>): FFIType.void;

  /** /data/input/pact.h#L470 */
  export declare function pactffi_mismatch_to_json(mismatch: Pointer<StructPointer<"Mismatch">>): FFIType.cstring;

  /** /data/input/pact.h#L475 */
  export declare function pactffi_mismatch_type(mismatch: Pointer<StructPointer<"Mismatch">>): FFIType.cstring;

  /** /data/input/pact.h#L480 */
  export declare function pactffi_mismatch_summary(mismatch: Pointer<StructPointer<"Mismatch">>): FFIType.cstring;

  /** /data/input/pact.h#L485 */
  export declare function pactffi_mismatch_description(mismatch: Pointer<StructPointer<"Mismatch">>): FFIType.cstring;

  /** /data/input/pact.h#L490 */
  export declare function pactffi_mismatch_ansi_description(mismatch: Pointer<StructPointer<"Mismatch">>): FFIType.cstring;

  /** /data/input/pact.h#L529 */
  export declare function pactffi_get_error_message(buffer: FFIType.cstring, length: FFIType.i32): FFIType.i32;

  /** /data/input/pact.h#L535 */
  export declare function pactffi_log_to_stdout(level_filter: PactFfi.LevelFilter): FFIType.i32;

  /** /data/input/pact.h#L540 */
  export declare function pactffi_log_to_stderr(level_filter: PactFfi.LevelFilter): FFIType.i32;

  /** /data/input/pact.h#L549 */
  export declare function pactffi_log_to_file(file_name: FFIType.cstring, level_filter: PactFfi.LevelFilter): FFIType.i32;

  /** /data/input/pact.h#L554 */
  export declare function pactffi_log_to_buffer(level_filter: PactFfi.LevelFilter): FFIType.i32;

  /** /data/input/pact.h#L571 */
  export declare function pactffi_logger_init(): FFIType.void;

  /** /data/input/pact.h#L608 */
  export declare function pactffi_logger_attach_sink(sink_specifier: FFIType.cstring, level_filter: PactFfi.LevelFilter): FFIType.i32;

  /** /data/input/pact.h#L618 */
  export declare function pactffi_logger_apply(): FFIType.i32;

  /** /data/input/pact.h#L636 */
  export declare function pactffi_fetch_log_buffer(log_id: FFIType.cstring): FFIType.cstring;

  /** /data/input/pact.h#L646 */
  export declare function pactffi_parse_pact_json(json: FFIType.cstring): Pointer<StructPointer<"Pact">>;

  /** /data/input/pact.h#L651 */
  export declare function pactffi_pact_model_delete(pact: Pointer<StructPointer<"Pact">>): FFIType.void;

  /** /data/input/pact.h#L689 */
  export declare function pactffi_consumer_get_name(consumer: Pointer<StructPointer<"Consumer">>): FFIType.cstring;

  /** /data/input/pact.h#L702 */
  export declare function pactffi_message_new(): Pointer<StructPointer<"Message">>;

  /** /data/input/pact.h#L715 */
  export declare function pactffi_message_new_from_json(index: FFIType.u32, json_str: FFIType.cstring, spec_version: PactFfi.PactSpecification): Pointer<StructPointer<"Message">>;

  /** /data/input/pact.h#L730 */
  export declare function pactffi_message_new_from_body(body: FFIType.cstring, content_type: FFIType.cstring): Pointer<StructPointer<"Message">>;

  /** /data/input/pact.h#L735 */
  export declare function pactffi_message_delete(message: Pointer<StructPointer<"Message">>): FFIType.void;

  /** /data/input/pact.h#L753 */
  export declare function pactffi_message_get_contents(message: Pointer<StructPointer<"Message">>): FFIType.cstring;

  /** /data/input/pact.h#L768 */
  export declare function pactffi_message_set_contents(message: Pointer<StructPointer<"Message">>, contents: FFIType.cstring, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L784 */
  export declare function pactffi_message_get_contents_length(message: Pointer<StructPointer<"Message">>): FFIType.usize;

  /** /data/input/pact.h#L800 */
  export declare function pactffi_message_get_contents_bin(message: Pointer<StructPointer<"Message">>): Pointer<FFIType.u8>;

  /** /data/input/pact.h#L815 */
  export declare function pactffi_message_set_contents_bin(message: Pointer<StructPointer<"Message">>, contents: Pointer<FFIType.u8>, len: FFIType.usize, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L837 */
  export declare function pactffi_message_get_description(message: Pointer<StructPointer<"Message">>): FFIType.cstring;

  /** /data/input/pact.h#L854 */
  export declare function pactffi_message_set_description(message: Pointer<StructPointer<"Message">>, description: FFIType.cstring): FFIType.i32;

  /** /data/input/pact.h#L873 */
  export declare function pactffi_message_get_provider_state(message: Pointer<StructPointer<"Message">>, index: FFIType.u32): Pointer<StructPointer<"ProviderState">>;

  /** /data/input/pact.h#L887 */
  export declare function pactffi_message_get_provider_state_iter(message: Pointer<StructPointer<"Message">>): Pointer<StructPointer<"ProviderStateIterator">>;

  /** /data/input/pact.h#L903 */
  export declare function pactffi_provider_state_iter_next(iter: Pointer<StructPointer<"ProviderStateIterator">>): Pointer<StructPointer<"ProviderState">>;

  /** /data/input/pact.h#L908 */
  export declare function pactffi_provider_state_iter_delete(iter: Pointer<StructPointer<"ProviderStateIterator">>): FFIType.void;

  /** /data/input/pact.h#L931 */
  export declare function pactffi_message_find_metadata(message: Pointer<StructPointer<"Message">>, key: FFIType.cstring): FFIType.cstring;

  /** /data/input/pact.h#L947 */
  export declare function pactffi_message_insert_metadata(message: Pointer<StructPointer<"Message">>, key: FFIType.cstring, value: FFIType.cstring): FFIType.i32;

  /** /data/input/pact.h#L967 */
  export declare function pactffi_message_get_metadata_iter(message: Pointer<StructPointer<"Message">>): Pointer<StructPointer<"MessageMetadataIterator">>;

  /** /data/input/pact.h#L980 */
  export declare function pactffi_message_metadata_iter_next(iter: Pointer<StructPointer<"MessageMetadataIterator">>): Pointer<StructPointer<"MessageMetadataPair">>;

  /** /data/input/pact.h#L985 */
  export declare function pactffi_message_metadata_iter_delete(iter: Pointer<StructPointer<"MessageMetadataIterator">>): FFIType.void;

  /** /data/input/pact.h#L990 */
  export declare function pactffi_message_metadata_pair_delete(pair: Pointer<StructPointer<"MessageMetadataPair">>): FFIType.void;

  /** /data/input/pact.h#L1005 */
  export declare function pactffi_message_pact_new_from_json(file_name: FFIType.cstring, json_str: FFIType.cstring): Pointer<StructPointer<"MessagePact">>;

  /** /data/input/pact.h#L1010 */
  export declare function pactffi_message_pact_delete(message_pact: Pointer<StructPointer<"MessagePact">>): FFIType.void;

  /** /data/input/pact.h#L1026 */
  export declare function pactffi_message_pact_get_consumer(message_pact: Pointer<StructPointer<"MessagePact">>): Pointer<StructPointer<"Consumer">>;

  /** /data/input/pact.h#L1042 */
  export declare function pactffi_message_pact_get_provider(message_pact: Pointer<StructPointer<"MessagePact">>): Pointer<StructPointer<"Provider">>;

  /** /data/input/pact.h#L1062 */
  export declare function pactffi_message_pact_get_message_iter(message_pact: Pointer<StructPointer<"MessagePact">>): Pointer<StructPointer<"MessagePactMessageIterator">>;

  /** /data/input/pact.h#L1075 */
  export declare function pactffi_message_pact_message_iter_next(iter: Pointer<StructPointer<"MessagePactMessageIterator">>): Pointer<StructPointer<"Message">>;

  /** /data/input/pact.h#L1080 */
  export declare function pactffi_message_pact_message_iter_delete(iter: Pointer<StructPointer<"MessagePactMessageIterator">>): FFIType.void;

  /** /data/input/pact.h#L1103 */
  export declare function pactffi_message_pact_find_metadata(message_pact: Pointer<StructPointer<"MessagePact">>, key1: FFIType.cstring, key2: FFIType.cstring): FFIType.cstring;

  /** /data/input/pact.h#L1125 */
  export declare function pactffi_message_pact_get_metadata_iter(message_pact: Pointer<StructPointer<"MessagePact">>): Pointer<StructPointer<"MessagePactMetadataIterator">>;

  /** /data/input/pact.h#L1138 */
  export declare function pactffi_message_pact_metadata_iter_next(iter: Pointer<StructPointer<"MessagePactMetadataIterator">>): Pointer<StructPointer<"MessagePactMetadataTriple">>;

  /** /data/input/pact.h#L1143 */
  export declare function pactffi_message_pact_metadata_iter_delete(iter: Pointer<StructPointer<"MessagePactMetadataIterator">>): FFIType.void;

  /** /data/input/pact.h#L1148 */
  export declare function pactffi_message_pact_metadata_triple_delete(triple: Pointer<StructPointer<"MessagePactMetadataTriple">>): FFIType.void;

  /** /data/input/pact.h#L1186 */
  export declare function pactffi_provider_get_name(provider: Pointer<StructPointer<"Provider">>): FFIType.cstring;

  /** /data/input/pact.h#L1199 */
  export declare function pactffi_provider_state_get_name(provider_state: Pointer<StructPointer<"ProviderState">>): FFIType.cstring;

  /** /data/input/pact.h#L1219 */
  export declare function pactffi_provider_state_get_param_iter(provider_state: Pointer<StructPointer<"ProviderState">>): Pointer<StructPointer<"ProviderStateParamIterator">>;

  /** /data/input/pact.h#L1237 */
  export declare function pactffi_provider_state_param_iter_next(iter: Pointer<StructPointer<"ProviderStateParamIterator">>): Pointer<StructPointer<"ProviderStateParamPair">>;

  /** /data/input/pact.h#L1242 */
  export declare function pactffi_provider_state_delete(provider_state: Pointer<StructPointer<"ProviderState">>): FFIType.void;

  /** /data/input/pact.h#L1247 */
  export declare function pactffi_provider_state_param_iter_delete(iter: Pointer<StructPointer<"ProviderStateParamIterator">>): FFIType.void;

  /** /data/input/pact.h#L1252 */
  export declare function pactffi_provider_state_param_pair_delete(pair: Pointer<StructPointer<"ProviderStateParamPair">>): FFIType.void;

  /** /data/input/pact.h#L1257 */
  export declare function pactffi_pact_message_iter_delete(iter: Pointer<StructPointer<"PactMessageIterator">>): FFIType.void;

  /** /data/input/pact.h#L1276 */
  export declare function pactffi_pact_message_iter_next(iter: Pointer<StructPointer<"PactMessageIterator">>): Pointer<StructPointer<"Message">>;

  /** /data/input/pact.h#L1295 */
  export declare function pactffi_pact_sync_message_iter_next(iter: Pointer<StructPointer<"PactSyncMessageIterator">>): Pointer<StructPointer<"SynchronousMessage">>;

  /** /data/input/pact.h#L1300 */
  export declare function pactffi_pact_sync_message_iter_delete(iter: Pointer<StructPointer<"PactSyncMessageIterator">>): FFIType.void;

  /** /data/input/pact.h#L1319 */
  export declare function pactffi_pact_sync_http_iter_next(iter: Pointer<StructPointer<"PactSyncHttpIterator">>): Pointer<StructPointer<"SynchronousHttp">>;

  /** /data/input/pact.h#L1324 */
  export declare function pactffi_pact_sync_http_iter_delete(iter: Pointer<StructPointer<"PactSyncHttpIterator">>): FFIType.void;

  /** /data/input/pact.h#L1337 */
  export declare function pactffi_sync_message_new(): Pointer<StructPointer<"SynchronousMessage">>;

  /** /data/input/pact.h#L1342 */
  export declare function pactffi_sync_message_delete(message: Pointer<StructPointer<"SynchronousMessage">>): FFIType.void;

  /** /data/input/pact.h#L1360 */
  export declare function pactffi_sync_message_get_request_contents(message: Pointer<StructPointer<"SynchronousMessage">>): FFIType.cstring;

  /** /data/input/pact.h#L1379 */
  export declare function pactffi_sync_message_set_request_contents(message: Pointer<StructPointer<"SynchronousMessage">>, contents: FFIType.cstring, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1395 */
  export declare function pactffi_sync_message_get_request_contents_length(message: Pointer<StructPointer<"SynchronousMessage">>): FFIType.usize;

  /** /data/input/pact.h#L1411 */
  export declare function pactffi_sync_message_get_request_contents_bin(message: Pointer<StructPointer<"SynchronousMessage">>): Pointer<FFIType.u8>;

  /** /data/input/pact.h#L1431 */
  export declare function pactffi_sync_message_set_request_contents_bin(message: Pointer<StructPointer<"SynchronousMessage">>, contents: Pointer<FFIType.u8>, len: FFIType.usize, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1447 */
  export declare function pactffi_sync_message_get_number_responses(message: Pointer<StructPointer<"SynchronousMessage">>): FFIType.usize;

  /** /data/input/pact.h#L1466 */
  export declare function pactffi_sync_message_get_response_contents(message: Pointer<StructPointer<"SynchronousMessage">>, index: FFIType.usize): FFIType.cstring;

  /** /data/input/pact.h#L1488 */
  export declare function pactffi_sync_message_set_response_contents(message: Pointer<StructPointer<"SynchronousMessage">>, index: FFIType.usize, contents: FFIType.cstring, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1505 */
  export declare function pactffi_sync_message_get_response_contents_length(message: Pointer<StructPointer<"SynchronousMessage">>, index: FFIType.usize): FFIType.usize;

  /** /data/input/pact.h#L1522 */
  export declare function pactffi_sync_message_get_response_contents_bin(message: Pointer<StructPointer<"SynchronousMessage">>, index: FFIType.usize): Pointer<FFIType.u8>;

  /** /data/input/pact.h#L1546 */
  export declare function pactffi_sync_message_set_response_contents_bin(message: Pointer<StructPointer<"SynchronousMessage">>, index: FFIType.usize, contents: Pointer<FFIType.u8>, len: FFIType.usize, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1569 */
  export declare function pactffi_sync_message_get_description(message: Pointer<StructPointer<"SynchronousMessage">>): FFIType.cstring;

  /** /data/input/pact.h#L1586 */
  export declare function pactffi_sync_message_set_description(message: Pointer<StructPointer<"SynchronousMessage">>, description: FFIType.cstring): FFIType.i32;

  /** /data/input/pact.h#L1606 */
  export declare function pactffi_sync_message_get_provider_state(message: Pointer<StructPointer<"SynchronousMessage">>, index: FFIType.u32): Pointer<StructPointer<"ProviderState">>;

  /** /data/input/pact.h#L1620 */
  export declare function pactffi_sync_message_get_provider_state_iter(message: Pointer<StructPointer<"SynchronousMessage">>): Pointer<StructPointer<"ProviderStateIterator">>;

  /** /data/input/pact.h#L1633 */
  export declare function pactffi_sync_http_new(): Pointer<StructPointer<"SynchronousHttp">>;

  /** /data/input/pact.h#L1638 */
  export declare function pactffi_sync_http_delete(interaction: Pointer<StructPointer<"SynchronousHttp">>): FFIType.void;

  /** /data/input/pact.h#L1656 */
  export declare function pactffi_sync_http_get_request_contents(interaction: Pointer<StructPointer<"SynchronousHttp">>): FFIType.cstring;

  /** /data/input/pact.h#L1675 */
  export declare function pactffi_sync_http_set_request_contents(interaction: Pointer<StructPointer<"SynchronousHttp">>, contents: FFIType.cstring, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1691 */
  export declare function pactffi_sync_http_get_request_contents_length(interaction: Pointer<StructPointer<"SynchronousHttp">>): FFIType.usize;

  /** /data/input/pact.h#L1707 */
  export declare function pactffi_sync_http_get_request_contents_bin(interaction: Pointer<StructPointer<"SynchronousHttp">>): Pointer<FFIType.u8>;

  /** /data/input/pact.h#L1727 */
  export declare function pactffi_sync_http_set_request_contents_bin(interaction: Pointer<StructPointer<"SynchronousHttp">>, contents: Pointer<FFIType.u8>, len: FFIType.usize, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1749 */
  export declare function pactffi_sync_http_get_response_contents(interaction: Pointer<StructPointer<"SynchronousHttp">>): FFIType.cstring;

  /** /data/input/pact.h#L1768 */
  export declare function pactffi_sync_http_set_response_contents(interaction: Pointer<StructPointer<"SynchronousHttp">>, contents: FFIType.cstring, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1784 */
  export declare function pactffi_sync_http_get_response_contents_length(interaction: Pointer<StructPointer<"SynchronousHttp">>): FFIType.usize;

  /** /data/input/pact.h#L1800 */
  export declare function pactffi_sync_http_get_response_contents_bin(interaction: Pointer<StructPointer<"SynchronousHttp">>): Pointer<FFIType.u8>;

  /** /data/input/pact.h#L1820 */
  export declare function pactffi_sync_http_set_response_contents_bin(interaction: Pointer<StructPointer<"SynchronousHttp">>, contents: Pointer<FFIType.u8>, len: FFIType.usize, content_type: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L1842 */
  export declare function pactffi_sync_http_get_description(interaction: Pointer<StructPointer<"SynchronousHttp">>): FFIType.cstring;

  /** /data/input/pact.h#L1859 */
  export declare function pactffi_sync_http_set_description(interaction: Pointer<StructPointer<"SynchronousHttp">>, description: FFIType.cstring): FFIType.i32;

  /** /data/input/pact.h#L1878 */
  export declare function pactffi_sync_http_get_provider_state(interaction: Pointer<StructPointer<"SynchronousHttp">>, index: FFIType.u32): Pointer<StructPointer<"ProviderState">>;

  /** /data/input/pact.h#L1892 */
  export declare function pactffi_sync_http_get_provider_state_iter(interaction: Pointer<StructPointer<"SynchronousHttp">>): Pointer<StructPointer<"ProviderStateIterator">>;

  /** /data/input/pact.h#L1915 */
  export declare function pactffi_parse_matcher_definition(expression: FFIType.cstring): Pointer<StructPointer<"MatchingRuleDefinitionResult">>;

  /** /data/input/pact.h#L1922 */
  export declare function pactffi_matcher_definition_error(definition: Pointer<StructPointer<"MatchingRuleDefinitionResult">>): FFIType.cstring;

  /** /data/input/pact.h#L1933 */
  export declare function pactffi_matcher_definition_value(definition: Pointer<StructPointer<"MatchingRuleDefinitionResult">>): FFIType.cstring;

  /** /data/input/pact.h#L1938 */
  export declare function pactffi_matcher_definition_delete(definition: Pointer<StructPointer<"MatchingRuleDefinitionResult">>): FFIType.void;

  /** /data/input/pact.h#L1949 */
  export declare function pactffi_matcher_definition_generator(definition: Pointer<StructPointer<"MatchingRuleDefinitionResult">>): Pointer<StructPointer<"Generator">>;

  /** /data/input/pact.h#L1955 */
  export declare function pactffi_matcher_definition_value_type(definition: Pointer<StructPointer<"MatchingRuleDefinitionResult">>): PactFfi.ExpressionValueType;

  /** /data/input/pact.h#L1960 */
  export declare function pactffi_matching_rule_iter_delete(iter: Pointer<StructPointer<"MatchingRuleIterator">>): FFIType.void;

  /** /data/input/pact.h#L1968 */
  export declare function pactffi_matcher_definition_iter(definition: Pointer<StructPointer<"MatchingRuleDefinitionResult">>): Pointer<StructPointer<"MatchingRuleIterator">>;

  /** /data/input/pact.h#L1985 */
  export declare function pactffi_matching_rule_iter_next(iter: Pointer<StructPointer<"MatchingRuleIterator">>): Pointer<StructPointer<"MatchingRuleResult">>;

  /** /data/input/pact.h#L1997 */
  export declare function pactffi_matching_rule_to_json(rule: Pointer<StructPointer<"MatchingRule">>): FFIType.cstring;

  /** /data/input/pact.h#L2009 */
  export declare function pactffi_generator_to_json(generator: Pointer<StructPointer<"Generator">>): FFIType.cstring;

  /** /data/input/pact.h#L2019 */
  export declare function pactffi_generator_generate_string(generator: Pointer<StructPointer<"Generator">>, context_json: FFIType.cstring): FFIType.cstring;

  /** /data/input/pact.h#L2030 */
  export declare function pactffi_generator_generate_integer(generator: Pointer<StructPointer<"Generator">>, context_json: FFIType.cstring): FFIType.u16;

  /** /data/input/pact.h#L2043 */
  export declare function pactffi_string_delete(string: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2070 */
  export declare function pactffi_create_mock_server(pact_str: FFIType.cstring, addr_str: FFIType.cstring, tls: FFIType.bool): PactFfi.int32_t;

  /** /data/input/pact.h#L2084 */
  export declare function pactffi_get_tls_ca_certificate(): FFIType.cstring;

  /** /data/input/pact.h#L2110 */
  export declare function pactffi_create_mock_server_for_pact(pact: PactFfi.PactHandle, addr_str: FFIType.cstring, tls: FFIType.bool): PactFfi.int32_t;

  /** /data/input/pact.h#L2146 */
  export declare function pactffi_create_mock_server_for_transport(pact: PactFfi.PactHandle, addr: FFIType.cstring, port: PactFfi.uint16_t, transport: FFIType.cstring, transport_config: FFIType.cstring): PactFfi.int32_t;

  /** /data/input/pact.h#L2158 */
  export declare function pactffi_mock_server_matched(mock_server_port: PactFfi.int32_t): FFIType.bool;

  /** /data/input/pact.h#L2175 */
  export declare function pactffi_mock_server_mismatches(mock_server_port: PactFfi.int32_t): FFIType.cstring;

  /** /data/input/pact.h#L2182 */
  export declare function pactffi_cleanup_mock_server(mock_server_port: PactFfi.int32_t): FFIType.bool;

  /** /data/input/pact.h#L2205 */
  export declare function pactffi_write_pact_file(mock_server_port: PactFfi.int32_t, directory: FFIType.cstring, overwrite: FFIType.bool): PactFfi.int32_t;

  /** /data/input/pact.h#L2214 */
  export declare function pactffi_mock_server_logs(mock_server_port: PactFfi.int32_t): FFIType.cstring;

  /** /data/input/pact.h#L2226 */
  export declare function pactffi_generate_datetime_string(format: FFIType.cstring): StructPointer<"StringResult">;

  /** /data/input/pact.h#L2236 */
  export declare function pactffi_check_regex(regex: FFIType.cstring, example: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2247 */
  export declare function pactffi_generate_regex_value(regex: FFIType.cstring): StructPointer<"StringResult">;

  /** /data/input/pact.h#L2259 */
  export declare function pactffi_free_string(s: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2270 */
  export declare function pactffi_new_pact(consumer_name: FFIType.cstring, provider_name: FFIType.cstring): PactFfi.PactHandle;

  /** /data/input/pact.h#L2279 */
  export declare function pactffi_new_interaction(pact: PactFfi.PactHandle, description: FFIType.cstring): PactFfi.InteractionHandle;

  /** /data/input/pact.h#L2287 */
  export declare function pactffi_new_message_interaction(pact: PactFfi.PactHandle, description: FFIType.cstring): PactFfi.InteractionHandle;

  /** /data/input/pact.h#L2295 */
  export declare function pactffi_new_sync_message_interaction(pact: PactFfi.PactHandle, description: FFIType.cstring): PactFfi.InteractionHandle;

  /** /data/input/pact.h#L2303 */
  export declare function pactffi_upon_receiving(interaction: PactFfi.InteractionHandle, description: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2311 */
  export declare function pactffi_given(interaction: PactFfi.InteractionHandle, description: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2330 */
  export declare function pactffi_interaction_test_name(interaction: PactFfi.InteractionHandle, test_name: FFIType.cstring): FFIType.u32;

  /** /data/input/pact.h#L2341 */
  export declare function pactffi_given_with_param(interaction: PactFfi.InteractionHandle, description: FFIType.cstring, name: FFIType.cstring, value: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2362 */
  export declare function pactffi_with_request(interaction: PactFfi.InteractionHandle, method: FFIType.cstring, path: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2376 */
  export declare function pactffi_with_query_parameter(interaction: PactFfi.InteractionHandle, name: FFIType.cstring, index: FFIType.usize, value: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2417 */
  export declare function pactffi_with_query_parameter_v2(interaction: PactFfi.InteractionHandle, name: FFIType.cstring, index: FFIType.usize, value: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2429 */
  export declare function pactffi_with_specification(pact: PactFfi.PactHandle, version: PactFfi.PactSpecification): FFIType.bool;

  /** /data/input/pact.h#L2441 */
  export declare function pactffi_with_pact_metadata(pact: PactFfi.PactHandle, namespace_: FFIType.cstring, name: FFIType.cstring, value: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2457 */
  export declare function pactffi_with_header(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, name: FFIType.cstring, index: FFIType.usize, value: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2499 */
  export declare function pactffi_with_header_v2(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, name: FFIType.cstring, index: FFIType.usize, value: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2511 */
  export declare function pactffi_response_status(interaction: PactFfi.InteractionHandle, status: FFIType.u16): FFIType.bool;

  /** /data/input/pact.h#L2539 */
  export declare function pactffi_with_body(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: FFIType.cstring, body: FFIType.cstring): FFIType.bool;

  /** /data/input/pact.h#L2571 */
  export declare function pactffi_with_binary_file(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: FFIType.cstring, body: Pointer<PactFfi.uint8_t>, size: FFIType.usize): FFIType.bool;

  /** /data/input/pact.h#L2602 */
  export declare function pactffi_with_multipart_file(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: FFIType.cstring, file: FFIType.cstring, part_name: FFIType.cstring): StructPointer<"StringResult">;

  /** /data/input/pact.h#L2623 */
  export declare function pactffi_pact_handle_get_message_iter(pact: PactFfi.PactHandle): Pointer<StructPointer<"PactMessageIterator">>;

  /** /data/input/pact.h#L2640 */
  export declare function pactffi_pact_handle_get_sync_message_iter(pact: PactFfi.PactHandle): Pointer<StructPointer<"PactSyncMessageIterator">>;

  /** /data/input/pact.h#L2657 */
  export declare function pactffi_pact_handle_get_sync_http_iter(pact: PactFfi.PactHandle): Pointer<StructPointer<"PactSyncHttpIterator">>;

  /** /data/input/pact.h#L2668 */
  export declare function pactffi_new_message_pact(consumer_name: FFIType.cstring, provider_name: FFIType.cstring): PactFfi.MessagePactHandle;

  /** /data/input/pact.h#L2678 */
  export declare function pactffi_new_message(pact: PactFfi.MessagePactHandle, description: FFIType.cstring): PactFfi.MessageHandle;

  /** /data/input/pact.h#L2685 */
  export declare function pactffi_message_expects_to_receive(message: PactFfi.MessageHandle, description: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2692 */
  export declare function pactffi_message_given(message: PactFfi.MessageHandle, description: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2701 */
  export declare function pactffi_message_given_with_param(message: PactFfi.MessageHandle, description: FFIType.cstring, name: FFIType.cstring, value: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2720 */
  export declare function pactffi_message_with_contents(message_handle: PactFfi.MessageHandle, content_type: FFIType.cstring, body: Pointer<PactFfi.uint8_t>, size: FFIType.usize): FFIType.void;

  /** /data/input/pact.h#L2731 */
  export declare function pactffi_message_with_metadata(message_handle: PactFfi.MessageHandle, key: FFIType.cstring, value: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2741 */
  export declare function pactffi_message_reify(message_handle: PactFfi.MessageHandle): FFIType.cstring;

  /** /data/input/pact.h#L2763 */
  export declare function pactffi_write_message_pact_file(pact: PactFfi.MessagePactHandle, directory: FFIType.cstring, overwrite: FFIType.bool): PactFfi.int32_t;

  /** /data/input/pact.h#L2775 */
  export declare function pactffi_with_message_pact_metadata(pact: PactFfi.MessagePactHandle, namespace_: FFIType.cstring, name: FFIType.cstring, value: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2805 */
  export declare function pactffi_pact_handle_write_file(pact: PactFfi.PactHandle, directory: FFIType.cstring, overwrite: FFIType.bool): PactFfi.int32_t;

  /** /data/input/pact.h#L2814 */
  export declare function pactffi_new_async_message(pact: PactFfi.PactHandle, description: FFIType.cstring): PactFfi.MessageHandle;

  /** /data/input/pact.h#L2826 */
  export declare function pactffi_free_pact_handle(pact: PactFfi.PactHandle): FFIType.u32;

  /** /data/input/pact.h#L2838 */
  export declare function pactffi_free_message_pact_handle(pact: PactFfi.MessagePactHandle): FFIType.u32;

  /** /data/input/pact.h#L2860 */
  export declare function pactffi_verify(args: FFIType.cstring): PactFfi.int32_t;

  /** /data/input/pact.h#L2877 */
  export declare function pactffi_verifier_new(): Pointer<StructPointer<"VerifierHandle">>;

  /** /data/input/pact.h#L2891 */
  export declare function pactffi_verifier_new_for_application(name: FFIType.cstring, version: FFIType.cstring): Pointer<StructPointer<"VerifierHandle">>;

  /** /data/input/pact.h#L2896 */
  export declare function pactffi_verifier_shutdown(handle: Pointer<StructPointer<"VerifierHandle">>): FFIType.void;

  /** /data/input/pact.h#L2908 */
  export declare function pactffi_verifier_set_provider_info(handle: Pointer<StructPointer<"VerifierHandle">>, name: FFIType.cstring, scheme: FFIType.cstring, host: FFIType.cstring, port: FFIType.u16, path: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2929 */
  export declare function pactffi_verifier_add_provider_transport(handle: Pointer<StructPointer<"VerifierHandle">>, protocol: FFIType.cstring, port: FFIType.u16, path: FFIType.cstring, scheme: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L2948 */
  export declare function pactffi_verifier_set_filter_info(handle: Pointer<StructPointer<"VerifierHandle">>, filter_description: FFIType.cstring, filter_state: FFIType.cstring, filter_no_state: FFIType.u8): FFIType.void;

  /** /data/input/pact.h#L2969 */
  export declare function pactffi_verifier_set_provider_state(handle: Pointer<StructPointer<"VerifierHandle">>, url: FFIType.cstring, teardown: FFIType.u8, body: FFIType.u8): FFIType.void;

  /** /data/input/pact.h#L2985 */
  export declare function pactffi_verifier_set_verification_options(handle: Pointer<StructPointer<"VerifierHandle">>, disable_ssl_verification: FFIType.u8, request_timeout: FFIType.u64): FFIType.i32;

  /** /data/input/pact.h#L3000 */
  export declare function pactffi_verifier_set_coloured_output(handle: Pointer<StructPointer<"VerifierHandle">>, coloured_output: FFIType.u8): FFIType.i32;

  /** /data/input/pact.h#L3014 */
  export declare function pactffi_verifier_set_no_pacts_is_error(handle: Pointer<StructPointer<"VerifierHandle">>, is_error: FFIType.u8): FFIType.i32;

  /** /data/input/pact.h#L3034 */
  export declare function pactffi_verifier_set_publish_options(handle: Pointer<StructPointer<"VerifierHandle">>, provider_version: FFIType.cstring, build_url: FFIType.cstring, provider_tags: Pointer<FFIType.cstring>, provider_tags_len: FFIType.u16, provider_branch: FFIType.cstring): FFIType.i32;

  /** /data/input/pact.h#L3050 */
  export declare function pactffi_verifier_set_consumer_filters(handle: Pointer<StructPointer<"VerifierHandle">>, consumer_filters: Pointer<FFIType.cstring>, consumer_filters_len: FFIType.u16): FFIType.void;

  /** /data/input/pact.h#L3062 */
  export declare function pactffi_verifier_add_custom_header(handle: Pointer<StructPointer<"VerifierHandle">>, header_name: FFIType.cstring, header_value: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L3075 */
  export declare function pactffi_verifier_add_file_source(handle: Pointer<StructPointer<"VerifierHandle">>, file: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L3087 */
  export declare function pactffi_verifier_add_directory_source(handle: Pointer<StructPointer<"VerifierHandle">>, directory: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L3101 */
  export declare function pactffi_verifier_url_source(handle: Pointer<StructPointer<"VerifierHandle">>, url: FFIType.cstring, username: FFIType.cstring, password: FFIType.cstring, token: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L3120 */
  export declare function pactffi_verifier_broker_source(handle: Pointer<StructPointer<"VerifierHandle">>, url: FFIType.cstring, username: FFIType.cstring, password: FFIType.cstring, token: FFIType.cstring): FFIType.void;

  /** /data/input/pact.h#L3147 */
  export declare function pactffi_verifier_broker_source_with_selectors(handle: Pointer<StructPointer<"VerifierHandle">>, url: FFIType.cstring, username: FFIType.cstring, password: FFIType.cstring, token: FFIType.cstring, enable_pending: FFIType.u8, include_wip_pacts_since: FFIType.cstring, provider_tags: Pointer<FFIType.cstring>, provider_tags_len: FFIType.u16, provider_branch: FFIType.cstring, consumer_version_selectors: Pointer<FFIType.cstring>, consumer_version_selectors_len: FFIType.u16, consumer_version_tags: Pointer<FFIType.cstring>, consumer_version_tags_len: FFIType.u16): FFIType.void;

  /** /data/input/pact.h#L3169 */
  export declare function pactffi_verifier_execute(handle: Pointer<StructPointer<"VerifierHandle">>): FFIType.i32;

  /** /data/input/pact.h#L3220 */
  export declare function pactffi_verifier_cli_args(): FFIType.cstring;

  /** /data/input/pact.h#L3229 */
  export declare function pactffi_verifier_logs(handle: Pointer<StructPointer<"VerifierHandle">>): FFIType.cstring;

  /** /data/input/pact.h#L3238 */
  export declare function pactffi_verifier_logs_for_provider(provider_name: FFIType.cstring): FFIType.cstring;

  /** /data/input/pact.h#L3249 */
  export declare function pactffi_verifier_output(handle: Pointer<StructPointer<"VerifierHandle">>, strip_ansi: FFIType.u8): FFIType.cstring;

  /** /data/input/pact.h#L3257 */
  export declare function pactffi_verifier_json(handle: Pointer<StructPointer<"VerifierHandle">>): FFIType.cstring;

  /** /data/input/pact.h#L3285 */
  export declare function pactffi_using_plugin(pact: PactFfi.PactHandle, plugin_name: FFIType.cstring, plugin_version: FFIType.cstring): FFIType.u32;

  /** /data/input/pact.h#L3293 */
  export declare function pactffi_cleanup_plugins(pact: PactFfi.PactHandle): FFIType.void;

  /** /data/input/pact.h#L3323 */
  export declare function pactffi_interaction_contents(interaction: PactFfi.InteractionHandle, part: PactFfi.InteractionPart, content_type: FFIType.cstring, contents: FFIType.cstring): FFIType.u32;

  export declare function $$close(): void;
}
