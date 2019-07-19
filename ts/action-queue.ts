/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:39 PM -- March 14th, 2019.
 *	Project: @jsdsl/action-queue
 */

import { Queue } from "@jsdsl/queue";

type Action<E> = () => E;

/**
 * A queue of actions/lambdas.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class ActionQueue<E = any> extends Queue<Action<E>> {
	
	public constructor(...actions: Array<Action<E>>) {
		
		super(...actions);
		
	}
	
	public execute(): E {
		
		let potentialAction: Action<E> | undefined = this.dequeue();
		
		if (potentialAction !== undefined) return potentialAction();
		else throw new Error("ERR | Attempted to execute an action out of an empty ActionQueue.");
		
	}
	
	public executeAll(): E[] {
		
		let results: E[] = [];
		
		while (!this.isEmpty()) results.push(this.execute());
		
		return results;
		
	}
	
}