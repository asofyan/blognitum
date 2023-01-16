import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/blognitum/blognitum/tx";
import { MsgDeleteComment } from "./types/blognitum/blognitum/tx";
import { MsgCreateComment } from "./types/blognitum/blognitum/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blognitum.blognitum.MsgCreatePost", MsgCreatePost],
    ["/blognitum.blognitum.MsgDeleteComment", MsgDeleteComment],
    ["/blognitum.blognitum.MsgCreateComment", MsgCreateComment],
    
];

export { msgTypes }