import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateComment } from "./types/blognitum/blognitum/tx";
import { MsgCreatePost } from "./types/blognitum/blognitum/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blognitum.blognitum.MsgCreateComment", MsgCreateComment],
    ["/blognitum.blognitum.MsgCreatePost", MsgCreatePost],
    
];

export { msgTypes }