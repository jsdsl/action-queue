import { Queue } from "@jsdsl/queue";
declare type Action<E> = () => E;
export declare class ActionQueue<E = any> extends Queue<Action<E>> {
    constructor(...actions: Array<Action<E>>);
    execute(): E;
    executeAll(): E[];
}
export {};
