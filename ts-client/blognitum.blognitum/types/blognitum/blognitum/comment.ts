/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "blognitum.blognitum";

export interface Comment {
  id: number;
  creator: string;
  title: string;
  body: string;
  postID: number;
  createdAt: number;
}

function createBaseComment(): Comment {
  return { id: 0, creator: "", title: "", body: "", postID: 0, createdAt: 0 };
}

export const Comment = {
  encode(message: Comment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.postID !== 0) {
      writer.uint32(40).uint64(message.postID);
    }
    if (message.createdAt !== 0) {
      writer.uint32(48).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Comment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.postID = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Comment {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      postID: isSet(object.postID) ? Number(object.postID) : 0,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.postID !== undefined && (obj.postID = Math.round(message.postID));
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Comment>, I>>(object: I): Comment {
    const message = createBaseComment();
    message.id = object.id ?? 0;
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.postID = object.postID ?? 0;
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
